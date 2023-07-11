const db = require("../models/auth.model");
const dbUser = require("../models/user.model");
const sequelize = require("../models/index");
const { Op } = require("sequelize");
const receiptFile = require("../middleware/receipt");
const { Sequelize } = require("../models/index");

const getBestSeller = async (req, res) => {
  try {
    const { limit } = req.params;
    const result = await db.product.findAll({
      attributes: [
        "id_product",
        "code",
        "brand",
        "color",
        "sale",
        "price",
        "stock",
        "cover",
      ],
      where: { bestseller: true, status: true },
      limit: limit,
    });

    res.send(result);
  } catch (error) {
    console.log(error);
    res.status(404).send(error);
  }
};

const getProduct = async (req, res) => {
  try {
    const result = await db.product.findAll({
      attributes: [
        "id_product",
        "code",
        "brand",
        "color",
        "sale",
        "price",
        "stock",
        "cover",
      ],
      where: { status: true },
    });

    res.send(result);
  } catch (error) {
    console.log(error);
    res.status(404).send(error);
  }
};

const getProductById = async (req, res) => {
  try {
    const id = req.params.id;

    if (id) {
      const product = await db.product.findByPk(id, {
        attributes: [
          "id_product",
          "title",
          "code",
          "brand",
          "color",
          "sale",
          "price",
          "stock",
          "description",
          "specifications",
          "cover",
        ],
        raw: true,
      });

      const id_product = await product.id_product;
      const images = await db.image.findAll({
        attributes: ["path"],
        where: { id_product },
        raw: true,
      });

      if (product && images) {
        const result = {
          detail: product,
          imageList: images.map((data) => data.path),
        };

        res.send(result);
      } else throw "Data not found in system.";
    } else throw "Data not found in system.";
  } catch (error) {
    console.log(error);
    res.status(404).send(error);
  }
};

const getTrackStatus = async (req, res) => {
  try {
    const track = req.params.track.toUpperCase();
    if (!track) throw "Track not found in system.";

    const order = await dbUser.order.findOne({
      attributes: ["id_order", "logistic", "logistic_track"],
      where: { track },
      raw: true,
    });
    if (!order) throw "Track not found in system.";

    const orderList = await dbUser.orderList
      .findAll({
        attributes: ["quantity"],
        where: { id_order: order.id_order },
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
    if (!orderList) throw "OrderList not found in system.";

    const orderTrack = await dbUser.orderTrack.findAll({
      attributes: ["status", "date"],
      where: { id_order: order.id_order },
      raw: true,
    });
    if (!orderTrack) throw "OrderTrack not found in system.";

    const result = {
      track: track,
      logistic: order.logistic,
      logistic_track: order.logistic_track,
      orderList,
      orderTrack,
    };

    res.send(result);
  } catch (error) {
    console.log(error);
    res.status(404).send(error);
  }
};

const onNewOrder = async (req, res) => {
  try {
    await receiptFile(req, res);

    const lastTrack = await dbUser.order.findAll({
      attributes: ["track"],
      order: [["createdAt", "DESC"]],
      limit: 1,
      raw: true,
    });
    const track = generateTrackNumber(lastTrack);
    const receipt = req.files.receipt[0].path
      .replace(/\\/g, "/")
      .replace(/(public\/*)/g, "");

    const bodyItem = {
      track: track,
      fullname: req.body.fullname,
      address1: req.body.address1,
      address2: req.body.address2,
      email: req.body.email,
      phone: req.body.phone,
      remark: req.body.remark,
      receipt: receipt,
      active: 0,
      logistic: "",
      logistic_track: "",
    };
    const cartItem = JSON.parse(req.body.cartItem);

    const result = await sequelize.transaction(async (t) => {
      const createOrder = await dbUser.order.create(bodyItem, {
        transaction: t,
      });
      const id_order = createOrder.getDataValue("id_order");
      const bodyOrderList = [];

      for (item of cartItem) {
        const obj = {
          id_order,
          id_product: item.detail.id_product,
          quantity: item.quantity,
        };
        bodyOrderList.push(obj);
      }

      const createOrderList = await dbUser.orderList.bulkCreate(bodyOrderList, {
        transaction: t,
      });

      const createOrderTrack = await dbUser.orderTrack.bulkCreate(
        [
          { id_order, status: true, date: getDay() },
          { id_order, status: false, date: null },
          { id_order, status: false, date: null },
          { id_order, status: false, date: null },
        ],
        { transaction: t }
      );

      for (item of bodyOrderList) {
        await db.product.update(
          { stock: Sequelize.literal(`stock - ${item.quantity}`) },
          {
            where: { id_product: item.id_product },
            transaction: t,
          }
        );
      }

      return { createOrder, createOrderList, createOrderTrack };
    });

    res.send({ track });
  } catch (error) {
    console.log(error);
    res.status(404).send(error);
  }
};

const onNewInbox = async (req, res) => {
  try {
    const bodyItem = {
      name: req.body.name,
      email: req.body.email,
      subject: req.body.subject,
      content: req.body.content,
      active: 0,
    };

    const result = await sequelize.transaction(async (t) => {
      const createInbox = await dbUser.inbox.create(bodyItem, {
        transaction: t,
      });

      return createInbox;
    });

    res.send({ messge: "success" });
  } catch (error) {
    console.log(error);
    res.status(404).send(error);
  }
};

module.exports = {
  getBestSeller,
  getProduct,
  getProductById,
  getTrackStatus,
  onNewOrder,
  onNewInbox,
};

function generateTrackNumber(lastTrack) {
  const year = new Date().getFullYear();
  if (lastTrack.length == 1) {
    const t = lastTrack[0].track.substr(6);
    const y = lastTrack[0].track.substr(2, 4);

    if (year != y) return `TM${year}00001`;
    else {
      let no = 1 + Number(t);
      const count = no.toString().length;

      for (let i = count; i < t.length; i++) {
        no = "0" + no.toString();
      }
      return `TM${year}${no}`;
    }
  } else return `TM${year}00001`;
}

function getDay() {
  const days = [
      "อาทิตย์",
      "จันทร์",
      "อังคาร",
      "พุธ",
      "พฤหัสบดี",
      "ศุกร์",
      "เสาร์",
    ],
    now = new Date(),
    date = now.getDate(),
    month = now.getMonth() + 1,
    hour = now.getHours(),
    min = now.getMinutes(),
    day = days[now.getDay()],
    datetime = `วัน${day}, ${date}/${month} ${hour}:${min}`;

  return datetime;
}
