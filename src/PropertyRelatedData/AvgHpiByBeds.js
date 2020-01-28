import React, { useEffect } from 'react'
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
import styled from 'styled-components'
import config from '../config1'
import { avgHpiByBeds, propertyInfo } from '../data/data1.json'
import { DESERT_STORM } from '../colors'

const Container = styled.div`
  grid-area: chart4;
  background: ${DESERT_STORM};
`
const AvgHpiByBeds = () => {
  useEffect(() => {
    const chart = am4core.createFromConfig(
      config.sectionTwo.chart,
      'avgHpiByBedsChart',
      am4charts.XYChart
    )

    chart.legend = new am4charts.Legend()
    chart.legend.parent = chart.tooltipContainer
    chart.legend.config = config.sectionTwo.legendConfig

    const label = chart.createChild(am4core.Label)
    label.config = config.sectionTwo.label
    label.text = `Avg ${propertyInfo.selected} HPI by Beds`

    const dateAxis = chart.xAxes.push(new am4charts.DateAxis())
    dateAxis.config = config.sectionTwo.dateAxis

    const valueAxis = chart.yAxes.push(new am4charts.ValueAxis())
    valueAxis.config = config.sectionTwo.valueAxis
    valueAxis.min = 0

    const series1 = chart.series.push(new am4charts.LineSeries())
    series1.name = '1BR'
    series1.data = avgHpiByBeds.br1
    series1.config = config.sectionTwo.series1

    const series2 = chart.series.push(new am4charts.LineSeries())
    series2.name = '2BR'
    series2.data = avgHpiByBeds.br2
    series2.config = config.sectionTwo.series2

    const series3 = chart.series.push(new am4charts.LineSeries())
    series3.name = '3BR'
    series3.data = avgHpiByBeds.br3
    series3.config = config.sectionTwo.series3

    const series4 = chart.series.push(new am4charts.LineSeries())
    series4.name = '4BR'
    series4.data = avgHpiByBeds.br4
    series4.config = config.sectionTwo.series4

    return () => {
      chart.dispose()
    }
  }, [])

  return (
    <Container
      id={'avgHpiByBedsChart'}
      style={{ width: '100%', height: 300 }}
    />
  )
}

export default AvgHpiByBeds
