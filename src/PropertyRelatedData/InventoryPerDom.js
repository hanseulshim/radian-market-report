import React, { useEffect } from 'react'
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
import styled from 'styled-components'
import config from '../config1'
import Text from '../common/Text'
import { inventoryPerDom } from '../data/data1.json'

const Container = styled.div`
  grid-area: chart2;
`

const InventoryPerDom = () => {
  useEffect(() => {
    const chart = am4core.createFromConfig(
      config.sectionThree.chart,
      'inventoryPerDomChart',
      am4charts.XYChart
    )
    chart.data = inventoryPerDom.selected

    const categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis())
    categoryAxis.config = config.sectionThree.categoryAxis
    // categoryAxis.renderer.grid.location = 0.5

    const valueAxis = chart.yAxes.push(new am4charts.ValueAxis())
    valueAxis.config = config.sectionOne.valueAxis
    valueAxis.min = 0

    const selectedSeries = chart.series.push(new am4charts.ColumnSeries())
    selectedSeries.data = inventoryPerDom.selected
    selectedSeries.config = config.sectionThree.selectedLine

    const comparable1Series = chart.series.push(new am4charts.ColumnSeries())
    comparable1Series.data = inventoryPerDom.comparable1
    comparable1Series.config = config.sectionThree.comparable1Line

    const comparable2Series = chart.series.push(new am4charts.ColumnSeries())
    comparable2Series.data = inventoryPerDom.comparable2
    comparable2Series.config = config.sectionThree.comparable2Line

    return () => {
      chart.dispose()
    }
  }, [])

  return (
    <Container>
      <Text subChartTitle>Inventory of Listings per DOM</Text>
      <div
        id={'inventoryPerDomChart'}
        style={{ width: '100%', height: 200 }}
      ></div>
    </Container>
  )
}

export default InventoryPerDom
