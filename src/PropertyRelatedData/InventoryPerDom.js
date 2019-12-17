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
  inventoryPerDomConfig,
  sectionOneChartConfig,
  sectionFourChartConfig,
  sectionFiveChartConfig
} = config

const InventoryPerDom = () => {
  useEffect(() => {
    const chart = am4core.createFromConfig(
      sectionFourChartConfig.chart,
      inventoryPerDomConfig.id,
      am4charts.XYChart
    )
    chart.id = inventoryPerDomConfig.id
    chart.data = selectedProperty.inventoryListings

    const label = chart.createChild(am4core.Label)
    label.text = inventoryPerDomConfig.title
    label.config = sectionFourChartConfig.label

    const categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis())
    categoryAxis.config = sectionFourChartConfig.categoryAxis

    categoryAxis.renderer.cellStartLocation = 0.1
    categoryAxis.renderer.cellEndLocation = 0.9

    const valueAxis = chart.yAxes.push(new am4charts.ValueAxis())
    valueAxis.config = sectionOneChartConfig.valueAxis

    // SELECTED PROPERTY

    const selectedPropertySeries = chart.series.push(
      new am4charts.ColumnSeries()
    )
    selectedPropertySeries.data = selectedProperty.inventoryListings
    selectedPropertySeries.config = sectionFiveChartConfig.selectedProperty

    const comparisonProperty1Series = chart.series.push(
      new am4charts.ColumnSeries()
    )
    comparisonProperty1Series.data = comparisonProperty1.inventoryListings
    comparisonProperty1Series.config =
      sectionFiveChartConfig.comparisonProperty1

    const comparisonProperty2Series = chart.series.push(
      new am4charts.ColumnSeries()
    )
    comparisonProperty2Series.data = comparisonProperty2.inventoryListings
    comparisonProperty2Series.config =
      sectionFiveChartConfig.comparisonProperty2

    return () => {
      chart.dispose()
    }
  }, [])

  return (
    <>
      <div
        id={inventoryPerDomConfig.id}
        style={{ width: '100%', height: inventoryPerDomConfig.height }}
      ></div>
    </>
  )
}

export default InventoryPerDom