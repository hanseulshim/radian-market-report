import React, { useEffect } from 'react'
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
import styled from 'styled-components'
import Text from '../common/Text'
import config from '../config1'
import { avgSaleToListRatio } from '../data/data1.json'

const Container = styled.div`
  grid-area: chart2;
`
const AvgSaleToListRatio = () => {
  useEffect(() => {
    const chart = am4core.createFromConfig(
      config.sectionOne.chart,
      'avgSaleToListRatioChart',
      am4charts.XYChart
    )

    const dateAxis = chart.xAxes.push(new am4charts.DateAxis())
    dateAxis.config = config.sectionOne.dateAxis

    const valueAxis = chart.yAxes.push(new am4charts.ValueAxis())
    valueAxis.config = config.sectionOne.valueAxis
    valueAxis.numberFormatter.numberFormat = '#%'
    const range = valueAxis.axisRanges.create()
    range.value = 0
    range.grid.strokeOpacity = 1
    range.grid.strokeWidth = 2

    const selectedSeries = chart.series.push(new am4charts.ColumnSeries())
    selectedSeries.data = avgSaleToListRatio.selected
    selectedSeries.config = config.sectionOne.selected
    selectedSeries.strokeWidth = 0
    selectedSeries.fillOpacity = 1

    const comparable1Series = chart.series.push(new am4charts.LineSeries())
    comparable1Series.data = avgSaleToListRatio.comparable1
    comparable1Series.config = config.sectionOne.comparable1

    const comparable2Series = chart.series.push(new am4charts.LineSeries())
    comparable2Series.data = avgSaleToListRatio.comparable2
    comparable2Series.config = config.sectionOne.comparable2

    return () => {
      chart.dispose()
    }
  }, [])

  return (
    <Container>
      <Text chartTitle>Avg Sale to List Ratio</Text>
      <div
        id={'avgSaleToListRatioChart'}
        style={{ width: '100%', height: 200 }}
      />
    </Container>
  )
}

export default AvgSaleToListRatio
