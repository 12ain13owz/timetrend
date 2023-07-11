const config = {
  db: {
    database: process.env.DB_NAME || "timetrend",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASS || "",
    option: {
      dialect: process.env.DIALECT || "sqlite",
      storage: "./timetrend-db.sqlite",
    },
  },
};

module.exports = config;
