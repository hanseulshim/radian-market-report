import React, { useEffect } from 'react'
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
import am4themesAnimated from '@amcharts/amcharts4/themes/animated'
import { propertyData } from '../data/data.json'
import config from '../config'
am4core.useTheme(am4themesAnimated)
const { selectedProperty } = propertyData

const { avgHpiBySqFtConfig, sectionTwoChartConfig } = config

const AvgHpiBySqFt = () => {
  useEffect(() => {
    const chart = am4core.createFromConfig(
      sectionTwoChartConfig.chart,
      avgHpiBySqFtConfig.id,
      am4charts.XYChart
    )
    chart.id = avgHpiBySqFtConfig.id

    chart.legend = new am4charts.Legend()
    chart.legend.parent = chart.tooltipContainer
    chart.legend.config = sectionTwoChartConfig.legendConfig
    chart.legend.labels.template.marginLeft = -30
    chart.legend.markers.template.dx = 5

    const label = chart.createChild(am4core.Label)
    label.config = sectionTwoChartConfig.label
    label.text = `Avg ${selectedProperty.label} HPI by Sq Ft`

    const dateAxis = chart.xAxes.push(new am4charts.DateAxis())
    dateAxis.config = sectionTwoChartConfig.dateAxis

    const valueAxis = chart.yAxes.push(new am4charts.ValueAxis())
    valueAxis.config = sectionTwoChartConfig.valueAxis
    valueAxis.min = 0

    const series1 = chart.series.push(new am4charts.LineSeries())
    series1.name = '2.5-3k'
    series1.data = selectedProperty.avgHpiBySqFt.sqFt1
    series1.config = sectionTwoChartConfig.series1

    const series2 = chart.series.push(new am4charts.LineSeries())
    series2.name = '3-3.5k'
    series2.data = selectedProperty.avgHpiBySqFt.sqFt2
    series2.config = sectionTwoChartConfig.series2

    const series3 = chart.series.push(new am4charts.LineSeries())
    series3.name = '3.5-4k'
    series3.data = selectedProperty.avgHpiBySqFt.sqFt3
    series3.config = sectionTwoChartConfig.series3

    const series4 = chart.series.push(new am4charts.LineSeries())
    series4.name = '4.5-5k'
    series4.data = selectedProperty.avgHpiBySqFt.sqFt4
    series4.config = sectionTwoChartConfig.series4

    return () => {
      chart.dispose()
    }
  }, [])

  return (
    <>
      <div
        id={avgHpiBySqFtConfig.id}
        style={{ width: '100%', height: avgHpiBySqFtConfig.height }}
      ></div>
    </>
  )
}

export default AvgHpiBySqFt
