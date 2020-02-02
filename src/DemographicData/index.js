import React from 'react'
import styled from 'styled-components'
import Header from '../common/Header'
import PageThreeInfo from './PageThreeInfo'
import PageFourInfo from './PageFourInfo'
import RatingsContainer from './RatingsContainer'
import MapContainer from './MapContainer'
import PopulationByIncome from './PopulationByIncome'
import PopulationByAge from './PopulationByAge'

const PageThree = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    'header header'
    'neighborhood neighborhood'
    'school transit'
    'schoolRating transitRating'
    'map map';
  padding: 10px 50px;
  grid-column-gap: 10px;
`

const PageFour = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    'header header header'
    'info chart1 chart1'
    'chart2 chart2 chart2'
    'chart3 chart4 chart4';
  padding: 10px 50px;
  grid-column-gap: 10px;
`

const DemographicData = () => (
  <>
    <PageThree>
      <Header section="Demographic Related Data" />
      <PageThreeInfo />
      <RatingsContainer />
      <MapContainer />
    </PageThree>
    <PageFour>
      <Header section="Demographic Related Data" />
      <PageFourInfo />
      <PopulationByAge />
      <PopulationByIncome />
    </PageFour>
  </>
)

export default DemographicData
