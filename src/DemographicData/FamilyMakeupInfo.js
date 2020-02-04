import React from 'react'
import styled from 'styled-components'
import Text from '../common/Text'
import { familyMakeupInfo } from '../data/data.json'

const Container = styled.div`
  grid-area: sectionInfo;
  margin-bottom: 15px;
`

const FamilyMakeupInfo = () => {
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
