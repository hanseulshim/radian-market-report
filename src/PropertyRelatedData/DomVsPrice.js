import React, { useEffect } from 'react'
import styled from 'styled-components'
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
import { propertyData } from '../data/data.json'
import legendDom from '../assets/legendDom.svg'
import config from '../config'
import Home from '../assets/home.svg'

const {
  selectedProperty,
  comparisonProperty1,
  comparisonProperty2
} = propertyData

const {
  domVsPriceConfig,
  sectionOneChartConfig,
  sectionFourChartConfig
} = config

const ChartTitle = styled.div`
  font-weight: bold;
  font-size: 150%;
  margin-left: 65px;
  margin-right: 15px
  margin-bottom: 5px;
  margin-top: 30px;
  border-bottom: 1px solid #000;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`
const Legend = styled.img`
  height: 25px;
`

const ChartSubtitle = styled.div`
  font-weight: bold;
  font-size: 110%;
  margin-left: 65px;
  margin-bottom: 10px;
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

    const categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis())
    categoryAxis.config = sectionFourChartConfig.categoryAxis

    categoryAxis.renderer.cellStartLocation = 0.1
    categoryAxis.renderer.cellEndLocation = 0.9

    // categoryAxis.renderer.labels.template.disabled = true

    const valueAxis = chart.yAxes.push(new am4charts.ValueAxis())
    valueAxis.config = sectionOneChartConfig.valueAxis
    valueAxis.numberFormatter.numberFormat = '$#a'

    // SELECTED PROPERTY

    const selectedPropertySeries = chart.series.push(
      new am4charts.ColumnSeries()
    )
    selectedPropertySeries.data = selectedProperty.priceOfListings
    selectedPropertySeries.config = sectionFourChartConfig.selectedProperty

    const selectedPropertyLineSeries = chart.series.push(
      new am4charts.StepLineSeries()
    )
    selectedPropertyLineSeries.data = selectedProperty.priceOfListings
    selectedPropertyLineSeries.config =
      sectionFourChartConfig.selectedPropertyLineSeries

    // COMPARISON PROPERTY 1

    const comparisonProperty1Series = chart.series.push(
      new am4charts.ColumnSeries()
    )

    comparisonProperty1Series.data = comparisonProperty1.priceOfListings
    comparisonProperty1Series.config =
      sectionFourChartConfig.comparisonProperty1

    const comparisonProperty1LineSeries = chart.series.push(
      new am4charts.StepLineSeries()
    )
    comparisonProperty1LineSeries.data = comparisonProperty1.priceOfListings
    comparisonProperty1LineSeries.config =
      sectionFourChartConfig.comparisonProperty1LineSeries

    // COMPARISON PROPERTY 2

    const comparisonProperty2Series = chart.series.push(
      new am4charts.ColumnSeries()
    )

    comparisonProperty2Series.data = comparisonProperty2.priceOfListings
    comparisonProperty2Series.config =
      sectionFourChartConfig.comparisonProperty2

    const comparisonProperty2LineSeries = chart.series.push(
      new am4charts.StepLineSeries()
    )
    comparisonProperty2LineSeries.data = comparisonProperty2.priceOfListings
    comparisonProperty2LineSeries.config =
      sectionFourChartConfig.comparisonProperty2LineSeries

    const ageOfPropertySeries = chart.series.push(new am4charts.LineSeries())
    ageOfPropertySeries.data = [selectedProperty.priceOfListingSingle]
    ageOfPropertySeries.dataFields.categoryX = 'category'
    ageOfPropertySeries.dataFields.valueY = 'value'
    const bullet = ageOfPropertySeries.bullets.push(
      new am4charts.CircleBullet()
    )
    bullet.dx = -12
    bullet.circle.radius = 10
    bullet.circle.fill = am4core.color('#FFF')
    bullet.circle.strokeWidth = 0
    bullet.filters.push(new am4core.DropShadowFilter())

    const image = bullet.createChild(am4core.Image)
    image.href = Home
    image.width = 12
    image.height = 12
    image.horizontalCenter = 'middle'
    image.verticalCenter = 'middle'

    return () => {
      chart.dispose()
    }
  }, [])

  return (
    <>
      <ChartTitle>
        <span>Days on Market</span>
        <Legend src={legendDom} />
      </ChartTitle>
      <ChartSubtitle>Cost Over Time on the Market</ChartSubtitle>
      <div
        id={domVsPriceConfig.id}
        style={{ width: '100%', height: domVsPriceConfig.height }}
      ></div>
    </>
  )
}

export default DomVsPrice
