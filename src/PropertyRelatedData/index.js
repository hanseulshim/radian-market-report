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
import AgeOfProperties from './AgeOfProperties'
import config from '../config'
import DomVsPrice from './DomVsPrice'

const { GALLERY } = config.colors

const SubTitle = styled.div`
  font-size: 200%;
  font-weight: bold;
  margin-left: 50px;
  margin-bottom: 25px;
`

const ColumnContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const ColumnChartContainer = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  margin-right: 50px;
`

const RowChartContainer = styled.div`
  width: 100%;
  margin-top: 20px;
  margin-left: 50px;
  margin-right: 50px;
  display: flex;
  justify-content: space-between;
`

const RowChartDialContainer = styled.div`
  flex: 1;
  background: ${GALLERY};
`

const RowChartLineContainer = styled.div`
  flex: 1.75;
  margin-left: 10px;
  background: ${GALLERY};
`

const MarketContainer = styled.div`
  margin-top: 25px;
  background: ${GALLERY};
  flex: 1;
  padding: 25px 50px;
  display: flex;
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
      <MarketContainer>
        <AgeOfProperties />
        <DomVsPrice />
      </MarketContainer>
    </ColumnContainer>
  </>
)

export default PropertyRelatedData
