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

const { domVsPriceConfig, sectionThreeChartConfig } = config

const Container = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
`

const DomVsPrice = () => {
  useEffect(() => {
    const chart = am4core.createFromConfig(
      sectionThreeChartConfig.chart,
      domVsPriceConfig.id,
      am4charts.XYChart
    )
    chart.id = domVsPriceConfig.id

    const label = chart.createChild(am4core.Label)
    label.text = domVsPriceConfig.title
    label.config = sectionThreeChartConfig.label

    // chart.legend = new am4charts.Legend()
    // chart.legend.parent = chart.tooltipContainer
    // chart.legend.config = sectionThreeChartConfig.legendConfig

    // const marker = chart.legend.markers.template
    // marker.disposeChildren()
    // const image = marker.createChild(am4core.Image)
    // image.width = 30
    // image.height = 30
    // image.href = LegendSold

    const categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis())
    categoryAxis.config = sectionThreeChartConfig.categoryAxis

    // categoryAxis.renderer.labels.template.disabled = true

    const valueAxis = chart.yAxes.push(new am4charts.ValueAxis())
    valueAxis.config = sectionThreeChartConfig.valueAxis
    valueAxis.numberFormatter.numberFormat = '$#a'

    const selectedPropertySeries = chart.series.push(
      new am4charts.CandlestickSeries()
    )
    selectedPropertySeries.data = selectedProperty.priceOfListings
    selectedPropertySeries.dataFields.categoryX = 'category'
    selectedPropertySeries.dataFields.valueY = 'close'
    selectedPropertySeries.dataFields.openValueY = 'open'
    selectedPropertySeries.dataFields.lowValueY = 'low'
    selectedPropertySeries.dataFields.highValueY = 'high'
    // selectedPropertySeries.simplifiedProcessing = true
    // selectedPropertySeries.config = sectionThreeChartConfig.selectedProperty

    // const comparisonProperty1Series = chart.series.push(
    //   new am4charts.CandlestickSeries()
    // )
    // comparisonProperty1Series.data = comparisonProperty1.medianPrices
    // comparisonProperty1Series.config =
    //   sectionThreeChartConfig.comparisonProperty1

    // const comparisonProperty2Series = chart.series.push(
    //   new am4charts.CandlestickSeries()
    // )
    // comparisonProperty2Series.data = comparisonProperty2.medianPrices
    // comparisonProperty2Series.config =
    //   sectionThreeChartConfig.comparisonProperty2

    // const soldProperties = chart.series.push(new am4charts.CandlestickSeries())
    // soldProperties.data = soldProperty.medianPrices
    // soldProperties.config = sectionThreeChartConfig.soldProperties

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
