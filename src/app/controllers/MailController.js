const Mail = require("../../lib/Mail");

class MailController {
  async send(message) {
    try {
      await Mail.sendMail(message);
      console.log(`Email enviado com sucesso.`);
    } catch (error) {
      console.error(`Ocorreu um erro no envio do email:`, error);
    }
  }
}

module.exports = new MailController();
