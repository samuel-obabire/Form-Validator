import { Formik, Form } from 'formik'

import { validationSchema } from './formUtils'
import Checkbox from './Checkbox'
import Select from './Select'
import TextInput from './TextInput'
import Password from './Password'

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  acceptedTerms: true, // added for our checkbox
  jobType: '', // added for our select
  password: '',
  'password-confirmation': ''
}

const MyForm = () => {
  const onSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2))
      setSubmitting(false)
    }, 400)
  }

  return (
    <>
      <h1>Form</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}>
        <Form>
          <TextInput
            label="First Name"
            name="firstName"
            type="text"
            placeholder="Jane"
          />
          <TextInput
            label="Last Name"
            name="lastName"
            type="text"
            placeholder="Doe"
          />
          <TextInput
            label="Email Address"
            name="email"
            type="email"
            placeholder="jane@formik.com"
          />

          <Select label="Job Type" name="jobType">
            <option value="">Select a job type</option>
            <option value="designer">Designer</option>
          </Select>

          <Password label="Password" name="password" type="password" />
          <Password
            label="Password Confirmation"
            name="password-confirmation"
            type="password"
          />

          <Checkbox name="acceptedTerms">
            I accept the terms and conditions
          </Checkbox>

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  )
}

export default MyForm
