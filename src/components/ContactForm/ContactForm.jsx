import React, { Fragment } from 'react'
import { shouldUpdate } from 'recompose'
import { withFormik } from 'formik'
import createFormikFieldsComparator from 'create-formik-fields-comparator';

const EmailInput = shouldUpdate(
  createFormikFieldsComparator(['email'])
)(({
  values,
  errors,
  touched,
  onChange,
  onBlur
}) => (
  <Fragment>
    <input
      type="email"
      name="email"
      onChange={onChange}
      onBlur={onBlur}
      value={values.email}
    />
    {errors.email && touched.email && <div>{errors.email}</div>}
  </Fragment>
));

const MessageInput = shouldUpdate(
  createFormikFieldsComparator(['message'])
)(({
  values,
  errors,
  touched,
  onChange,
  onBlur
}) => (
  <Fragment>
    <textarea
      type="text"
      name="message"
      onChange={onChange}
      onBlur={onBlur}
      value={values.message}
    />
    {errors.message && touched.message && <div>{errors.message}</div>}
  </Fragment>
));

const ContactForm = ({
  postContact,
  postContactResponse,
  values,
  errors,
  touched,
  handleSubmit,
  handleChange,
  handleBlur,
  handleReset,
  isSubmitting,
}) => (
  <Fragment>
    <form onSubmit={handleSubmit}>
      <EmailInput
        values={values}
        errors={errors}
        touched={touched}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <MessageInput
        values={values}
        errors={errors}
        touched={touched}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <button type="submit" disabled={isSubmitting}>
        Submit
      </button>
    </form>
    {console.log(postContactResponse)}
    {postContactResponse && postContactResponse.pending === false && (
       <p>Contact form submitted!</p>
    )}
  </Fragment>
)

export default ContactForm
