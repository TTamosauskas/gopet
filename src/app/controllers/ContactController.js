import * as Yup from 'yup';
import Contact from '../models/Contact';

class ContactController {
  async store(req, res) {
    const schema = Yup.object().shape({
      rua: Yup.string().required(),
      telefone: Yup.number().required(),
      numero: Yup.number().required(),
      complemento: Yup.string(),
      estado: Yup.string().required(),
      cidade: Yup.string().required(),
      cep: Yup.number().required(),
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
      telefone: Yup.number().required(),
      numero: Yup.number().required(),
      complemento: Yup.string(),
      estado: Yup.string().required(),
      cidade: Yup.string().required(),
      cep: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { id } = req.body;

    const contato = await Contact.findByPk(id);

    const {
      rua,
      telefone,
      numero,
      complemento,
      estado,
      cidade,
      cep,
      provider,
    } = await contato.update(req.body);

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
