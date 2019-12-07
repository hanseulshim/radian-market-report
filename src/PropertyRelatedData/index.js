import React from 'react'
import styled from 'styled-components'
import Title from './Title'
import MedianPrices from './MedianPrices'
import AvgSaleToListRatio from './AvgSaleToListRatio'

const ColumnContainer = styled.div`
  display: flex;
`
const ColumnInfoContainer = styled.div`
  flex: 1;
  background: gray;
`

const ColumnChartContainer = styled.div`
  flex: 4;
  display: flex;
  flex-direction: column;
`

const PropertyRelatedData = () => (
  <>
    <Title />
    <ColumnContainer>
      <ColumnInfoContainer>INFO</ColumnInfoContainer>
      <ColumnChartContainer>
        <MedianPrices />
        <AvgSaleToListRatio />
      </ColumnChartContainer>
    </ColumnContainer>
  </>
)

export default PropertyRelatedData
