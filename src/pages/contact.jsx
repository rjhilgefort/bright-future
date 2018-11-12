import React from 'react'
import Layout from '../components/Layout'
import ContactForm from '../components/ContactForm'


const ContactPage = ({ location, postContact, postContactResponse }) => (
  <Layout location={location}>
    <h1>Contact</h1>
    <p>There should be a contact form here.</p>
    <ContactForm />
  </Layout>
)

export default ContactPage
