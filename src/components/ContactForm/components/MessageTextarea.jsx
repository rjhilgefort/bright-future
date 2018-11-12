import React, { Fragment } from 'react'
import styled from 'styled-components'
import FormElementFactory from './FormElementFactory'

const Textarea = styled.textarea``

const MessageTextarea = FormElementFactory(Textarea, 'text', 'message')

export default MessageTextarea
