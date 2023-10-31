import * as Yup from "yup";
export const loginSchema = Yup.object().shape({
  pdsid: Yup.string().required("This field is required"),
  password: Yup.string().required("This field is required"),
});
