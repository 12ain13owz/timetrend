const bcrypt = require("bcrypt");
const db = require("../models/auth.model");
const dbUser = require("../models/user.model");
const sequelize = require("../models/index");
const { Op } = require("sequelize");
const uploadFile = require("../middleware/upload");
const { validatePayload, authlogged } = require("../middleware/session");

const getLogIn = async (req, res) => {
  req.session.user
    ? res.status(200).send({ loggedIn: true })
    : res.status(200).send({ loggedIn: false });
};

const onLogIn = async (req, res) => {
  try {
    await validatePayload(req, res);
    const { username, password } = req.body;
    let messageError = "Incorrect Username and/or Password";
    let result;
    if (username && password) {
      const account = await db.account.findOne({
        where: { username: username },
      });

      if (account) {
        const hash = account.getDataValue("password");
        result = bcrypt.compareSync(password, hash);
        if (result) {
          req.session.loggedIn = true;
          req.session.user = username;
        } else throw messageError;
      } else throw messageError;
    }
    res.send({ user: username });
  } catch (error) {
    console.log(error);
    res.status(404).send(error);
  }
};

const onLogOut = async (req, res) => {
  req.session.destroy((err) => {
    if (err) res.status(500).send("Could not log out.");
    else res.end();
  });
};

const getProduct = async (req, res) => {
  try {
    await authlogged(req, res);

    const product = await db.product.findAll({
      where: {
        status: 1,
        stock: {
          [Op.gte]: 1,
        },
      },
    });

    if (product) res.send(product);
    else throw "Product data not found in system.";
  } catch (error) {
    console.log(error);
    res.status(404).send(error);
  }
};

const getProductByPK = async (req, res) => {
  try {
    await authlogged(req, res);
    const id = req.params.id;

    if (id) {
      const product = await db.product.findByPk(id);
      const id_product = await product.getDataValue("id_product");
      const imagesList = await db.image.findAll({
        where: { id_product },
      });

      if (product && imagesList) res.send({ product, imagesList });
      else throw "Product data not found in system.";
    } else throw "Product data not found in system.";
  } catch (error) {
    console.log(error);
    res.status(404).send(error);
  }
};

const onNewProduct = async (req, res) => {
  try {
    await authlogged(req, res);
    await uploadFile(req, res);

    const cover = req.files.cover[0].path
      .replace(/\\/g, "/")
      .replace(/(public\/*)/g, "");
    const path = req.files.images.map((data) => data.path);
    const bodyItem = {
      title: req.body.title,
      code: req.body.code,
      brand: req.body.brand,
      color: req.body.color,
      sale: req.body.sale,
      price: req.body.price,
      stock: req.body.stock,
      bestseller: req.body.bestseller,
      description: req.body.description,
      specifications: req.body.specifications,
      cover: cover,
      status: req.body.status,
    };

    const result = await sequelize.transaction(async (t) => {
      const createItem = await db.product.create(bodyItem, { transaction: t });
      const id_product = createItem.getDataValue("id_product");
      const bodyImage = [];

      for (value of path) {
        const val = value.replace(/\\/g, "/").replace(/(public\/*)/g, "");
        const obj = { path: val, id_product };
        bodyImage.push(obj);
      }

      const createImage = await db.image.bulkCreate(bodyImage, {
        transaction: t,
      });

      return { createItem, createImage };
    });

    res.send(result);
  } catch (error) {
    let messageError = await errorUpload(req, error);
    if (messageError == "") messageError = "Unable to create record.";
    console.log(error);
    res.status(400).send(messageError);
  }
};

const onUpdateProduct = async (req, res) => {
  try {
    await authlogged(req, res);
    await uploadFile(req, res);

    const cover = req.files.cover[0].path
      .replace(/\\/g, "/")
      .replace(/(public\/*)/g, "");
    const path = req.files.images.map((data) => data.path);
    const id_product = req.body.id_product;
    const bodyItem = {
      title: req.body.title,
      code: req.body.code,
      brand: req.body.brand,
      color: req.body.color,
      sale: req.body.sale,
      price: req.body.price,
      stock: req.body.stock,
      bestseller: req.body.bestseller,
      description: req.body.description,
      specifications: req.body.specifications,
      cover: cover,
      status: req.body.status,
    };

    const result = await sequelize.transaction(async (t) => {
      await db.product.update(bodyItem, {
        where: { id_product },
        transaction: t,
      });

      const bodyImage = [];
      for (value of path) {
        const val = value.replace(/\\/g, "/").replace(/(public\/*)/g, "");
        const obj = { path: val, id_product };
        bodyImage.push(obj);
      }

      await db.image.destroy({
        where: { id_product },
        transaction: t,
      });
      await db.image.bulkCreate(bodyImage, {
        transaction: t,
      });

      return { message: "Update Success." };
    });

    res.send(result);
  } catch (error) {
    let messageError = await errorUpload(req, error);
    if (messageError == "") messageError = "Unable to update record.";
    console.log(error);
    res.status(400).send(messageError);
  }
};

const getInbox = async (req, res) => {
  try {
    await authlogged(req, res);

    const inbox = await dbUser.inbox.findAll({});
    if (!inbox) throw "Inbox data not found in system.";

    res.send(inbox);
  } catch (error) {
    console.log(error);
    res.status(404).send(error);
  }
};

const getInboxList = async (req, res) => {
  try {
    await authlogged(req, res);

    const inboxList = await dbUser.inbox.count({ where: { active: false } });
    if (!inboxList && inboxList != 0)
      throw "InboxList data not found in system.";

    res.send({ inboxList });
  } catch (error) {
    console.log(error);
    res.status(404).send(error);
  }
};

const onUpdateInbox = async (req, res) => {
  try {
    await authlogged(req, res);

    const id_inbox = req.body.map((data) => data.id_inbox);
    const result = await sequelize.transaction(async (t) => {
      for (id of id_inbox) {
        await dbUser.inbox.update(
          { active: true },
          { where: { id_inbox: id } }
        );
      }

      const inbox = await dbUser.inbox.findAll({});
      if (!inbox) throw "Inbox data not found in system.";
      return inbox;
    });

    res.send(result);
  } catch (error) {
    console.log(error);
    res.status(404).send(error);
  }
};

const getOrder = async (req, res) => {
  try {
    await authlogged(req, res);

    const order = await dbUser.order.findAll({});
    if (!order) throw "Order data not found in system.";

    res.send(order);
  } catch (error) {
    console.log(error);
    res.status(404).send(error);
  }
};

const getOrderList = async (req, res) => {
  try {
    await authlogged(req, res);

    const orderList = await dbUser.order.count({ where: { active: 0 } });
    if (!orderList && orderList != 0)
      throw "OrderList data not found in system.";

    res.send({ orderList });
  } catch (error) {
    console.log(error);
    res.status(404).send(error);
  }
};

const getOrderData = async (req, res) => {
  try {
    await authlogged(req, res);

    const id_order = req.params.id;
    const order = await dbUser.order.findByPk(id_order, { raw: true });
    if (!order) throw "OrderId not found in system.";

    const orderList = await dbUser.orderList
      .findAll({
        attributes: ["id", "quantity"],
        where: { id_order },
        raw: true,
        include: [
          {
            model: db.product,
            as: "prods",
            attributes: ["code", "color", "sale", "cover"],
          },
        ],
      })
      .then((data) => {
        return JSON.parse(JSON.stringify(data).replace(/\prods.\b/g, ""));
      })
      .catch((error) => {
        throw error;
      });
    if (!orderList) throw "OrderList and Product not found in system.";

    const orderTrack = await dbUser.orderTrack.findAll({
      attributes: ["id", "status", "date"],
      where: { id_order },
      raw: true,
    });
    if (!orderTrack) throw "OrderTrack not found in system.";

    const result = {
      order: order,
      list: orderList,
      track: orderTrack,
    };

    res.send(result);
  } catch (error) {
    console.log(error);
    res.status(404).send(error);
  }
};

const onUpdateOrder = async (req, res) => {
  try {
    await authlogged(req, res);
    const id_order = req.body.id_order;
    const bodyItem = {
      fullname: req.body.fullname,
      address1: req.body.address1,
      address2: req.body.address2,
      email: req.body.email,
      phone: req.body.phone,
      remark: req.body.remark,
      active: 1,
      logistic: req.body.logistic,
      logistic_track: req.body.logistic_track,
    };

    const result = await sequelize.transaction(async (t) => {
      await dbUser.order.update(bodyItem, {
        where: { id_order },
        transaction: t,
      });

      return { message: "Update order Success." };
    });

    res.send(result);
  } catch (error) {
    console.log(error);
    res.status(404).send(error);
  }
};

const onUpdateTrack = async (req, res) => {
  try {
    await authlogged(req, res);

    const item = req.body;
    const id_order = req.body[0].id_order;
    const active = req.body.map((data) => data.status).pop();

    const result = await sequelize.transaction(async (t) => {
      for (i in item) {
        const bodyItem = {
          status: item[i].status,
          date: item[i].date,
        };
        const id = item[i].id;
        await dbUser.orderTrack.update(bodyItem, {
          where: { id },
          transaction: t,
        });
      }

      if (active == 1) {
        await dbUser.order.update(
          { active: 2 },
          {
            where: { id_order },
            transaction: t,
          }
        );
      } else {
        await dbUser.order.update(
          { active: 1 },
          {
            where: { id_order },
            transaction: t,
          }
        );
      }

      return { message: "Update track Success." };
    });

    res.send(result);
  } catch (error) {
    console.log(error);
    res.status(404).send(error);
  }
};

module.exports = {
  getLogIn,
  onLogIn,
  onLogOut,
  getProduct,
  getProductByPK,
  onNewProduct,
  onUpdateProduct,
  getInbox,
  getInboxList,
  onUpdateInbox,
  getOrder,
  getOrderList,
  getOrderData,
  onUpdateOrder,
  onUpdateTrack,
};

async function errorUpload(req, err) {
  const maxCount = 7;
  const maxSize = "2 mb";
  let message = "";

  switch (err.code) {
    case "LIMIT_UNEXPECTED_FILE":
      message = `Number of files choosen for uploading are greater than ${maxCount}`;
      break;
    case "LIMIT_FILE_SIZE":
      message = `Choosen file size is greater than ${maxSize}`;
      break;
    case "INVALID_FILE_TYPE":
      message = "Choosen file is of invalid type";
      break;
    case "ENOENT":
      message = "Unable to store the file";
      break;
  }

  if (req.files.length === 0) message = "No file was uploaded";
  return message;
}
