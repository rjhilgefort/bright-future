import React, { Fragment } from 'react'
import styled from 'styled-components'
import { shouldUpdate } from 'recompose'
import { withFormik } from 'formik'
import { pageblockContainer, pageblockOffset } from '../../styles/mixins'
import EmailInput from './components/EmailInput'
import PhoneInput from './components/PhoneInput'
import MessageTextarea from './components/MessageTextarea'

export const ContactSectionContainer = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
`

const contactSectionItemWidth = 45
export const ContactSectionInfo = styled.div`
  display: flex;
  width: ${contactSectionItemWidth}%;
  flex-direction: column;
  justify-content: space-around;
`

export const ContactSectionForm = styled.form`
  display: flex;
  width: ${contactSectionItemWidth}%;
  flex-direction: column;
  justify-content: space-around;
`

const ContactForm = ({
  postContact,
  postContactResponse,
  // formik
  values,
  errors,
  touched,
  handleSubmit,
  handleChange,
  handleBlur,
  handleReset,
  isSubmitting,
}) => {
  const formElementProps = {
    values,
    errors,
    touched,
    onChange: handleChange,
    onBlur: handleBlur,
  }
  return (
    <ContactSectionContainer>
      <ContactSectionInfo>
        <p>Fist bit of info</p>
        <p>More info</p>
      </ContactSectionInfo>
      <ContactSectionForm onSubmit={handleSubmit}>
        <EmailInput {...formElementProps} />
        <PhoneInput {...formElementProps} />
        <MessageTextarea {...formElementProps} />
        <button type="submit" disabled={isSubmitting}>
          Submit
        </button>
        {postContactResponse &&
          postContactResponse.pending === false && (
          <p>Contact form submitted!</p>
        )}
      </ContactSectionForm>
    </ContactSectionContainer>
  )
}

export default ContactForm
