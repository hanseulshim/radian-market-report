import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import numeral from 'numeral'
import { getAverage } from '../helper'
import car from '../assets/carBlack.svg'
import train from '../assets/train.svg'
import bike from '../assets/bike.svg'

import { DESERT_STORM, BLACK, WHITE } from '../colors'

const SchoolRating = styled.div`
  display: grid;
  grid-area: schoolRating;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas: 'selected comparable1 comparable2';
  grid-column-gap: 5px;
  margin-top: 25px;
`

const TransitRating = styled.div`
  display: grid;
  grid-area: transitRating;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas: 'selected comparable1 comparable2';
  grid-column-gap: 5px;
  margin-top: 25px;
`

const Panel = styled.div`
  background: ${DESERT_STORM};
  padding: 10px;

  > div {
    font-variant: normal;
  }
`

const Rating = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 2fr 1fr 1fr;
  grid-template-areas:
    'avg . .'
    'avg . .'
    'avg . .';
  grid-gap: 3px;
`

const AveragePanel = styled.div`
  grid-area: avg;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px 0;
  background: ${props => getBackground(props.value)};
  color: ${props => getColor(props.value)};

  > span {
    font-variant: normal;
  }
`

const MetricValue = styled.div`
  background: ${props => getBackground(props.value)};
  color: ${props => getColor(props.value)};
  text-align: center;
  padding-top: 2px;
  font-weight: bold;
`
const Icon = styled.img`
  width: 14px;
  height: 14px;
  align-self: center;
`

const getColor = value => (value <= 3 ? WHITE : BLACK)

const getBackground = value => {
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
    <Rating>
      <AveragePanel value={average}>
        <span
          style={{
            textAlign: 'center',
            fontSize: '28px',
            fontWeight: 'bold'
          }}
        >
          {numeral(average).format('0.[0]')}
        </span>
        <span>Avg</span>
      </AveragePanel>
      {rating.map((metric, i) => (
        <React.Fragment key={i}>
          <MetricValue value={metric.value}>{metric.value}</MetricValue>
          {metric.label === 'car' ? (
            <Icon src={car} />
          ) : metric.label === 'train' ? (
            <Icon src={train} />
          ) : metric.label === 'bike' ? (
            <Icon src={bike} />
          ) : (
            <span>{metric.label}</span>
          )}
        </React.Fragment>
      ))}
    </Rating>
  )
}

const RatingsContainer = () => {
  const [propertyInfo, setPropertyInfo] = useState({})
  const [schoolRatings, setSchoolRatings] = useState({})
  const [transitRatings, setTransitRatings] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('./data.json')
      const data = await res.json()
      setPropertyInfo(data.propertyInfo)
      setSchoolRatings(data.schoolRatings)
      setTransitRatings(data.transitRatings)
    }
    fetchData()
  }, [])
  if (
    propertyInfo.selected &&
    schoolRatings.selected &&
    transitRatings.selected
  ) {
    return (
      <>
        <SchoolRating id="school-ratings">
          <Panel>
            <div>{propertyInfo.selected}</div>
            {createPanels(schoolRatings.selected.values)}
          </Panel>
          <Panel>
            <div>{propertyInfo.comparable1}</div>
            {createPanels(schoolRatings.comparable1.values)}
          </Panel>
          <Panel>
            <div>{propertyInfo.comparable2}</div>
            {createPanels(schoolRatings.comparable2.values)}
          </Panel>
        </SchoolRating>
        <TransitRating id="transit-ratings">
          <Panel>
            <div>{propertyInfo.selected}</div>
            {createPanels(transitRatings.selected.values)}
          </Panel>
          <Panel>
            <div>{propertyInfo.comparable1}</div>
            {createPanels(transitRatings.comparable1.values)}
          </Panel>
          <Panel>
            <div>{propertyInfo.comparable2}</div>
            {createPanels(transitRatings.comparable2.values)}
          </Panel>
        </TransitRating>
      </>
    )
  } else return <span>...Loading</span>
}

export default RatingsContainer
