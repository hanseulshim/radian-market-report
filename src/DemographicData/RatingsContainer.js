import React from 'react'
import styled from 'styled-components'
import config from '../config'
import { demographicData } from '../data/data.json'
import { getAverage } from '../helper'
import numeral from 'numeral'
import car from '../assets/car.svg'
import train from '../assets/train.svg'
import bike from '../assets/bike.svg'

const {
  selectedProperty,
  comparisonProperty1,
  comparisonProperty2
} = demographicData

const { WILD_SAND } = config.colors

const Container = styled.div`
  display: flex;
  margin-right: 50px;
`

const Rating = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: 10px;
`

const Title = styled.div`
  width: 100%;
  font-weight: bold;
  font-size: 110%;
`

const Panel = styled.div`
  background: ${WILD_SAND};
  margin-right: 2px;
  padding: 5px 15px;
`

const PanelContainer = styled.div`
  display: flex;
`

const SubPanelContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const AveragePanel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50px;
  margin-right: 3px;
  background: ${props => getColor(props.value)};
`

const AverageValue = styled.div`
  font-weight: bold;
  margin-bottom: -10px;
  font-size: 200%;
`

const MetricContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${props => (props.last ? '0px' : '3px')};
`
const MetricValue = styled.div`
  background: ${props => getColor(props.value)};
  width: 20px;
  text-align: center;
  margin-right: 3px;
`
const Icon = styled.img`
  width: 12px;
  height: 12px;
`

const getColor = value => {
  if (value <= 1) {
    return '#BA131A'
  } else if (value <= 2) {
    return '#C6401E'
  } else if (value <= 3) {
    return '#CB5724'
  } else if (value <= 4) {
    return '#D27C30'
  } else if (value <= 5) {
    return '#C59C44'
  } else if (value <= 6) {
    return '#CBB356'
  } else if (value <= 7) {
    return '#CDBD6C'
  } else if (value <= 8) {
    return '#C9CE94'
  } else if (value <= 9) {
    return '#CDDDAB'
  } else if (value <= 10) {
    return '#D5E8C1'
  }
}

const createPanels = rating => {
  const average = getAverage(rating.map(v => v.value))
  return (
    <PanelContainer>
      <AveragePanel value={average}>
        <AverageValue>{numeral(average).format('0.[0]')}</AverageValue>
        <div>Avg</div>
      </AveragePanel>
      <SubPanelContainer>
        {rating.map((metric, i) => (
          <MetricContainer key={i} last={i === rating.length - 1}>
            <MetricValue value={metric.value}>{metric.value}</MetricValue>
            {metric.label === 'car' ? (
              <Icon src={car} />
            ) : metric.label === 'train' ? (
              <Icon src={train} />
            ) : metric.label === 'bike' ? (
              <Icon src={bike} />
            ) : (
              <div>{metric.label}</div>
            )}
          </MetricContainer>
        ))}
      </SubPanelContainer>
    </PanelContainer>
  )
}

const RatingsContainer = () => {
  return (
    <Container>
      <Rating>
        <Title>School Ratings</Title>
        <Panel>
          <div>{selectedProperty.label}</div>
          {createPanels(selectedProperty.ratings.schoolRating)}
        </Panel>
        <Panel>
          <div>{comparisonProperty1.label}</div>
          {createPanels(comparisonProperty1.ratings.schoolRating)}
        </Panel>
        <Panel>
          <div>{comparisonProperty2.label}</div>
          {createPanels(comparisonProperty2.ratings.schoolRating)}
        </Panel>
      </Rating>
      <Rating>
        <Title>Transit Ratings</Title>
        <Panel>
          <div>{selectedProperty.label}</div>
          {createPanels(selectedProperty.ratings.transitRatings)}
        </Panel>
        <Panel>
          <div>{comparisonProperty1.label}</div>
          {createPanels(comparisonProperty1.ratings.transitRatings)}
        </Panel>
        <Panel>
          <div>{comparisonProperty2.label}</div>
          {createPanels(comparisonProperty2.ratings.transitRatings)}
        </Panel>
      </Rating>
    </Container>
  )
}

export default RatingsContainer
