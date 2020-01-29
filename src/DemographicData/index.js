import React from 'react'
import styled from 'styled-components'
import Header from '../common/Header'
import Summary from './Summary'
import MapContainer from './MapContainer'
import { GALLERY } from '../colors'

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const SectionOneContainer = styled.div`
  display: flex;
  margin-left: 50px;
`

const SectionTwoContainer = styled.div`
  background: ${GALLERY};
  flex: 1;
  padding: 25px 0 25px 50px;
  display: flex;
`

const Column = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`

const DemographicData = () => (
  <>
    <Header section="Demographic Data" />
    <ColumnContainer>
      <SectionOneContainer>
        <Summary />
        <MapContainer />
      </SectionOneContainer>
      <SectionTwoContainer>
        <Column>
          <div>Population of Age VS Income</div>
          <div>20854 Population by Age</div>
        </Column>
        <Column>
          <div>Family Makeup</div>
          <div>Population by Age</div>
        </Column>
      </SectionTwoContainer>
    </ColumnContainer>
  </>
)

export default DemographicData
