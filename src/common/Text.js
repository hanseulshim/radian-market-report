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
      : props.value || props.chartTitle
      ? '20px'
      : 'initial'};
  font-weight: ${props =>
    props.section ||
    props.subSection ||
    props.value ||
    props.chartTitle ||
    props.h1
      ? 'bold'
      : 'initial'};
  margin-left: ${props => (props.chartTitle ? '50px' : 'initial')};
  margin-right: ${props => (props.chartTitle ? '15px' : 'initial')};
  margin-bottom: ${props => (props.h1 ? '5px' : 'initial')};
  border-bottom: ${props => (props.chartTitle ? '1px solid' : 'initial')};
`

const Text = ({ children, ...props }) => {
  return <Title {...props}>{children}</Title>
}

export default Text
