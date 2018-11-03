import React from 'react'
import Layout from '../components/Layout'
import TourCarousel from '../components/TourCarousel'

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <h1>Index</h1>
    <TourCarousel />
  </Layout>
)

export default IndexPage
