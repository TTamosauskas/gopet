import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class Contact extends Model {
  static init(sequelize) {
    super.init(
      {
        rua: Sequelize.STRING,
        telefone: Sequelize.STRING,
        numero: Sequelize.STRING,
        complemento: Sequelize.STRING,
        estado: Sequelize.STRING,
        cidade: Sequelize.STRING,
        cep: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }
}

export default Contact;
