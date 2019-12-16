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

const { domVsPriceConfig, sectionFourChartConfig } = config

const Container = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
`

const DomVsPrice = () => {
  useEffect(() => {
    const chart = am4core.createFromConfig(
      sectionFourChartConfig.chart,
      domVsPriceConfig.id,
      am4charts.XYChart
    )
    chart.id = domVsPriceConfig.id
    chart.data = selectedProperty.priceOfListings

    const label = chart.createChild(am4core.Label)
    label.text = domVsPriceConfig.title
    label.config = sectionFourChartConfig.label

    // chart.legend = new am4charts.Legend()
    // chart.legend.parent = chart.tooltipContainer
    // chart.legend.config = sectionFourChartConfig.legendConfig

    // const marker = chart.legend.markers.template
    // marker.disposeChildren()
    // const image = marker.createChild(am4core.Image)
    // image.width = 30
    // image.height = 30
    // image.href = LegendSold

    const categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis())
    categoryAxis.config = sectionFourChartConfig.categoryAxis
    categoryAxis.dataFields.category = 'category'
    categoryAxis.renderer.cellStartLocation = 0.1
    categoryAxis.renderer.cellEndLocation = 0.9

    // categoryAxis.renderer.labels.template.disabled = true

    const valueAxis = chart.yAxes.push(new am4charts.ValueAxis())
    valueAxis.config = sectionFourChartConfig.valueAxis
    valueAxis.numberFormatter.numberFormat = '$#a'

    const selectedPropertySeries = chart.series.push(
      new am4charts.ColumnSeries()
    )

    selectedPropertySeries.data = selectedProperty.priceOfListings
    selectedPropertySeries.config = sectionFourChartConfig.selectedProperty
    selectedPropertySeries.dataFields.categoryX = 'category'
    selectedPropertySeries.dataFields.valueY = 'high'
    selectedPropertySeries.dataFields.openValueY = 'low'
    selectedPropertySeries.columns.template.width = am4core.percent(80)
    selectedPropertySeries.columns.template.strokeWidth = 0

    const comparisonProperty1Series = chart.series.push(
      new am4charts.ColumnSeries()
    )

    comparisonProperty1Series.data = comparisonProperty1.priceOfListings
    comparisonProperty1Series.config =
      sectionFourChartConfig.comparisonProperty1
    comparisonProperty1Series.dataFields.categoryX = 'category'
    comparisonProperty1Series.dataFields.valueY = 'high'
    comparisonProperty1Series.dataFields.openValueY = 'low'
    comparisonProperty1Series.columns.template.width = am4core.percent(80)

    const comparisonProperty2Series = chart.series.push(
      new am4charts.ColumnSeries()
    )

    comparisonProperty2Series.data = comparisonProperty2.priceOfListings
    comparisonProperty2Series.config =
      sectionFourChartConfig.comparisonProperty2
    comparisonProperty2Series.dataFields.categoryX = 'category'
    comparisonProperty2Series.dataFields.valueY = 'high'
    comparisonProperty2Series.dataFields.openValueY = 'low'
    comparisonProperty2Series.columns.template.width = am4core.percent(80)

    // const soldProperties = chart.series.push(new am4charts.CandlestickSeries())
    // soldProperties.data = soldProperty.medianPrices
    // soldProperties.config = sectionFourChartConfig.soldProperties

    // var medianaSeries = chart.series.push(new am4charts.StepLineSeries())
    // medianaSeries.noRisers = true
    // medianaSeries.startLocation = -0.1
    // medianaSeries.endLocation = 1.1
    // medianaSeries.dataFields.valueY = 'average'
    // medianaSeries.dataFields.categoryX = 'category'
    // medianaSeries.strokeWidth = 2
    // medianaSeries.stroke = am4core.color('#fc1303')

    // addMediana()

    // function addMediana () {
    //   for (var i = 0; i < chart.data.length; i++) {
    //     var dataItem = chart.data[i]
    //     dataItem.medianaColor = i
    //   }
    // }

    return () => {
      chart.dispose()
    };
  }, [])

  return (
    <Container>
      <div
        id={domVsPriceConfig.id}
        style={{ width: '100%', height: domVsPriceConfig.height }}
      ></div>
    </Container>
  )
};

export default DomVsPrice
