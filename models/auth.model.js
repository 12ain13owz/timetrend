const sequelize = require("./index");
const { DataTypes } = require("sequelize");

const account = sequelize.define(
  "account",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: { type: DataTypes.STRING },
    password: { type: DataTypes.STRING },
    status: { type: DataTypes.BOOLEAN },
  },
  { tableName: "account" }
);

const product = sequelize.define(
  "product",
  {
    id_product: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: { type: DataTypes.STRING },
    code: { type: DataTypes.STRING },
    brand: { type: DataTypes.STRING },
    color: { type: DataTypes.STRING },
    sale: { type: DataTypes.INTEGER },
    price: { type: DataTypes.INTEGER },
    stock: { type: DataTypes.INTEGER },
    bestseller: { type: DataTypes.BOOLEAN },
    description: { type: DataTypes.STRING },
    specifications: { type: DataTypes.STRING },
    cover: { type: DataTypes.STRING },
    status: { type: DataTypes.BOOLEAN },
  },
  { tableName: "product" }
);

const image = sequelize.define(
  "image",
  {
    id_image: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    path: {
      type: DataTypes.STRING,
      unique: true,
    },
    id_product: {
      type: DataTypes.INTEGER,
      references: {
        model: "product",
        key: "id_product",
      },
    },
  },
  { tableName: "image" }
);

module.exports = { account, product, image };

function createAdmin() {
  // const bcrypt = require("bcrypt");
  // const username = "???";
  // const password = "???";
  // const status = 1;
  // const salt = 10;
  // const hash = bcrypt.hashSync(password, salt);
  // account.create({ username, password: hash, status });
}

async function updatePath() {
  // const res = await image.findAll({
  //   attributes: ["id_image", "path"],
  // });
  // for (value of res) {
  //   const id_image = value.id_image;
  //   const path = value.path.replace(/\\/g, "/").replace(/(public\/*)/g, "");
  //   await image.update({ path }, { where: { id_image } });
  // }
  // console.log('success')
}

async function updateCover() {
  // const res = await product.findAll({
  //   attributes: ["id_product", "cover"],
  // });
  // for (value of res) {
  //   const id_product = value.id_product;
  //   const cover = value.cover.replace(/\\/g, "/").replace(/(public\/*)/g, "");
  //   await product.update({ cover }, { where: { id_product } });
  // }
  // console.log("success");
}
