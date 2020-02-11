import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Text from '../common/Text'

const AgeVsIncome = styled.div`
  grid-area: info;
`

const PageFourInfo = () => {
  const [ageVsIncome, setAgeVsIncome] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/data.json')
      const data = await res.json()
      setAgeVsIncome(data.ageVsIncome)
    }
    fetchData()
  }, [])
  return (
    <AgeVsIncome>
      <Text h1> Age vs Income</Text>
      <div>{ageVsIncome}</div>
    </AgeVsIncome>
  )
}

export default PageFourInfo
