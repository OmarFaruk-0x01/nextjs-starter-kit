import Joi from 'joi';

const email = Joi.string()
  .email({ tlds: { allow: false } })
  .required();
const password = Joi.string().min(1).required();

export const signInSchema = Joi.object({
  email,
  password,
});

export const registerSchema = Joi.object({
  email,
  password,
  confirm_password: Joi.ref('password'),
});
