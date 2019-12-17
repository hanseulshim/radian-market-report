import React, { useEffect } from 'react'
import styled from 'styled-components'
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
import { propertyData } from '../data/data.json'
import config from '../config'
import LegendSold from '../assets/legendSold.svg'
const {
  selectedProperty,
  comparisonProperty1,
  comparisonProperty2,
  soldProperty
} = propertyData

const { inventoryPerDomConfig, sectionFiveChartConfig } = config

const Container = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
`

const InventoryPerDom = () => {
  useEffect(() => {
    const chart = am4core.createFromConfig(
      sectionFiveChartConfig.chart,
      inventoryPerDomConfig.id,
      am4charts.XYChart
    )
    chart.id = inventoryPerDomConfig.id
    chart.data = selectedProperty.inventoryListings

    const label = chart.createChild(am4core.Label)
    label.text = inventoryPerDomConfig.title
    label.config = sectionFiveChartConfig.label

    const categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis())
    categoryAxis.config = sectionFiveChartConfig.categoryAxis

    categoryAxis.renderer.cellStartLocation = 0.1
    categoryAxis.renderer.cellEndLocation = 0.9

    const valueAxis = chart.yAxes.push(new am4charts.ValueAxis())
    valueAxis.config = sectionFiveChartConfig.valueAxis

    // SELECTED PROPERTY

    const selectedPropertySeries = chart.series.push(
      new am4charts.ColumnSeries()
    )
    selectedPropertySeries.data = selectedProperty.inventoryListings
    selectedPropertySeries.config = sectionFiveChartConfig.selectedProperty

    const selectedPropertyLineSeries = chart.series.push(
      new am4charts.StepLineSeries()
    )
    selectedPropertyLineSeries.data = selectedProperty.inventoryListings
    selectedPropertyLineSeries.config =
      sectionFiveChartConfig.selectedPropertyLineSeries

    // COMPARISON PROPERTY 1

    const comparisonProperty1Series = chart.series.push(
      new am4charts.ColumnSeries()
    )

    comparisonProperty1Series.data = comparisonProperty1.inventoryListings
    comparisonProperty1Series.config =
      sectionFiveChartConfig.comparisonProperty1

    const comparisonProperty1LineSeries = chart.series.push(
      new am4charts.StepLineSeries()
    )
    comparisonProperty1LineSeries.data = comparisonProperty1.inventoryListings
    comparisonProperty1LineSeries.config =
      sectionFiveChartConfig.comparisonProperty1LineSeries

    // COMPARISON PROPERTY 2

    const comparisonProperty2Series = chart.series.push(
      new am4charts.ColumnSeries()
    )

    comparisonProperty2Series.data = comparisonProperty2.inventoryListings
    comparisonProperty2Series.config =
      sectionFiveChartConfig.comparisonProperty2

    const comparisonProperty2LineSeries = chart.series.push(
      new am4charts.StepLineSeries()
    )
    comparisonProperty2LineSeries.data = comparisonProperty2.inventoryListings
    comparisonProperty2LineSeries.config =
      sectionFiveChartConfig.comparisonProperty2LineSeries

    // const soldProperties = chart.series.push(new am4charts.CandlestickSeries())
    // soldProperties.data = soldProperty.medianPrices
    // soldProperties.config = sectionFiveChartConfig.soldProperties

    return () => {
      chart.dispose()
    };
  }, [])

  return (
    <Container>
      <div
        id={inventoryPerDomConfig.id}
        style={{ width: '100%', height: inventoryPerDomConfig.height }}
      ></div>
    </Container>
  )
};

export default InventoryPerDom
