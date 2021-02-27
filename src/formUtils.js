import * as Yup from 'yup'

export const validationSchema = Yup.object({
  firstName: Yup.string()
    .max(15, 'Must be 15 characters or less')
    .required('Required'),
  lastName: Yup.string()
    .max(20, 'Must be 20 characters or less')
    .required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  acceptedTerms: Yup.boolean()
    .required('Required')
    .oneOf([true], 'You must accept the terms and conditions.'),
  jobType: Yup.string()
    .oneOf(['designer', 'development', 'product', 'other'], 'Invalid Job Type')
    .required('Required'),
  password: Yup.string().required('Password is required'),
  'password-confirmation': Yup.string().oneOf(
    [Yup.ref('password')],
    'Password does not match'
  ),
  createdOn: Yup.date().default(function () {
    return new Date()
  })
})
