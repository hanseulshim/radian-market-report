import React from 'react'
import styled from 'styled-components'
import Text from '../common/Text'
import {
  neighborhoodSummary,
  schoolRatings,
  transitRatings
} from '../data/data1.json'

const AgeVsIncome = styled.div`
  grid-area: info;
  max-width: 50%;
  margin-bottom: 50px;
`
const SchoolRatings = styled.div`
  grid-area: school;
`
const TransitRatings = styled.div`
  grid-area: transit;
`

const PageFourInfo = () => {
  return (
    <>
      <AgeVsIncome>
        <Text h1> Age vs Income</Text>
        <div>{neighborhoodSummary}</div>
      </AgeVsIncome>
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

export default PageFourInfo
