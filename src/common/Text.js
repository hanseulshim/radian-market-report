import React from 'react'
import styled from 'styled-components'

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${props =>
    props.h1
      ? '25px'
      : props.section
      ? '45px'
      : props.subSection
      ? '30px'
      : props.value || props.chartTitle
      ? '20px'
      : props.subChartTitle
      ? '16px'
      : 'initial'};
  font-weight: ${props =>
    props.section ||
    props.subSection ||
    props.value ||
    props.chartTitle ||
    props.subChartTitle ||
    props.h1
      ? 'bold'
      : 'initial'};
  margin-left: ${props =>
    props.chartTitle || props.subChartTitle ? '50px' : 'initial'};
  margin-right: ${props =>
    props.chartTitle || props.subChartTitle ? '15px' : 'initial'};
  margin-bottom: ${props => (props.h1 ? '5px' : 'initial')};
  margin-top: ${props => (props.subChartTitle ? '15px' : 'initial')};
  border-bottom: ${props => (props.chartTitle ? '1px solid' : 'initial')};
`

const Text = ({ children, ...props }) => {
  return <Title {...props}>{children}</Title>
}

export default Text
