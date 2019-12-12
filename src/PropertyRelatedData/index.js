import React from 'react'
import styled from 'styled-components'
import Title from './Title'
import InfoArea from './InfoArea'
import MedianPrices from './MedianPrices'
import AvgSaleToListRatio from './AvgSaleToListRatio'
import Inventory from './Inventory'
import MarketStrength from './MarketStrength'
import AvgHpiByBeds from './AvgHpiByBeds'
import AvgHpiBySqFt from './AvgHpiBySqFt'

const SubTitle = styled.div`
  font-size: 150%;
  font-weight: bold;
  margin-left: 50px;
  margin-bottom: 25px;
`

const ColumnContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 50px 50px 50px;
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

const RowChartDialContainer = styled.div`
  flex: 1;
  background: #efefef;
`

const RowChartLineContainer = styled.div`
  flex: 2;
  margin-left: 10px;
  background: #efefef;
`

const PropertyRelatedData = () => (
  <>
    <Title />
    <SubTitle>How Your Market Stacks Up Against the Rest</SubTitle>
    <ColumnContainer>
      <InfoArea />
      <ColumnChartContainer>
        <MedianPrices />
        <AvgSaleToListRatio />
        <Inventory />
      </ColumnChartContainer>
      <RowChartContainer>
        <RowChartDialContainer>
          <MarketStrength />
        </RowChartDialContainer>
        <RowChartLineContainer>
          <AvgHpiByBeds />
        </RowChartLineContainer>
        <RowChartLineContainer>
          <AvgHpiBySqFt />
        </RowChartLineContainer>
      </RowChartContainer>
    </ColumnContainer>
  </>
)

export default PropertyRelatedData
