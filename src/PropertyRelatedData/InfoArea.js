import React from 'react'
import styled from 'styled-components'
import moment from 'moment'
import numeral from 'numeral'
import { Table } from 'antd'
import { propertyInfo, stats } from '../data/data1.json'
import Text from '../common/Text'
import { NEPTUNE, AZURE, BLACK, WHITE } from '../colors'
import MarketStrength from './MarketStrength'

const Container = styled.div`
  grid-area: info;
  margin-right: 50px;
`

const AddressBox = styled.div`
  margin-top: 15px;
  padding: 10px;
  background: ${BLACK};
  color: ${WHITE};
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const TableHeader = styled.div`
  padding: 3px 10px;
  background: ${props =>
    props.selected
      ? BLACK
      : props.comparable1
      ? AZURE
      : props.comparable2
      ? NEPTUNE
      : WHITE};
  color: ${props => (props.comparable1 || props.selected ? WHITE : 'Initial')};
`

const Description = styled.div`
  margin-top: 25px;
`

const data = [
  {
    category: 'Avg. Listed Price',
    selected: stats.selected.avgListedPrice,
    comparable1: stats.comparable1.avgListedPrice,
    comparable2: stats.comparable2.avgListedPrice,
    key: 'Avg. Listed Price'
  },
  {
    category: 'Avg. Sold Price',
    selected: stats.selected.avgSoldPrice,
    comparable1: stats.comparable1.avgSoldPrice,
    comparable2: stats.comparable2.avgSoldPrice,
    key: 'Avg. Sold Price'
  },
  {
    category: 'Active Inventory',
    selected: stats.selected.activeInventory,
    comparable1: stats.comparable1.activeInventory,
    comparable2: stats.comparable2.activeInventory,
    key: 'Active Inventory'
  },
  {
    category: 'Sold Inventory',
    selected: stats.selected.soldInventory,
    comparable1: stats.comparable1.soldInventory,
    comparable2: stats.comparable2.soldInventory,
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
    title: () => <TableHeader selected>{propertyInfo.selected}</TableHeader>,
    className: 'stat-column',
    dataIndex: 'selected',
    key: 'selected',
    align: 'right',
    render: (price, i) =>
      i.key.toLowerCase().includes('price')
        ? numeral(price).format('$0a')
        : price
  },
  {
    // eslint-disable-next-line react/display-name
    title: () => (
      <TableHeader comparable1>{propertyInfo.comparable1}</TableHeader>
    ),
    className: 'stat-column',
    dataIndex: 'comparable1',
    key: 'comparable1',
    align: 'right',
    render: (price, i) =>
      i.key.toLowerCase().includes('price')
        ? numeral(price).format('$0a')
        : price
  },
  {
    // eslint-disable-next-line react/display-name
    title: () => (
      <TableHeader comparable2>{propertyInfo.comparable2}</TableHeader>
    ),
    className: 'stat-column',
    dataIndex: 'comparable2',
    key: 'comparable2',
    align: 'right',
    render: (price, i) =>
      i.key.toLowerCase().includes('price')
        ? numeral(price).format('$0a')
        : price
  }
]

const InfoArea = () => {
  const date = moment(stats.date)
  return (
    <Container>
      <Text h1>
        {date.format('MMMM')} {date.format('YYYY')} Stats
      </Text>
      <AddressBox>
        <div>
          <div>{stats.address}</div>
          <div>
            {stats.city}, {stats.state} {stats.zip}
          </div>
        </div>
        <Text chartTitle>{numeral(stats.price).format('$0a')}</Text>
      </AddressBox>
      <Table
        className="stat-table"
        rowClassName="stat-row"
        tableLayout="auto"
        columns={columns}
        dataSource={data}
        pagination={false}
      />
      <MarketStrength />
      <Description>{stats.description}</Description>
    </Container>
  )
}

export default InfoArea
