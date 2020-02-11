import React, { useEffect } from 'react'
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
import styled from 'styled-components'
import Text from '../common/Text'
import config from '../config'
import ActiveListingsSold from '../assets/ActiveListingsSold.png'

const Container = styled.div`
  grid-area: chart1;
`

const Legend = styled.img`
  height: 15px;
`

const MedianPrices = () => {
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/data.json')
      const data = await res.json()
      const { medianPrices } = data

      const chart = am4core.createFromConfig(
        config.chart(),
        'medianPricesChart',
        am4charts.XYChart
      )

      chart.id = 'medianPricesChart'

      const dateAxis = chart.xAxes.push(new am4charts.DateAxis())
      dateAxis.config = config.dateAxis()

      const valueAxis = chart.yAxes.push(new am4charts.ValueAxis())
      valueAxis.config = config.valueAxis('price')

      const selectedSeries = chart.series.push(new am4charts.LineSeries())
      selectedSeries.data = medianPrices.selected
      selectedSeries.config = config.line('selected', 'filled')

      const comparable1Series = chart.series.push(new am4charts.LineSeries())
      comparable1Series.data = medianPrices.comparable1
      comparable1Series.config = config.line('comparable1')

      const comparable2Series = chart.series.push(new am4charts.LineSeries())
      comparable2Series.data = medianPrices.comparable2
      comparable2Series.config = config.line('comparable2')

      const selectedSoldSeries = chart.series.push(new am4charts.LineSeries())
      selectedSoldSeries.data = medianPrices.selectedSold
      selectedSoldSeries.config = config.line('selected', 'dash')

      const comparable1SoldSeries = chart.series.push(new am4charts.LineSeries())
      comparable1SoldSeries.data = medianPrices.comparable1Sold
      comparable1SoldSeries.config = config.line('comparable1', 'dash')

      const comparable2SoldSeries = chart.series.push(new am4charts.LineSeries())
      comparable2SoldSeries.data = medianPrices.comparable2Sold
      comparable2SoldSeries.config = config.line('comparable2', 'dash')

      return () => {
        chart.dispose()
      }
    }
    fetchData()
  }, [])

  return (
    <Container>
      <Text chartTitle>
        <span>Median Prices</span>
        <Legend src={ActiveListingsSold} id="activeListingsSoldSvg" />
      </Text>
      <div id={'medianPricesChart'} style={{ width: '100%', height: 300 }} />
    </Container>
  )
}

export default MedianPrices
