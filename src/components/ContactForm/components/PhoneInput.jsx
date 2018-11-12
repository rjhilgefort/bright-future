import React, { Fragment } from 'react'
import styled from 'styled-components'
import FormElementFactory from './FormElementFactory'

const Input = styled.input``

const PhoneInput = FormElementFactory(Input, 'tel', 'phone')

export default PhoneInput
