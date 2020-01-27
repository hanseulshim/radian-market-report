import React, { useEffect } from 'react'
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
import styled from 'styled-components'
import Text from '../common/Text'
import config from '../config1'
import { medianPrices } from '../data/data1.json'

const Container = styled.div`
  grid-area: chart1;
`

const ChartTitle = styled(Text)`
  margin-left: 60px;
  margin-right: 15px;
  border-bottom: 1px solid;
`

const MedianPrices = () => {
  useEffect(() => {
    const chart = am4core.createFromConfig(
      config.sectionOne.chart,
      'medianPricesChart',
      am4charts.XYChart
    )

    const dateAxis = chart.xAxes.push(new am4charts.DateAxis())
    dateAxis.config = config.sectionOne.dateAxis

    const valueAxis = chart.yAxes.push(new am4charts.ValueAxis())
    valueAxis.config = config.sectionOne.valueAxis
    valueAxis.numberFormatter.numberFormat = '$#a'

    const selectedSeries = chart.series.push(new am4charts.LineSeries())
    selectedSeries.data = medianPrices.selected
    selectedSeries.config = config.sectionOne.selected

    const comparable1Series = chart.series.push(new am4charts.LineSeries())
    comparable1Series.data = medianPrices.comparable1
    comparable1Series.config = config.sectionOne.comparable1

    const comparable2Series = chart.series.push(new am4charts.LineSeries())
    comparable2Series.data = medianPrices.comparable2
    comparable2Series.config = config.sectionOne.comparable2

    const selectedSoldSeries = chart.series.push(new am4charts.LineSeries())
    selectedSoldSeries.data = medianPrices.selectedSold
    selectedSoldSeries.config = config.sectionOne.selectedSold

    const comparable1SoldSeries = chart.series.push(new am4charts.LineSeries())
    comparable1SoldSeries.data = medianPrices.comparable1Sold
    comparable1SoldSeries.config = config.sectionOne.comparable1Sold

    const comparable2SoldSeries = chart.series.push(new am4charts.LineSeries())
    comparable2SoldSeries.data = medianPrices.comparable2Sold
    comparable2SoldSeries.config = config.sectionOne.comparable2Sold

    return () => {
      chart.dispose()
    }
  }, [])

  return (
    <Container>
      <ChartTitle chartTitle>Median Prices of Active Listings</ChartTitle>
      <div id={'medianPricesChart'} style={{ width: '100%', height: 300 }} />
    </Container>
  )
}

export default MedianPrices
