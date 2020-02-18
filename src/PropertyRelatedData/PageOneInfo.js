import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import moment from 'moment'
import numeral from 'numeral'
import { Table } from 'antd'
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

const PageOneInfo = () => {
  const [stats, setStats] = useState({})
  const [propertyInfo, setPropertyInfo] = useState({})
  const [tableData, setTableData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/data.json')
      const data = await res.json()
      const { propertyInfo, stats } = data
      const tableData = [
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
      setStats(stats)
      setPropertyInfo(propertyInfo)
      setTableData(tableData)
    }
    fetchData()
  }, [])
  const date = moment(stats.date)

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
        <Text value>{numeral(stats.price).format('$0a')}</Text>
      </AddressBox>
      <Table
        className="stat-table"
        rowClassName="stat-row"
        tableLayout="auto"
        columns={columns}
        dataSource={tableData}
        pagination={false}
      />
      <MarketStrength />
      <Description>
        Let’s Compare. You have selected {propertyInfo.selected} as Your Market,
        and {propertyInfo.comparable1} and {propertyInfo.comparable2} as your
        markets to compare against. To make this most valuable, we limit our
        market results to properties with characteristics matching your selected
        “Property Attributes”. In this report you have chosen to include{' '}
        {propertyInfo.bedrooms} bedroom homes with {propertyInfo.squareFeet}
        square feet.
      </Description>
    </Container>
  )
}

export default PageOneInfo
