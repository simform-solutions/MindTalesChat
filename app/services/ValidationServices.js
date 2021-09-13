import * as Yup from 'yup';
import {Strings} from '../constants';

const schema = {
  login: Yup.object({
    email: Yup.string()
      .email(Strings.invalidEmail)
      .required(Strings.emptyEmail),
    password: Yup.string().required(Strings.emptyPassword),
  }),
  register: Yup.object({
    name: Yup.string().max(15, Strings.inValidName).required(Strings.emptyName),
    email: Yup.string()
      .email(Strings.invalidEmail)
      .required(Strings.emptyEmail),
    gender: Yup.string().label('gender').required(),
    phoneNo: Yup.string().label('Phone Number').required().min(10),
  }),
};

export default schema;
