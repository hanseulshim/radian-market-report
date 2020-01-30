import React from 'react'
import styled from 'styled-components'
import Text from '../common/Text'
import { daysOnMarket, ageOfProperties } from '../data/data1.json'

const DaysOnMarket = styled.div`
  grid-area: days;
`
const AgeOfProperties = styled.div`
  grid-area: age;
`

const PageTwoInfo = () => {
  return (
    <>
      <DaysOnMarket>
        <Text h1>Days on Market</Text>
        <div>{daysOnMarket.info}</div>
      </DaysOnMarket>
      <AgeOfProperties>
        <Text h1>Age of Properties Across Markets</Text>
        <div>{ageOfProperties.info}</div>
      </AgeOfProperties>
    </>
  )
}

export default PageTwoInfo