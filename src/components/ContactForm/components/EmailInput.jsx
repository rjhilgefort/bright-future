import React, { Fragment } from 'react'
import styled from 'styled-components'
import FormElementFactory from './FormElementFactory'

const Input = styled.input``

const EmailInput = FormElementFactory(Input, 'email', 'email')

export default EmailInput
