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

const { inventoryConfig, sectionOneChartConfig } = config

const Inventory = () => {
  useEffect(() => {
    const chart = am4core.createFromConfig(
      sectionOneChartConfig.chart,
      inventoryConfig.id,
      am4charts.XYChart
    )
    chart.id = inventoryConfig.id

    const label = chart.createChild(am4core.Label)
    label.text = inventoryConfig.title
    label.config = sectionOneChartConfig.label

    const dateAxis = chart.xAxes.push(new am4charts.DateAxis())
    dateAxis.config = sectionOneChartConfig.dateAxis

    const valueAxis = chart.yAxes.push(new am4charts.ValueAxis())
    valueAxis.config = sectionOneChartConfig.valueAxis
    valueAxis.min = 0

    const selectedPropertySeries = chart.series.push(new am4charts.LineSeries())
    selectedPropertySeries.data = selectedProperty.inventory
    selectedPropertySeries.config = sectionOneChartConfig.selectedProperty

    const comparisonProperty1Series = chart.series.push(
      new am4charts.LineSeries()
    )
    comparisonProperty1Series.data = comparisonProperty1.inventory
    comparisonProperty1Series.config = sectionOneChartConfig.comparisonProperty1

    const comparisonProperty2Series = chart.series.push(
      new am4charts.LineSeries()
    )
    comparisonProperty2Series.data = comparisonProperty2.inventory
    comparisonProperty2Series.config = sectionOneChartConfig.comparisonProperty2

    const soldProperties = chart.series.push(new am4charts.LineSeries())
    soldProperties.data = soldProperty.inventory
    soldProperties.config = sectionOneChartConfig.soldProperties

    return () => {
      chart.dispose()
    }
  }, [])

  return (
    <>
      <div
        id={inventoryConfig.id}
        style={{ width: '100%', height: inventoryConfig.height }}
      ></div>
    </>
  )
}

export default Inventory
