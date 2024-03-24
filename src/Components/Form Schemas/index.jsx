import * as Yup from "yup";

export const ContactFormSchemas=Yup.object({
    name:Yup.string().min(3).max(25).required("Name field is required !"),
    orderno:Yup.string().required("Please enter your order no !"),
    email:Yup.string().email().required("Email id is required !"),
    message:Yup.string().min(25).max(200).required("Please write your concern here"),
    concern:Yup.string().required("Please choose your concern here !"),
    file:Yup.string().required("Please share product image !"),
    // Phoneno:Yup.number().min(6).max(12).required("Please give us your contact no !")

})