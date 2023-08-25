import * as yup from 'yup'

export const userSchema = yup.object().shape({
    firstName: yup.string().min(3).max(16, 'name cannot be longer than 16 letter').required(),
    lastName: yup.string().min(3).max(16 , 'name cannot be longer than 16 letter').required(),
    email: yup.string().email().required(),
    message: yup.string().required(),
    
});