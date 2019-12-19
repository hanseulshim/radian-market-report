/* eslint react/prop-types: 0 */
import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faSchool,
  faCarSide,
  faUserNinja,
  faArrowUp,
  faArrowDown,
  faAngleLeft,
  faAngleRight
} from '@fortawesome/free-solid-svg-icons'

const Container = styled.div`
  width: ${props => `${props.width}px`};
  height: ${props => `${props.height}px`};
  color: ${props => props.color};
  font-weight: bold;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  z-index: 1;
`

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.7;
  border-radius: 10px;
  z-index: -1;
  background: ${props => props.background};
`

const Title = styled.div`
  margin: 3px 0;
  width: 100%;
  text-align: center;
`

const Column = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
`

const Average = styled.div`
  font-size: 200%;
`

const TrendContainer = styled.div`
  font-size: 110%;
  background: ${props => props.background};
  padding: 2px;
  width: 80%;
  text-align: center;
`

const MapStat = ({
  label,
  ratings,
  selectedProperty,
  width,
  height,
  background,
  color
}) => {
  return (
    <Container width={width} height={height} color={color}>
      <Background background={background} />
      <Title>{label}</Title>
      <Column>
        <FontAwesomeIcon icon={faSchool} color={color} size="sm" />
        <Average>{ratings.schoolRatings.average}</Average>
        <TrendContainer background={background}>
          {ratings.schoolRatings.trend === 'up' ? (
            <FontAwesomeIcon icon={faArrowUp} color={color} size="sm" />
          ) : ratings.schoolRatings.trend === 'down' ? (
            <FontAwesomeIcon icon={faArrowDown} color={color} size="sm" />
          ) : null}{' '}
          <span>{ratings.schoolRatings.trendDelta}</span>
        </TrendContainer>
      </Column>
      <Column>
        <FontAwesomeIcon icon={faCarSide} color={color} size="sm" />
        <Average>{ratings.transitRatings.average}</Average>
        <TrendContainer background={background}>
          {ratings.transitRatings.trend === 'up' ? (
            <FontAwesomeIcon icon={faArrowUp} color={color} size="sm" />
          ) : ratings.transitRatings.trend === 'down' ? (
            <FontAwesomeIcon icon={faArrowDown} color={color} size="sm" />
          ) : null}{' '}
          <span>{ratings.transitRatings.trendDelta}</span>
        </TrendContainer>
      </Column>
      <Column>
        <FontAwesomeIcon icon={faUserNinja} color={color} size="sm" />
        <Average>{ratings.crimeRatings.average}</Average>
        <TrendContainer background={background}>
          {ratings.crimeRatings.trend === 'up' ? (
            <FontAwesomeIcon icon={faAngleLeft} color={color} size="sm" />
          ) : ratings.crimeRatings.trend === 'down' ? (
            <FontAwesomeIcon icon={faAngleRight} color={color} size="sm" />
          ) : null}{' '}
          <span>{ratings.crimeRatings.trendDelta}</span>
        </TrendContainer>
      </Column>
    </Container>
  )
}

export default MapStat
