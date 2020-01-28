import React from 'react'
import styled from 'styled-components'
import Header from '../common/Header'
import Text from '../common/Text'
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
import InventoryPerDom from './InventoryPerDom'
import AverageDomOverTime from './AverageDomOverTime'

import { GALLERY } from '../colors'

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    'subtitle subtitle subtitle subtitle subtitle subtitle subtitle subtitle subtitle subtitle subtitle subtitle'
    'info info info info chart1 chart1 chart1 chart1 chart1 chart1 chart1 chart1'
    'info info info info chart2 chart2 chart2 chart2 chart2 chart2 chart2 chart2'
    'info info info info chart3 chart3 chart3 chart3 chart3 chart3 chart3 chart3'
    'chart4 chart4 chart4 chart4 chart4 chart4 chart5 chart5 chart5 chart5 chart5 chart5';
  padding: 10px 50px;
  grid-column-gap: 10px;
`

const SubTitle = styled(Text)`
  grid-area: subtitle;
  margin-bottom: 30px;
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
  flex: 1.2;
  background: ${GALLERY};
`

const RowChartLineContainer = styled.div`
  flex: 1.71;
  margin-left: 10px;
  background: ${GALLERY};
`

const MarketContainer = styled.div`
  margin-top: 25px;
  background: ${GALLERY};
  flex: 1;
  padding: 25px 0 25px 50px;
  display: flex;
`

const PropertyRelatedData = () => (
  <>
    <Header section="Property Related Data" />
    <Container>
      <SubTitle subSection>How Your Market Stacks Up Against the Rest</SubTitle>
      <InfoArea />
      <MedianPrices />
      <AvgSaleToListRatio />
      <Inventory />
      <AvgHpiByBeds />
      <AvgHpiBySqFt />
      {/* <ColumnContainer>
      <ColumnChartContainer>
      </ColumnChartContainer>
      <RowChartContainer>
        <RowChartDialContainer>
          <MarketStrength />
        </RowChartDialContainer>
        <RowChartLineContainer>
        </RowChartLineContainer>
        <RowChartLineContainer>
        </RowChartLineContainer>
      </RowChartContainer>
      <MarketContainer>
        <AgeOfProperties />
        <ColumnChartContainer>
          <DomVsPrice />
          <InventoryPerDom />
          <AverageDomOverTime />
        </ColumnChartContainer>
      </MarketContainer>
    </ColumnContainer> */}
    </Container>
  </>
)

export default PropertyRelatedData
