import React from 'react'
import { Row, Col } from 'antd'
import Layout from '../components/Layout'
import BrightFutureImage from '../components/BrightFutureImage'

const IndexPage = () => (
  <Layout>
    <Row>
      <Col span={18} offset={3}>
        <BrightFutureImage />
      </Col>
    </Row>
  </Layout>
)

export default IndexPage
