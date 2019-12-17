import React from 'react'
import styled from 'styled-components'
import moment from 'moment'
import numeral from 'numeral'
import { Table } from 'antd'
import { propertyData } from '../data/data.json'
import config from '../config'

const { SINBAD, STEEL_BLUE, GALLERY, BLACK } = config.colors

const {
  selectedProperty,
  comparisonProperty1,
  comparisonProperty2,
  stats
} = propertyData

const Container = styled.div`
  flex: 1.2;
`

const StatsArea = styled.div`
  font-weight: bold;
  font-size: 125%;
  margin-left: 50px;
`

const AddressBox = styled.div`
  margin-left: 50px;
  margin-top: 5px;
  padding: 10px;
  background: #000;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Address = styled.div`
  font-weight: bold;
`

const Price = styled.div`
  font-size: 180%;
  font-weight: bold;
`

const TableContainer = styled(Table)`
  margin-left: 50px;
`

const TableHeader = styled.div`
  padding: 3px 2px;
  background: ${props =>
    props.selectedProperty
      ? BLACK
      : props.comparisonProperty1
      ? STEEL_BLUE
      : props.comparisonProperty2
      ? SINBAD
      : '#FFFFFF'};
  color: ${props =>
    props.comparisonProperty1 || props.selectedProperty ? '#FFF' : 'Initial'};
`

const Description = styled.div`
  margin-top: 25px;
  margin-left: 50px;
`

const Indicator = styled.div`
  margin-top: 25px;
  padding: 10px 5px 10px 50px;
  background: ${GALLERY};
`

const IndicatorTitle = styled.div`
  font-weight: bold;
`

const IndicatorRow = styled.div`
  margin-top: ${props => (props.selectedProperty ? '10px' : '3px')};
  display: flex;
  justify-content: space-between;
  padding: 7px 10px;
  background: ${props =>
    props.selectedProperty
      ? BLACK
      : props.comparisonProperty1
      ? STEEL_BLUE
      : props.comparisonProperty2
      ? SINBAD
      : '#FFFFFF'};
  color: ${props =>
    props.comparisonProperty1 || props.selectedProperty ? '#FFF' : 'Initial'};
  font-weight: 500;
`

const IndicatorStats = styled.div`
  margin-top: 15px;
`

const IndicatorStatsTitle = styled.span`
  font-weight: bold;
`

const data = [
  {
    category: 'Avg. Listed Price',
    selectedProperty: selectedProperty.avgListedPrice,
    comparisonProperty1: comparisonProperty1.avgListedPrice,
    comparisonProperty2: comparisonProperty2.avgListedPrice,
    key: 'Avg. Listed Price'
  },
  {
    category: 'Avg. Sold Price',
    selectedProperty: selectedProperty.avgSoldPrice,
    comparisonProperty1: comparisonProperty1.avgSoldPrice,
    comparisonProperty2: comparisonProperty2.avgSoldPrice,
    key: 'Avg. Sold Price'
  },
  {
    category: 'Active Inventory',
    selectedProperty: selectedProperty.activeInventory,
    comparisonProperty1: comparisonProperty1.activeInventory,
    comparisonProperty2: comparisonProperty2.activeInventory,
    key: 'Active Inventory'
  },
  {
    category: 'Sold Inventory',
    selectedProperty: selectedProperty.soldInventory,
    comparisonProperty1: comparisonProperty1.soldInventory,
    comparisonProperty2: comparisonProperty2.soldInventory,
    key: 'Sold Inventory'
  }
]

const columns = [
  {
    title: '',
    className: 'stat-column',
    dataIndex: 'category',
    key: 'category',
    width: 125
  },
  {
    // eslint-disable-next-line react/display-name
    title: () => (
      <TableHeader selectedProperty>{selectedProperty.label}</TableHeader>
    ),
    className: 'stat-column',
    dataIndex: 'selectedProperty',
    key: 'selectedProperty',
    align: 'center',
    render: (price, i) =>
      i.key.toLowerCase().includes('price')
        ? numeral(price).format('$0a')
        : price
  },
  {
    // eslint-disable-next-line react/display-name
    title: () => (
      <TableHeader comparisonProperty1>{comparisonProperty1.label}</TableHeader>
    ),
    className: 'stat-column',
    dataIndex: 'comparisonProperty1',
    key: 'comparisonProperty1',
    align: 'center',
    render: (price, i) =>
      i.key.toLowerCase().includes('price')
        ? numeral(price).format('$0a')
        : price
  },
  {
    // eslint-disable-next-line react/display-name
    title: () => (
      <TableHeader comparisonProperty2>{comparisonProperty2.label}</TableHeader>
    ),
    className: 'stat-column',
    dataIndex: 'comparisonProperty2',
    key: 'comparisonProperty2',
    align: 'center',
    render: (price, i) =>
      i.key.toLowerCase().includes('price')
        ? numeral(price).format('$0a')
        : price
  }
]

const InfoArea = () => {
  return (
    <Container>
      <StatsArea>
        {moment().format('MMMM')} {moment().format('YYYY')} Stats
      </StatsArea>
      <AddressBox>
        <Address>
          <div>{selectedProperty.address}</div>
          <div>
            {selectedProperty.city}, {selectedProperty.state}{' '}
            {selectedProperty.zip}
          </div>
        </Address>
        <Price>{numeral(selectedProperty.price).format('$0a')}</Price>
      </AddressBox>
      <TableContainer
        rowClassName="stat-row"
        tableLayout="auto"
        columns={columns}
        dataSource={data}
        pagination={false}
      />
      <Description>{stats.description}</Description>
      <Indicator>
        <IndicatorTitle>What do the colors mean?</IndicatorTitle>
        <IndicatorRow selectedProperty>
          <div>Selected Property</div>
          <div>{selectedProperty.label}</div>
        </IndicatorRow>
        <IndicatorRow comparisonProperty1>
          <div>Comparable 1</div>
          <div>{comparisonProperty1.label}</div>
        </IndicatorRow>
        <IndicatorRow comparisonProperty2>
          <div>Comparable 2</div>
          <div>{comparisonProperty2.label}</div>
        </IndicatorRow>
        <IndicatorStats>
          <IndicatorStatsTitle>Property Attributes:</IndicatorStatsTitle>{' '}
          <div>
            {stats.similarProperties.type}, {stats.similarProperties.bedroom},{' '}
            {stats.similarProperties.area}, {stats.soldProperty}
          </div>
        </IndicatorStats>
      </Indicator>
    </Container>
  )
}

export default InfoArea
