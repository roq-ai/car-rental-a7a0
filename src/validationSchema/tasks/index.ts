import * as yup from 'yup';

export const taskValidationSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().nullable(),
  status: yup.string().nullable(),
  user_id: yup.string().nullable().required(),
  project_id: yup.string().nullable().required(),
});
