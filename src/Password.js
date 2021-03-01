import { useField } from 'formik'

const Password = ({ label, password, className, ...props }) => {
  const [field, meta] = useField({ ...props, type: 'password' })

  return (
    <div className={className ?? ''}>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input type="password" {...field} {...props} />
      {meta.touched && meta.error ? <div>{meta.error}</div> : null}
    </div>
  )
}

export default Password
