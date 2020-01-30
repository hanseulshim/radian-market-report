import React from 'react'
import styled from 'styled-components'
import Header from '../common/Header'
import Text from '../common/Text'
import PageOneInfo from './PageOneInfo'
import MedianPrices from './MedianPrices'
import AvgSaleToListRatio from './AvgSaleToListRatio'
import Inventory from './Inventory'
import AvgHpiByBeds from './AvgHpiByBeds'
import AvgHpiBySqFt from './AvgHpiBySqFt'

import PageTwoInfo from './PageTwoInfo'

import DomVsPrice from './DomVsPrice'
import InventoryPerDom from './InventoryPerDom'
import AverageDomOverTime from './AverageDomOverTime'
import AgeOfProperties from './AgeOfProperties'

const PageOne = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    'header header header header header header header header header header header header'
    'subtitle subtitle subtitle subtitle subtitle subtitle subtitle subtitle subtitle subtitle subtitle subtitle'
    'info info info info chart1 chart1 chart1 chart1 chart1 chart1 chart1 chart1'
    'info info info info chart2 chart2 chart2 chart2 chart2 chart2 chart2 chart2'
    'info info info info chart3 chart3 chart3 chart3 chart3 chart3 chart3 chart3'
    'chart4 chart4 chart4 chart4 chart4 chart4 chart5 chart5 chart5 chart5 chart5 chart5';
  padding: 10px 50px;
  grid-column-gap: 10px;
`

const PageTwo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    'header header header'
    'subtitle chart1 chart1'
    'days chart1 chart1'
    'age chart1 chart1'
    'age chart2 chart2'
    '. chart3 chart3'
    'chart4 chart4 chart4';
  padding: 10px 50px;
  grid-column-gap: 25px;
`

const SubTitle = styled(Text)`
  grid-area: subtitle;
  margin-bottom: 30px;
`

const PropertyRelatedData = () => (
  <>
    <PageOne>
      <Header section="Property Related Data" />
      <SubTitle subSection>How Your Market Stacks Up Against the Rest</SubTitle>
      <PageOneInfo />
      <MedianPrices />
      <AvgSaleToListRatio />
      <Inventory />
      <AvgHpiByBeds />
      <AvgHpiBySqFt />
    </PageOne>
    <PageTwo>
      <Header section="Property Related Data" />
      <SubTitle subSection>How Your Market Stacks Up Against the Rest</SubTitle>
      <PageTwoInfo />
      <DomVsPrice />
      <InventoryPerDom />
      <AverageDomOverTime />
      <AgeOfProperties />
    </PageTwo>
  </>
)

export default PropertyRelatedData
