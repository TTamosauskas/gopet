import * as Yup from 'yup';
import Contact from '../models/Contact';

class ContactController {
  async store(req, res) {
    const schema = Yup.object().shape({
      rua: Yup.string().required(),
      telefone: Yup.integer().required(),
      numero: Yup.integer().required(),
      complemento: Yup.text(),
      estado: Yup.string().required(),
      cidade: Yup.string().required(),
      cep: Yup.integer().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails.' });
    }

    const {
      id,
      rua,
      telefone,
      numero,
      complemento,
      estado,
      cidade,
      cep,
      provider,
    } = await Contact.create(req.body);

    return res.json({
      id,
      rua,
      telefone,
      numero,
      complemento,
      estado,
      cidade,
      cep,
      provider,
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      rua: Yup.string().required(),
      telefone: Yup.integer().required(),
      numero: Yup.integer().required(),
      complemento: Yup.text(),
      estado: Yup.string().required(),
      cidade: Yup.string().required(),
      cep: Yup.integer().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const {
      id,
      rua,
      telefone,
      numero,
      complemento,
      estado,
      cidade,
      cep,
      provider,
    } = await Contact.update(req.body);

    return res.json({
      id,
      rua,
      telefone,
      numero,
      complemento,
      estado,
      cidade,
      cep,
      provider,
    });
  }
}

export default new ContactController();
