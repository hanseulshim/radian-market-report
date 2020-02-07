/* eslint react/prop-types: 0 */
import React from 'react'
import styled from 'styled-components'
import numeral from 'numeral'
import { WHITE, BLACK, AZURE, NEPTUNE } from '../colors'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import {
  propertyInfo,
  schoolRatings,
  transitRatings,
  crimeRatings
} from '../data/data.json'
import { getAverage } from '../helper'
import carBlack from '../assets/carBlack.svg'
import carWhite from '../assets/carWhite.svg'
import schoolBlack from '../assets/schoolBlack.svg'
import schoolWhite from '../assets/schoolWhite.svg'
import crimeBlack from '../assets/crimeBlack.svg'
import crimeWhite from '../assets/crimeWhite.svg'

const MapInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    'title title info'
    '. . .';
  margin: 25px 50px;
  grid-gap: 15px;
  font-variant: normal;
`

const MapTitle = styled.div`
  grid-area: title;
  font-size: 20px;
  font-weight: bold;
`

const Info = styled.div`
  grid-area: info;
  width: 200px;
  justify-self: end;
  font-size: 14px;
  line-height: 15px;
  font-weight: bold;
`

const Stat = styled.div`
  color: ${props => (props.selected || props.comparable1 ? WHITE : BLACK)};
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    '. title .'
    'icon1 icon2 icon3'
    'avg1 avg2 avg3'
    'trend1 trend2 trend3';
  grid-gap: 0 15px;
  border-radius: 10px;
  padding: 10px 20px;
  justify-items: center;
  position: relative;
  z-index: 1;
  font-variant: normal;
`

const Title = styled.div`
  grid-area: title;
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: bold;
`

const Icon = styled.img`
  width: 25px;
  align-self: center;
  grid-area: ${props => `icon${props.location}`};
`

const Average = styled.div`
  grid-area: ${props => `avg${props.location}`};
  font-size: 35px;
  font-weight: bold;
`

const Trend = styled.div`
  grid-area: ${props => `trend${props.location}`};
  font-size: 18px;
  font-weight: bold;
  padding: 5px 0;
  background: ${props => getBackground(props.type)};
  width: 70px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 1px;
`

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.7;
  border-radius: 10px;
  z-index: -1;
  background: ${props => getBackground(props.type)};
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.35);
`

const getBackground = type =>
  type === 'comparable1' ? AZURE : type === 'comparable2' ? NEPTUNE : BLACK

const getAverageValue = arr => {
  const average = getAverage(arr.map(v => v.value))
  return numeral(average).format('0.[0]')
}

const getTrend = trend => {
  return trend === 'up' ? (
    <FontAwesomeIcon
      icon={faArrowUp}
      size="sm"
      color={WHITE}
      style={{ marginRight: '3px' }}
    />
  ) : trend === 'down' ? (
    <FontAwesomeIcon
      icon={faArrowDown}
      size="sm"
      color={WHITE}
      style={{ marginRight: '3px' }}
    />
  ) : null
}

const MapStat = () => {
  return (
    <MapInfo id="map-stats">
      <MapTitle h1>Market Averages</MapTitle>
      <Info h2>Comparison numbers are based on annual change</Info>
      <Stat selected>
        <Background type="selected" />
        <Title h2>{propertyInfo.selected}</Title>
        <Icon src={carWhite} location={1} />
        <Icon src={schoolWhite} location={2} />
        <Icon src={crimeWhite} location={3} />
        <Average location={1}>
          {getAverageValue(schoolRatings.selected.values)}
        </Average>
        <Average location={2}>
          {getAverageValue(transitRatings.selected.values)}
        </Average>
        <Average location={3}>{crimeRatings.selected.value}</Average>
        <Trend type="selected" location={1}>
          {getTrend(schoolRatings.selected.trend)}{' '}
          {schoolRatings.selected.trendDelta}
        </Trend>
        <Trend type="selected" location={2}>
          {getTrend(transitRatings.selected.trend)}{' '}
          {transitRatings.selected.trendDelta}
        </Trend>
        <Trend type="selected" location={3}>
          {getTrend(crimeRatings.selected.trend)}{' '}
          {crimeRatings.selected.trendDelta}
        </Trend>
      </Stat>
      <Stat comparable1>
        <Background type="comparable1" />
        <Title h2>{propertyInfo.comparable1}</Title>
        <Icon src={carWhite} location={1} />
        <Icon src={schoolWhite} location={2} />
        <Icon src={crimeWhite} location={3} />
        <Average location={1}>
          {getAverageValue(schoolRatings.comparable1.values)}
        </Average>
        <Average location={2}>
          {getAverageValue(transitRatings.comparable1.values)}
        </Average>
        <Average location={3}>{crimeRatings.comparable1.value}</Average>
        <Trend type="comparable1" location={1}>
          {getTrend(schoolRatings.comparable1.trend)}{' '}
          {schoolRatings.comparable1.trendDelta}
        </Trend>
        <Trend type="comparable1" location={2}>
          {getTrend(transitRatings.comparable1.trend)}{' '}
          {transitRatings.comparable1.trendDelta}
        </Trend>
        <Trend type="comparable1" location={3}>
          {getTrend(crimeRatings.comparable1.trend)}{' '}
          {crimeRatings.comparable1.trendDelta}
        </Trend>
      </Stat>
      <Stat comparable2>
        <Background type="comparable2" />
        <Title h2>{propertyInfo.comparable2}</Title>
        <Icon src={carBlack} location={1} />
        <Icon src={schoolBlack} location={2} />
        <Icon src={crimeBlack} location={3} />
        <Average location={1}>
          {getAverageValue(schoolRatings.comparable2.values)}
        </Average>
        <Average location={2}>
          {getAverageValue(transitRatings.comparable2.values)}
        </Average>
        <Average location={3}>{crimeRatings.comparable2.value}</Average>
        <Trend type="comparable2" location={1}>
          {getTrend(schoolRatings.comparable2.trend)}{' '}
          {schoolRatings.comparable2.trendDelta}
        </Trend>
        <Trend type="comparable2" location={2}>
          {getTrend(transitRatings.comparable2.trend)}{' '}
          {transitRatings.comparable2.trendDelta}
        </Trend>
        <Trend type="comparable2" location={3}>
          {getTrend(crimeRatings.comparable2.trend)}{' '}
          {crimeRatings.comparable2.trendDelta}
        </Trend>
      </Stat>
    </MapInfo>
  )
}

export default MapStat
