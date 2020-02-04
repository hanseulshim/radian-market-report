import React from 'react'
import styled from 'styled-components'
import Text from '../common/Text'
import { ageVsIncome } from '../data/data.json'

const AgeVsIncome = styled.div`
  grid-area: info;
`

const PageFourInfo = () => {
  return (
    <AgeVsIncome>
      <Text h1> Age vs Income</Text>
      <div>{ageVsIncome}</div>
    </AgeVsIncome>
  )
}

export default PageFourInfo
