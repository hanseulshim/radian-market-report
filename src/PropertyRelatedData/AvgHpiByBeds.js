import React, { useEffect } from 'react'
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
import am4themesAnimated from '@amcharts/amcharts4/themes/animated'
import { propertyData } from '../data/data.json'
import config from '../config'
am4core.useTheme(am4themesAnimated)
const { selectedProperty } = propertyData

const { avgHpiByBedsConfig, sectionTwoChartConfig } = config

const AvgHpiByBeds = () => {
  useEffect(() => {
    const chart = am4core.createFromConfig(
      sectionTwoChartConfig.chart,
      avgHpiByBedsConfig.id,
      am4charts.XYChart
    )
    chart.id = avgHpiByBedsConfig.id

    chart.legend = new am4charts.Legend()
    chart.legend.parent = chart.tooltipContainer
    chart.legend.config = sectionTwoChartConfig.legendConfig

    const label = chart.createChild(am4core.Label)
    label.config = sectionTwoChartConfig.label
    label.text = `Avg ${selectedProperty.label} HPI by Beds`

    const dateAxis = chart.xAxes.push(new am4charts.DateAxis())
    dateAxis.config = sectionTwoChartConfig.dateAxis

    const valueAxis = chart.yAxes.push(new am4charts.ValueAxis())
    valueAxis.config = sectionTwoChartConfig.valueAxis
    valueAxis.min = 0

    const series1 = chart.series.push(new am4charts.LineSeries())
    series1.name = '1BR'
    series1.data = selectedProperty.avgHpiByBeds.br1
    series1.config = sectionTwoChartConfig.series1

    const series2 = chart.series.push(new am4charts.LineSeries())
    series2.name = '2BR'
    series2.data = selectedProperty.avgHpiByBeds.br2
    series2.config = sectionTwoChartConfig.series2

    const series3 = chart.series.push(new am4charts.LineSeries())
    series3.name = '3BR'
    series3.data = selectedProperty.avgHpiByBeds.br3
    series3.config = sectionTwoChartConfig.series3

    const series4 = chart.series.push(new am4charts.LineSeries())
    series4.name = '4BR'
    series4.data = selectedProperty.avgHpiByBeds.br4
    series4.config = sectionTwoChartConfig.series4

    return () => {
      chart.dispose()
    }
  }, [])

  return (
    <>
      <div
        id={avgHpiByBedsConfig.id}
        style={{ width: '100%', height: avgHpiByBedsConfig.height }}
      ></div>
    </>
  )
}

export default AvgHpiByBeds
