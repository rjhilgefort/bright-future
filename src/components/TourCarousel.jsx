import React from 'react'
import styled from 'styled-components'
import { Carousel } from 'antd'
import one from '../images/index-carousel/1.jpg'
import two from '../images/index-carousel/2.jpg'
import three from '../images/index-carousel/3.jpg'
import four from '../images/index-carousel/4.jpg'
import five from '../images/index-carousel/5.jpg'

const CarouselSC = styled(Carousel)`
  height: 600px;
  width: 600px;
`

const CarouselContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`

const TourCarousel = () => (
  <CarouselContainer>
    <CarouselSC autoplay>
      <img src={one} />
      <img src={two} />
      <img src={three} />
      <img src={four} />
      <img src={five} />
    </CarouselSC>
  </CarouselContainer>
)

export default TourCarousel
