import React, { useEffect } from 'react'
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
import { propertyData } from '../data/data.json'
import config from '../config'

const {
  selectedProperty,
  comparisonProperty1,
  comparisonProperty2
} = propertyData
const { avgSaleToListRatioConfig, sectionOneChartConfig } = config

const AvgSaleToListRatio = () => {
  useEffect(() => {
    const chart = am4core.createFromConfig(
      sectionOneChartConfig.chart,
      avgSaleToListRatioConfig.id,
      am4charts.XYChart
    )
    chart.id = avgSaleToListRatioConfig.id

    const label = chart.createChild(am4core.Label)
    label.text = avgSaleToListRatioConfig.title
    label.config = sectionOneChartConfig.label

    const dateAxis = chart.xAxes.push(new am4charts.DateAxis())
    dateAxis.config = sectionOneChartConfig.dateAxis
    dateAxis.renderer.labels.template.disabled = true

    const valueAxis = chart.yAxes.push(new am4charts.ValueAxis())
    valueAxis.config = sectionOneChartConfig.valueAxis
    valueAxis.numberFormatter.numberFormat = '#%'
    const range = valueAxis.axisRanges.create()
    range.value = 0
    range.grid.strokeOpacity = 1
    range.grid.strokeWidth = 2

    const selectedPropertySeries = chart.series.push(
      new am4charts.ColumnSeries()
    )
    selectedPropertySeries.data = selectedProperty.avgSaleToListRatio
    selectedPropertySeries.config = sectionOneChartConfig.selectedProperty
    selectedPropertySeries.strokeWidth = 0

    const comparisonProperty1Series = chart.series.push(
      new am4charts.LineSeries()
    )
    comparisonProperty1Series.data = comparisonProperty1.avgSaleToListRatio
    comparisonProperty1Series.config = sectionOneChartConfig.comparisonProperty1

    const comparisonProperty2Series = chart.series.push(
      new am4charts.LineSeries()
    )
    comparisonProperty2Series.data = comparisonProperty2.avgSaleToListRatio
    comparisonProperty2Series.config = sectionOneChartConfig.comparisonProperty2

    return () => {
      chart.dispose()
    }
  }, [])

  return (
    <div
      id={avgSaleToListRatioConfig.id}
      style={{ width: '100%', height: avgSaleToListRatioConfig.height }}
    ></div>
  )
}

export default AvgSaleToListRatio
