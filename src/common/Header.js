import React from 'react'
import styled from 'styled-components'
import { propertyInfo } from '../data/data1.json'
import { BLACK, DESERT_STORM, NEPTUNE, AZURE, WHITE } from '../colors'
import LegendSold from '../assets/legendSold.svg'

const Container = styled.div`
  padding: 25px 50px;
  background: ${DESERT_STORM};
  grid-area: header;
  display: grid;
  grid-template-columns: 1fr 300px;
  grid-template-rows: auto;
  grid-template-areas:
    'title chart'
    'section chart'
    '. chart';
`

const Title = styled.div`
  grid-area: title;
  font-size: 25px;
`

const Section = styled.div`
  grid-area: section;
  font-size: 45px;
  font-weight: bold;
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

const Legend = styled.img`
  width: 25px;
`

const Header = ({ section }) => {
  return (
    <Container>
      <Title>Market Report</Title>
      <Section>{section}</Section>
      <Chart>
        <Row selected>
          <span>Your Market</span>
          <span>{propertyInfo.selectedProperty}</span>
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
          <Legend src={LegendSold} />
          <span>Sold Properties: Properties sold last 1 month</span>
        </Row>
      </Chart>
    </Container>
  )
}

export default Header
