import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Text from '../common/Text'

const DaysOnMarket = styled.div`
  grid-area: days;
`
const AgeOfProperties = styled.div`
  grid-area: age;
`

const PageTwoInfo = () => {
  const [daysOnMarketInfo, setDaysOnMarketInfo] = useState(null)
  const [ageOfPropertiesInfo, setAgeOfPropertiesInfo] = useState(null)
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('./data.json')
      const data = await res.json()
      const { ageOfPropertiesInfo, daysOnMarketInfo } = data
      setDaysOnMarketInfo(daysOnMarketInfo)
      setAgeOfPropertiesInfo(ageOfPropertiesInfo)
    }
    fetchData()
  }, [])
  return (
    <>
      <DaysOnMarket>
        <Text h1>Days on Market</Text>
        <div>{daysOnMarketInfo}</div>
      </DaysOnMarket>
      <AgeOfProperties>
        <Text h1>Age of Properties Across Markets</Text>
        <div>{ageOfPropertiesInfo}</div>
      </AgeOfProperties>
    </>
  )
}

export default PageTwoInfo
