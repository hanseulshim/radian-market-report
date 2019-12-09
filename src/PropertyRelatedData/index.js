import React from 'react'
import styled from 'styled-components'
import Title from './Title'
import MedianPrices from './MedianPrices'
import AvgSaleToListRatio from './AvgSaleToListRatio'
import Inventory from './Inventory'
import MarketStrength from './MarketStrength'

const ColumnContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
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
const RowChartContainer = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`
const RowChartSingleContainer = styled.div`
  width: 32%
  background: #efefef;
`

const PropertyRelatedData = () => (
  <>
    <Title />
    <ColumnContainer>
      <ColumnInfoContainer>INFO</ColumnInfoContainer>
      <ColumnChartContainer>
        <MedianPrices />
        <AvgSaleToListRatio />
        <Inventory />
      </ColumnChartContainer>
      <RowChartContainer>
        <RowChartSingleContainer>
          <MarketStrength />
        </RowChartSingleContainer>
        <RowChartSingleContainer>
          <div>soijdf</div>
        </RowChartSingleContainer>
        <RowChartSingleContainer>
          <div>isdf</div>
        </RowChartSingleContainer>
      </RowChartContainer>
    </ColumnContainer>
  </>
)

export default PropertyRelatedData
