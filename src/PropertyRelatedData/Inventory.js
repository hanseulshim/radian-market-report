import React, { useEffect } from 'react'
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
import styled from 'styled-components'
import Text from '../common/Text'
import config from '../config'
import { inventory } from '../data/data.json'
import ActiveListingsSold from '../assets/ActiveListingsSold.svg'

const Container = styled.div`
  grid-area: chart3;
`
const Legend = styled.img`
  height: 15px;
`

const Inventory = () => {
  useEffect(() => {
    const chart = am4core.createFromConfig(
      config.chart(),
      'inventoryChart',
      am4charts.XYChart
    )

    chart.id = 'inventoryChart'

    const dateAxis = chart.xAxes.push(new am4charts.DateAxis())
    dateAxis.config = config.dateAxis()

    const valueAxis = chart.yAxes.push(new am4charts.ValueAxis())
    valueAxis.config = config.valueAxis('min')

    const selectedSeries = chart.series.push(new am4charts.LineSeries())
    selectedSeries.data = inventory.selected
    selectedSeries.config = config.line('selected', 'filled')

    const comparable1Series = chart.series.push(new am4charts.LineSeries())
    comparable1Series.data = inventory.comparable1
    comparable1Series.config = config.line('comparable1')

    const comparable2Series = chart.series.push(new am4charts.LineSeries())
    comparable2Series.data = inventory.comparable2
    comparable2Series.config = config.line('comparable2')

    const selectedSoldSeries = chart.series.push(new am4charts.LineSeries())
    selectedSoldSeries.data = inventory.selectedSold
    selectedSoldSeries.config = config.line('selected', 'dash')

    const comparable1SoldSeries = chart.series.push(new am4charts.LineSeries())
    comparable1SoldSeries.data = inventory.comparable1Sold
    comparable1SoldSeries.config = config.line('comparable1', 'dash')

    const comparable2SoldSeries = chart.series.push(new am4charts.LineSeries())
    comparable2SoldSeries.data = inventory.comparable2Sold
    comparable2SoldSeries.config = config.line('comparable2', 'dash')

    return () => {
      chart.dispose()
    }
  }, [])

  return (
    <Container>
      <Text chartTitle>
        <span>Inventory</span>
        <Legend src={ActiveListingsSold} />
      </Text>
      <div id={'inventoryChart'} style={{ width: '100%', height: 200 }} />
    </Container>
  )
}

export default Inventory
