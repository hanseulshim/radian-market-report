import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { BLACK, DESERT_STORM, NEPTUNE, AZURE, WHITE } from '../colors'
import Text from './Text'

const Container = styled.div`
  padding: 25px 50px;
  margin: 0 -50px;
  margin-bottom: 25px;
  background: ${DESERT_STORM};
  display: grid;
  grid-template-columns: 1fr 320px;
  grid-area: header;
  grid-template-areas:
    'title chart'
    'section chart';
`

const Title = styled(Text)`
  grid-area: title;
  align-self: end;
`

const Section = styled(Text)`
  grid-area: section;
`

const Chart = styled.div`
  grid-area: chart;
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px;
  margin: 2px 0;
  background: ${props =>
    props.selected
      ? BLACK
      : props.comparable1
      ? AZURE
      : props.comparable2
      ? NEPTUNE
      : 'inherit'};
  color: ${props => (props.selected || props.comparable1 ? WHITE : BLACK)};
`

const Header = ({ section }) => {
  const [propertyInfo, setPropertyInfo] = useState({})
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('./data.json')
      const data = await res.json()
      setPropertyInfo(data.propertyInfo)
    }
    fetchData()
  }, [])
  return (
    <Container>
      <Title h1>Market Report</Title>
      <Section section>{section}</Section>
      <Chart>
        <Row selected>
          <span>Your Market</span>
          <span>{propertyInfo.selected}</span>
        </Row>
        <Row comparable1>
          <span>Comparable 1</span>
          <span>{propertyInfo.comparable1}</span>
        </Row>
        <Row comparable2>
          <span>Comparable 2</span>
          <span>{propertyInfo.comparable2}</span>
        </Row>
        <Row>
          Property Attributes: {propertyInfo.bedrooms} beds,{' '}
          {propertyInfo.squareFeet} sq ft
        </Row>
      </Chart>
    </Container>
  )
}

export default Header
