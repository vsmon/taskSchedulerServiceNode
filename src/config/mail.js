require("dotenv").config();

module.exports = {
  service: process.env.SERVICE,
  host: process.env.HOST,
  auth: {
    user: process.env.USER,
    pass: process.env.PASS,
  },
  /*   debug: true,
  logger: true,*/
};
