import React, { useEffect } from 'react'
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
import styled from 'styled-components'
import config from '../config1'
import { averageDomOverTime } from '../data/data1.json'

const Container = styled.div`
  grid-area: chart3;
`

const AverageDomOverTime = () => {
  useEffect(() => {
    const chart = am4core.createFromConfig(
      config.sectionThree.chart,
      'averageDomOverTimeChart',
      am4charts.XYChart
    )
    chart.data = averageDomOverTime.selected

    const label = chart.createChild(am4core.Label)
    label.text = 'Average DOM Over Time'
    label.config = config.sectionThree.label

    const categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis())
    categoryAxis.config = config.sectionThree.categoryAxis
    categoryAxis.startLocation = 0.5
    categoryAxis.endLocation = 0.5
    categoryAxis.renderer.grid.template.location = 0.5

    const valueAxis = chart.yAxes.push(new am4charts.ValueAxis())
    valueAxis.config = config.sectionOne.valueAxis
    valueAxis.min = 0

    const selectedSeries = chart.series.push(new am4charts.LineSeries())
    selectedSeries.data = averageDomOverTime.selected
    selectedSeries.config = config.sectionThree.selectedLine

    const comparable1Series = chart.series.push(new am4charts.LineSeries())
    comparable1Series.data = averageDomOverTime.comparable1
    comparable1Series.config = config.sectionThree.comparable1Line

    const comparable2Series = chart.series.push(new am4charts.LineSeries())
    comparable2Series.data = averageDomOverTime.comparable2
    comparable2Series.config = config.sectionThree.comparable2Line

    const selectedSoldSeries = chart.series.push(new am4charts.LineSeries())
    selectedSoldSeries.data = averageDomOverTime.selectedSold
    selectedSoldSeries.config = config.sectionThree.selectedSold

    return () => {
      chart.dispose()
    }
  }, [])

  return (
    <Container
      id={'averageDomOverTimeChart'}
      style={{ width: '100%', height: 200 }}
    />
  )
}

export default AverageDomOverTime
