import React from 'react'
import styled from 'styled-components'

const Title = styled.div`
  font-size: ${props =>
    props.h1
      ? '25px'
      : props.section
      ? '45px'
      : props.subSection
      ? '30px'
      : props.chartTitle
      ? '20px'
      : 'initial'};
  font-weight: ${props =>
    props.section || props.subSection || props.chartTitle ? 'bold' : 'initial'};
`

const Text = ({ children, ...props }) => {
  return <Title {...props}>{children}</Title>
}

export default Text
