import React, { useEffect } from 'react'
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
import styled from 'styled-components'
import Text from '../common/Text'
import config from '../config1'
import { inventory } from '../data/data1.json'
import LegendSold from '../assets/legendSold.svg'

const Container = styled.div`
  grid-area: chart3;
`
const Legend = styled.img`
  width: 25px;
  margin-right: 5px;
`

const LegendText = styled.div`
  font-size: 14px;
  font-weight: normal;
`

const Inventory = () => {
  useEffect(() => {
    const chart = am4core.createFromConfig(
      config.sectionOne.chart,
      'inventoryChart',
      am4charts.XYChart
    )

    const dateAxis = chart.xAxes.push(new am4charts.DateAxis())
    dateAxis.config = config.sectionOne.dateAxis

    const valueAxis = chart.yAxes.push(new am4charts.ValueAxis())
    valueAxis.config = config.sectionOne.valueAxis
    valueAxis.min = 0

    const selectedSeries = chart.series.push(new am4charts.LineSeries())
    selectedSeries.data = inventory.selected
    selectedSeries.config = config.sectionOne.selected

    const comparable1Series = chart.series.push(new am4charts.LineSeries())
    comparable1Series.data = inventory.comparable1
    comparable1Series.config = config.sectionOne.comparable1

    const comparable2Series = chart.series.push(new am4charts.LineSeries())
    comparable2Series.data = inventory.comparable2
    comparable2Series.config = config.sectionOne.comparable2

    const selectedSoldSeries = chart.series.push(new am4charts.LineSeries())
    selectedSoldSeries.data = inventory.selectedSold
    selectedSoldSeries.config = config.sectionOne.selectedSold

    const comparable1SoldSeries = chart.series.push(new am4charts.LineSeries())
    comparable1SoldSeries.data = inventory.comparable1Sold
    comparable1SoldSeries.config = config.sectionOne.comparable1Sold

    const comparable2SoldSeries = chart.series.push(new am4charts.LineSeries())
    comparable2SoldSeries.data = inventory.comparable2Sold
    comparable2SoldSeries.config = config.sectionOne.comparable2Sold

    return () => {
      chart.dispose()
    }
  }, [])

  return (
    <Container>
      <Text chartTitle>
        <span>Inventory</span>
        <LegendText>
          <Legend src={LegendSold} /> Sold
        </LegendText>
      </Text>
      <div id={'inventoryChart'} style={{ width: '100%', height: 200 }} />
    </Container>
  )
}

export default Inventory
