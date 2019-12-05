import React from 'react'
import styled from 'styled-components'
import PropertyRelatedData from './PropertyRelatedData'

const Container = styled.div`
  max-width: 1200px;
  margin: auto;
`

const App = () => {
  return (
    <Container>
      <PropertyRelatedData />
    </Container>
  )
}

export default App
