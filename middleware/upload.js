const path = require("path");
const util = require("util");
const multer = require("multer");
const fs = require("fs");

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    const { code, color } = req.body;
    const imagePath = path.join(`public/products/${code}-${color}`);
    if (!fs.existsSync(imagePath)) fs.mkdirSync(imagePath);

    callback(null, imagePath);
  },
  filename: (req, file, callback) => {
    const extension = file.mimetype.split("/").pop();
    let name = "";

    if (file.fieldname === "cover") name = `cover.${extension}`;
    else name = file.originalname;

    callback(null, name);
  },
});

const uploadImage = multer({
  storage: storage,
}).fields([
  {
    name: "cover",
    maxCount: 1,
  },
  {
    name: "images",
    maxCount: 10,
  },
]);

const uploadFile = util.promisify(uploadImage);
module.exports = uploadFile;
