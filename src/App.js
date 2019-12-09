import React from 'react'
import styled from 'styled-components'
import PropertyRelatedData from './PropertyRelatedData'
import * as am4core from '@amcharts/amcharts4/core'
am4core.options.commercialLicense = true

const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 30px;
`

const App = () => {
  return (
    <Container>
      <PropertyRelatedData />
    </Container>
  )
}

export default App
