import { compose } from 'recompose'
import { connect } from 'react-refetch'
import { withFormik } from 'formik'
import { string, object } from 'yup'

const withPostContact = connect(props => ({
  postContact: data => ({
    postContactResponse: {
      url: 'http://localhost:4040/contact',
      method: 'POST',
      body: JSON.stringify(data),
    },
  }),
}))

const enhancer = compose(
  withPostContact,
  withFormik({
    handleSubmit: ({ email, phone, message }, { props: { postContact } }) =>
      postContact({ email, phone, message }),
    mapPropsToValues: props => ({
      email: 'rjhilgefort@gmail.com',
      phone: '8599079797',
      message: 'This is a test from the real FE code',
    }),
    validationSchema: object({
      email: string()
        .nullable()
        .required('Email is required'),
      phone: string()
        .nullable()
        .required('Phone is required'),
      message: string()
        .nullable()
        .required('Message is required'),
    }),
  }),
)

export default enhancer
