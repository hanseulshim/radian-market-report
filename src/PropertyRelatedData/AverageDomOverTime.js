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

const {
  averageDomOverTimeConfig,
  sectionOneChartConfig,
  sectionFourChartConfig,
  sectionFiveChartConfig
} = config

const AverageDomOverTime = () => {
  useEffect(() => {
    const chart = am4core.createFromConfig(
      sectionFourChartConfig.chart,
      averageDomOverTimeConfig.id,
      am4charts.XYChart
    )
    chart.id = averageDomOverTimeConfig.id
    chart.data = selectedProperty.averageDomOverTime

    const label = chart.createChild(am4core.Label)
    label.text = averageDomOverTimeConfig.title
    label.config = sectionFourChartConfig.label

    const categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis())
    categoryAxis.config = sectionFiveChartConfig.categoryAxis

    categoryAxis.renderer.cellStartLocation = 0.1
    categoryAxis.renderer.cellEndLocation = 0.9

    const valueAxis = chart.yAxes.push(new am4charts.ValueAxis())
    valueAxis.config = sectionOneChartConfig.valueAxis
    valueAxis.min = 0

    // SELECTED PROPERTY

    const selectedPropertySeries = chart.series.push(new am4charts.LineSeries())
    selectedPropertySeries.data = selectedProperty.averageDomOverTime
    selectedPropertySeries.config = sectionFiveChartConfig.selectedProperty
    selectedPropertySeries.strokeWidth = 3

    const comparisonProperty1Series = chart.series.push(
      new am4charts.LineSeries()
    )
    comparisonProperty1Series.data = comparisonProperty1.averageDomOverTime
    comparisonProperty1Series.config =
      sectionFiveChartConfig.comparisonProperty1
    comparisonProperty1Series.strokeWidth = 3

    const comparisonProperty2Series = chart.series.push(
      new am4charts.LineSeries()
    )
    comparisonProperty2Series.data = comparisonProperty2.averageDomOverTime
    comparisonProperty2Series.config =
      sectionFiveChartConfig.comparisonProperty2
    comparisonProperty2Series.strokeWidth = 3

    const soldPropertySeries = chart.series.push(new am4charts.LineSeries())
    soldPropertySeries.data = selectedProperty.soldProperty.averageDomOverTime
    soldPropertySeries.config = sectionFiveChartConfig.soldProperty
    soldPropertySeries.strokeWidth = 3

    return () => {
      chart.dispose()
    }
  }, [])

  return (
    <>
      <div
        id={averageDomOverTimeConfig.id}
        style={{ width: '100%', height: averageDomOverTimeConfig.height }}
      ></div>
    </>
  )
}

export default AverageDomOverTime
