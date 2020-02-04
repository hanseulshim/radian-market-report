import React from 'react'
import styled from 'styled-components'
import Text from '../common/Text'
import { neighborhoodSummary, schoolRatings, transitRatings } from '../data/data.json'

const NeighborhoodSummary = styled.div`
  grid-area: neighborhood;
  max-width: 60%;
  margin-bottom: 50px;
`
const SchoolRatings = styled.div`
  grid-area: school;
`
const TransitRatings = styled.div`
  grid-area: transit;
`

const PageThreeInfo = () => {
  return (
    <>
      <NeighborhoodSummary>
        <Text h1>Neighborhood Summary</Text>
        <div>{neighborhoodSummary}</div>
      </NeighborhoodSummary>
      <SchoolRatings>
        <Text h1>School Ratings</Text>
        <div>{schoolRatings.info}</div>
      </SchoolRatings>
      <TransitRatings>
        <Text h1>Transit Ratings</Text>
        <div>{transitRatings.info}</div>
      </TransitRatings>
    </>
  )
}

export default PageThreeInfo
