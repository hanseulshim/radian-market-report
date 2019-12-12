import React from 'react'
import styled from 'styled-components'
import moment from 'moment'
import numeral from 'numeral'
import { Table } from 'antd'
import { propertyData } from '../data/data.json'
import config from '../config'

const { RIPTIDE, DODGER_BLUE } = config.colors

const {
  selectedProperty,
  comparisonProperty1,
  comparisonProperty2,
  stats
} = propertyData

const Container = styled.div`
  flex: 1;
`

const StatsArea = styled.div`
  font-size: 125%;
`

const AddressBox = styled.div`
  margin-top: 5px;
  padding: 10px;
  background: #000;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Address = styled.div`
  font-size: 80%;
  font-weight: bold;
`

const Total = styled.div`
  font-size: 150%;
  font-weight: bold;
`

const TableHeader = styled.div`
  font-weight: normal;
  padding: 3px 2px;
  background: ${props =>
    props.selected
      ? 'rgba(0, 0, 0, 0.2)'
      : props.comparisonProperty1
      ? RIPTIDE
      : props.comparisonProperty2
      ? DODGER_BLUE
      : '#FFFFFF'};
  color: ${props => (props.comparisonProperty2 ? '#FFF' : '#000')};
`

const Description = styled.div`
  margin-top: 25px;
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
    width: 200
  },
  {
    // eslint-disable-next-line react/display-name
    title: () => <TableHeader selected>{selectedProperty.label}</TableHeader>,
    className: 'stat-column',
    dataIndex: 'selectedProperty',
    key: 'selectedProperty',
    align: 'center',
    render: (price, i) =>
      i.key.toLowerCase().includes('price')
        ? numeral(price).format('$0a')
        : price
    // width: '25%'
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
    // width: '25%'
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
    // width: '25%'
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
        <Total>{numeral(selectedProperty.total).format('$0a')}</Total>
      </AddressBox>
      <Table
        rowClassName="stat-row"
        tableLayout="auto"
        columns={columns}
        dataSource={data}
        pagination={false}
      />
      <Description>{stats.description}</Description>
    </Container>
  )
}

export default InfoArea
