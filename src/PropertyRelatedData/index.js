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
import { savePDF } from '../pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'

const PageOne = styled.div`
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: 1fr 10px 1fr 10px 1fr 10px 1fr 10px 1fr 10px 1fr 10px 1fr
    10px 1fr 10px 1fr 10px 1fr 10px 1fr 10px 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  -ms-grid-rows: auto;
  grid-template-rows: auto;
  grid-template-areas:
    'header header header header header header header header header header header header'
    'subtitle subtitle subtitle subtitle subtitle subtitle subtitle subtitle subtitle subtitle subtitle export'
    'info info info info chart1 chart1 chart1 chart1 chart1 chart1 chart1 chart1'
    'info info info info chart2 chart2 chart2 chart2 chart2 chart2 chart2 chart2'
    'info info info info chart3 chart3 chart3 chart3 chart3 chart3 chart3 chart3'
    'chart4 chart4 chart4 chart4 chart4 chart4 chart5 chart5 chart5 chart5 chart5 chart5';
  padding: 0 50px;
  grid-column-gap: 10px;
`

const PageTwo = styled.div`
  margin-top: 25px;
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: 1fr 25px 1fr 25px 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  -ms-grid-rows: auto;
  grid-template-rows: auto;
  grid-template-areas:
    'header header header'
    'subtitle chart1 chart1'
    'days chart1 chart1'
    'age chart1 chart1'
    'age chart2 chart2'
    '. chart3 chart3'
    'chart4 chart4 chart4';
  padding: 0 50px;
  grid-column-gap: 25px;
`

const SubTitle = styled(Text)`
  grid-area: subtitle;
  margin-bottom: 30px;
  line-height: 35px;
`

const Export = styled.div`
  grid-area: export;
`
const Button = styled.button`
  cursor: pointer;
  white-space: nowrap;
  display: flex;
  padding: 5px 10px;
  align-items: center;
  justify-content: space-around;
  border-radius: 2px;
`

const PropertyRelatedData = () => (
  <>
    <PageOne>
      <Header section="Property Related Data" />
      <SubTitle subSection>How Your Market Stacks Up Against the Rest</SubTitle>
      <Export onClick={savePDF}>
        <Button>
          <FontAwesomeIcon
            icon={faFilePdf}
            // size="md"
            style={{ marginRight: '3px', fontSize: '16px' }}
          />
          <Text>Export to PDF</Text>
        </Button>
      </Export>
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
