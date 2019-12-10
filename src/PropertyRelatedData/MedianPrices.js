import React, { useEffect } from 'react'
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
import am4themesAnimated from '@amcharts/amcharts4/themes/animated'
import { propertyData } from '../data/data.json'
import config from '../config'
am4core.useTheme(am4themesAnimated)
const {
  selectedProperty,
  comparisonProperty1,
  comparisonProperty2,
  soldProperty
} = propertyData

const { legendConfig, medianPricesConfig, sectionOneChartConfig } = config

const MedianPrices = () => {
  useEffect(() => {
    const chart = am4core.createFromConfig(
      sectionOneChartConfig.chart,
      medianPricesConfig.id,
      am4charts.XYChart
    )
    chart.id = medianPricesConfig.id

    const label = chart.createChild(am4core.Label)
    label.text = medianPricesConfig.title
    label.config = sectionOneChartConfig.label
    label.y = label.y + 35

    chart.legend = new am4charts.Legend()
    chart.legend.parent = chart.chartContainer
    chart.legend.config = legendConfig

    const dateAxis = chart.xAxes.push(new am4charts.DateAxis())
    dateAxis.config = sectionOneChartConfig.dateAxis

    const valueAxis = chart.yAxes.push(new am4charts.ValueAxis())
    valueAxis.config = sectionOneChartConfig.valueAxis
    valueAxis.numberFormatter.numberFormat = '$#a'

    const selectedPropertySeries = chart.series.push(new am4charts.LineSeries())
    selectedPropertySeries.data = selectedProperty.medianPrices
    selectedPropertySeries.config = sectionOneChartConfig.selectedProperty

    const comparisonProperty1Series = chart.series.push(
      new am4charts.LineSeries()
    )
    comparisonProperty1Series.data = comparisonProperty1.medianPrices
    comparisonProperty1Series.config = sectionOneChartConfig.comparisonProperty1

    const comparisonProperty2Series = chart.series.push(
      new am4charts.LineSeries()
    )
    comparisonProperty2Series.data = comparisonProperty2.medianPrices
    comparisonProperty2Series.config = sectionOneChartConfig.comparisonProperty2

    const soldProperties = chart.series.push(new am4charts.LineSeries())
    soldProperties.data = soldProperty.medianPrices
    soldProperties.config = sectionOneChartConfig.soldProperties

    return () => {
      chart.dispose()
    }
  }, [])

  return (
    <>
      <div
        id={medianPricesConfig.id}
        style={{ width: '100%', height: medianPricesConfig.height }}
      ></div>
    </>
  )
}

export default MedianPrices
