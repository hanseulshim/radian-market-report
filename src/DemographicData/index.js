import React from 'react'
import styled from 'styled-components'
import Header from '../common/Header'
import PageThreeInfo from './PageThreeInfo'
import RatingsContainer from './RatingsContainer'
import MapContainer from './MapContainer'
import { GALLERY } from '../colors'

const PageThree = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    'header header'
    'neighborhood neighborhood'
    'school transit'
    'schoolRating transitRating';
  padding: 10px 50px;
  grid-column-gap: 10px;
`

const DemographicData = () => (
  <>
    <PageThree>
      <Header section="Demographic Related Data" />
      <PageThreeInfo />
      <RatingsContainer />
    </PageThree>
  </>
)

export default DemographicData
