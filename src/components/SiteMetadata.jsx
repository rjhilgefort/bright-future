import React from 'react'
import Helmet from 'react-helmet'

// TODO: Get this from GQL
const SiteMetadata = () => (
  <Helmet
    title="Bright Future"
    meta={[
      {
        name: 'description',
        content: 'Bright Future Child Enrichment Center',
      },
      { name: 'keywords', content: 'daycare, child, children, babysit' },
    ]}
  >
    <html lang="en" />
  </Helmet>
)

export default SiteMetadata
