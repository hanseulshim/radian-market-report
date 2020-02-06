import React from 'react'
import styled from 'styled-components'
import PropertyRelatedData from './PropertyRelatedData'
import DemographicData from './DemographicData'
import * as am4core from '@amcharts/amcharts4/core'
import { buildPDF } from './pdf'
am4core.options.commercialLicense = true

const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  background: #fff;
  position: relative;
`

const Button = styled.button`
  position: absolute;
  left: 0;
  top: 0;
`

const App = () => {
  return (
    <Container>
      <Button onClick={buildPDF}>Export to PDF</Button>
      <PropertyRelatedData />
      <DemographicData />
    </Container>
  )
}

export default App
