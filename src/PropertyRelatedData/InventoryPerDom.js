import React, { useEffect } from 'react'
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
import styled from 'styled-components'
import config from '../config'
import Text from '../common/Text'
import { inventoryPerDom } from '../data/data.json'

const Container = styled.div`
  grid-area: chart2;
`

const InventoryPerDom = () => {
  useEffect(() => {
    const chart = am4core.createFromConfig(
      config.chart(),
      'inventoryPerDomChart',
      am4charts.XYChart
    )
    chart.data = inventoryPerDom.selected
    chart.id = 'inventoryOfListingsPerDOMChart'

    const categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis())
    categoryAxis.config = config.categoryAxis()

    const valueAxis = chart.yAxes.push(new am4charts.ValueAxis())
    valueAxis.config = config.valueAxis('min')

    const selectedSeries = chart.series.push(new am4charts.ColumnSeries())
    selectedSeries.data = inventoryPerDom.selected
    selectedSeries.config = config.line('selected', 'column', 'category')

    const comparable1Series = chart.series.push(new am4charts.ColumnSeries())
    comparable1Series.data = inventoryPerDom.comparable1
    comparable1Series.config = config.line('comparable1', 'column', 'category')

    const comparable2Series = chart.series.push(new am4charts.ColumnSeries())
    comparable2Series.data = inventoryPerDom.comparable2
    comparable2Series.config = config.line('comparable2', 'column', 'category')

    return () => {
      chart.dispose()
    }
  }, [])

  return (
    <Container>
      <Text subChartTitle>Inventory of Listings per DOM</Text>
      <div
        id={'inventoryPerDomChart'}
        style={{ width: '100%', height: 150 }}
      ></div>
    </Container>
  )
}

export default InventoryPerDom
