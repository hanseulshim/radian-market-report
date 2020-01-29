import React, { useEffect } from 'react'
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
import styled from 'styled-components'
import Text from '../common/Text'
import config from '../config1'
import { medianPrices } from '../data/data1.json'
import LegendSold from '../assets/legendSold.svg'

const Container = styled.div`
  grid-area: chart1;
`

const Legend = styled.img`
  width: 25px;
  margin-right: 5px;
`

const LegendText = styled.div`
  font-size: 14px;
  font-weight: normal;
`

const MedianPrices = () => {
  useEffect(() => {
    const chart = am4core.createFromConfig(
      config.chart(),
      'medianPricesChart',
      am4charts.XYChart
    )

    const dateAxis = chart.xAxes.push(new am4charts.DateAxis())
    dateAxis.config = config.dateAxis()

    const valueAxis = chart.yAxes.push(new am4charts.ValueAxis())
    console.log(config.valueAxis('price'))
    valueAxis.config = config.valueAxis('price')

    const selectedSeries = chart.series.push(new am4charts.LineSeries())
    selectedSeries.data = medianPrices.selected
    selectedSeries.config = config.line()

    // const comparable1Series = chart.series.push(new am4charts.LineSeries())
    // comparable1Series.data = medianPrices.comparable1
    // comparable1Series.config = config.comparable1()

    // const comparable2Series = chart.series.push(new am4charts.LineSeries())
    // comparable2Series.data = medianPrices.comparable2
    // comparable2Series.config = config.comparable2()

    // const selectedSoldSeries = chart.series.push(new am4charts.LineSeries())
    // selectedSoldSeries.data = medianPrices.selectedSold
    // selectedSoldSeries.config = config.selectedSold()

    // const comparable1SoldSeries = chart.series.push(new am4charts.LineSeries())
    // comparable1SoldSeries.data = medianPrices.comparable1Sold
    // comparable1SoldSeries.config = config.comparable1Sold()

    // const comparable2SoldSeries = chart.series.push(new am4charts.LineSeries())
    // comparable2SoldSeries.data = medianPrices.comparable2Sold
    // comparable2SoldSeries.config = config.comparable2Sold()

    return () => {
      chart.dispose()
    }
  }, [])

  return (
    <Container>
      <Text chartTitle>
        <span>Median Prices of Active Listings</span>
        <LegendText>
          <Legend src={LegendSold} /> Sold
        </LegendText>
      </Text>
      <div id={'medianPricesChart'} style={{ width: '100%', height: 300 }} />
    </Container>
  )
}

export default MedianPrices
