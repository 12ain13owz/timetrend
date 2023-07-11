const sequelize = require("./index");
const { DataTypes } = require("sequelize");
const db = require("../models/auth.model");

const order = sequelize.define(
  "order",
  {
    id_order: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    track: { type: DataTypes.STRING, unique: true },
    fullname: { type: DataTypes.STRING },
    address1: { type: DataTypes.STRING },
    address2: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING },
    phone: { type: DataTypes.TEXT },
    remark: { type: DataTypes.STRING },
    receipt: { type: DataTypes.STRING },
    active: { type: DataTypes.INTEGER },
    logistic: { type: DataTypes.STRING },
    logistic_track: { type: DataTypes.STRING },
  },
  { tableName: "order" }
);

const orderList = sequelize.define(
  "orderList",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_order: {
      type: DataTypes.INTEGER,
      references: {
        model: "order",
        key: "id_order",
      },
    },
    id_product: {
      type: DataTypes.INTEGER,
      references: {
        model: "product",
        key: "id_product",
      },
    },
    quantity: { type: DataTypes.INTEGER },
  },
  { tableName: "orderList" }
);

const orderTrack = sequelize.define(
  "orderTrack",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_order: {
      type: DataTypes.STRING,
      references: {
        model: "order",
        key: "id_order",
      },
    },
    status: { type: DataTypes.BOOLEAN },
    date: { type: DataTypes.STRING },
  },
  { tableName: "orderTrack" }
);

const inbox = sequelize.define(
  "inbox",
  {
    id_inbox: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING },
    subject: { type: DataTypes.STRING },
    content: { type: DataTypes.STRING },
    active: { type: DataTypes.BOOLEAN },
  },
  { tableName: "inbox" }
);

orderList.belongsTo(db.product, { foreignKey: "id_product", as: "prods" });
db.product.hasMany(orderList);

module.exports = { order, orderList, orderTrack, inbox };
