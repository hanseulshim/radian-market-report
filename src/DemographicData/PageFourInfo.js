import React from 'react'
import styled from 'styled-components'
import Text from '../common/Text'
import { populationByAge } from '../data/data1.json'

const AgeVsIncome = styled.div`
  grid-area: info;
  margin-bottom: 50px;
  max-width: 80%;
`

const PageFourInfo = () => {
  return (
    <>
      <AgeVsIncome>
        <Text h1> Age vs Income</Text>
        <div>{populationByAge.description}</div>
      </AgeVsIncome>
    </>
  )
}

export default PageFourInfo
