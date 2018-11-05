import React from 'react'
import styled from 'styled-components'
import { Carousel } from 'antd'
import Img from 'gatsby-image'
import * as _ from 'ramda'

import pic1 from '../images/aprons-on-hooks.jpg'
import pic2 from '../images/crayons-blur.jpg'
import pic3 from '../images/block-sushi.jpg'
import pic4 from '../images/kid-placing-pig.jpg'
import pic5 from '../images/crayons-in-box.jpg'
import pic6 from '../images/kid-taking-picture.jpg'
import pic7 from '../images/mug-on-books.jpg'
import pic8 from '../images/kid-playing-instrument.jpg'
import pic9 from '../images/girl-painting-on-canvas.jpg'
import pic10 from '../images/kid-holding-blocks.jpg'
import pic11 from '../images/word-kids-leggos.jpg'

const CarouselContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`

const CarouselSC = styled(Carousel)`
  width: 1000px;
`

const TourCarousel = () => (
  <CarouselContainer>
    <CarouselSC autoplay dots vertical effect="fade">
      <img src={pic1} />
      <img src={pic2} />
      <img src={pic3} />
      <img src={pic4} />
      <img src={pic5} />
      <img src={pic6} />
      <img src={pic7} />
      <img src={pic8} />
      <img src={pic9} />
      <img src={pic10} />
      <img src={pic11} />
    </CarouselSC>
  </CarouselContainer>
)

export default TourCarousel
