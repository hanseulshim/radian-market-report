import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Text from '../common/Text'
// import { familyMakeupInfo } from '../data/data.json'

const Container = styled.div`
  grid-area: sectionInfo;
`

const FamilyMakeupInfo = () => {
  const [familyMakeupInfo, setFamilyMakeupInfo] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/data.json')
      const data = await res.json()
      setFamilyMakeupInfo(data.familyMakeupInfo)
    }
    fetchData()
  }, [])

  return (
    <Container>
      <Text chartTitle style={{ marginLeft: '0', marginBottom: '15px' }}>
        {' '}
        Family Makeup
      </Text>
      <div>{familyMakeupInfo}</div>
    </Container>
  )
}

export default FamilyMakeupInfo
