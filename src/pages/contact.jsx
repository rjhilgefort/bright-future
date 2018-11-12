import React from 'react'
import Layout from '../components/Layout'
import ContactForm from '../components/ContactForm'

const ContactPage = ({ location }) => (
  <Layout location={location}>
    <ContactForm />
  </Layout>
)

export default ContactPage
