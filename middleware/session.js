const util = require("util");
const payload = (req, res, next) => {
  if (!req.body) {
    res.status(403).send("You need a payload");
  } else next();
};

const auth = (req, res, next) => {
  if (req.session && req.session.user) next();
  else res.status(403).send("You must be logged in.");
};

const validatePayload = util.promisify(payload);
const authlogged = util.promisify(auth);

module.exports = { validatePayload, authlogged };
