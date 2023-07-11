const path = require("path");
const util = require("util");
const multer = require("multer");
const fs = require("fs");

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    const imagePath = path.join(`public/receipt`);
    if (!fs.existsSync(imagePath)) fs.mkdirSync(imagePath);

    callback(null, imagePath);
  },
  filename: (req, file, callback) => {
    const extension = file.mimetype.split("/").pop();
    const now = Date.now();
    const name = `${file.fieldname}-${now}.${extension}`;

    callback(null, name);
  },
});

const uploadImage = multer({
  storage: storage,
}).fields([
  {
    name: "receipt",
    maxCount: 1,
  },
]);

const receiptFile = util.promisify(uploadImage);
module.exports = receiptFile;
