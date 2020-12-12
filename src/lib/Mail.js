const nodemailer = require("nodemailer");
const configMail = require("../config/mail");

class Mail {
  constructor() {
    this.transporter = nodemailer.createTransport(configMail);
  }
  sendMail(message) {
    return this.transporter.sendMail({
      from: `Rodrigo <noreplay@gmail.com>`,
      to: "teste@gmail.com",
      subject: "OCORREU UM ERRO NA INTEGRACAO",
      text: message,
    });
  }
}

module.exports = new Mail();
