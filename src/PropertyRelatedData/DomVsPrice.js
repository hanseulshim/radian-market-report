import React, { useEffect } from 'react'
import styled from 'styled-components'
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
import config from '../config1'
import { WHITE } from '../colors'
import { domVsPrice } from '../data/data1.json'
import Text from '../common/Text'
import legendDom from '../assets/legendDom.svg'
import Home from '../assets/home.svg'

const Legend = styled.img`
  height: 25px;
`

const Container = styled.div`
  grid-area: chart1;
`

const DomVsPrice = () => {
  useEffect(() => {
    const chart = am4core.createFromConfig(
      config.sectionOne.chart,
      'domVsPriceChart',
      am4charts.XYChart
    )
    chart.data = domVsPrice.selected

    const categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis())
    categoryAxis.config = config.sectionThree.categoryAxis

    const valueAxis = chart.yAxes.push(new am4charts.ValueAxis())
    valueAxis.config = config.sectionOne.valueAxis
    valueAxis.numberFormatter.numberFormat = '$#a'

    const selectedSeries = chart.series.push(new am4charts.ColumnSeries())
    selectedSeries.data = domVsPrice.selected
    selectedSeries.config = config.sectionThree.selected

    const selectedLineSeries = chart.series.push(new am4charts.StepLineSeries())
    selectedLineSeries.data = domVsPrice.selected
    selectedLineSeries.config = config.sectionThree.selectedLine

    const comparable1Series = chart.series.push(new am4charts.ColumnSeries())
    comparable1Series.data = domVsPrice.comparable1
    comparable1Series.config = config.sectionThree.comparable1

    const comparable1LineSeries = chart.series.push(
      new am4charts.StepLineSeries()
    )
    comparable1LineSeries.data = domVsPrice.comparable1
    comparable1LineSeries.config = config.sectionThree.comparable1Line

    const comparable2Series = chart.series.push(new am4charts.ColumnSeries())
    comparable2Series.data = domVsPrice.comparable2
    comparable2Series.config = config.sectionThree.comparable2

    const comparable2LineSeries = chart.series.push(
      new am4charts.StepLineSeries()
    )
    comparable2LineSeries.data = domVsPrice.comparable2
    comparable2LineSeries.config = config.sectionThree.comparable2Line

    const propertySeries = chart.series.push(new am4charts.LineSeries())
    propertySeries.data = domVsPrice.property
    propertySeries.dataFields.categoryX = 'category'
    propertySeries.dataFields.valueY = 'average'
    const bullet = propertySeries.bullets.push(new am4charts.CircleBullet())
    bullet.dx = -30
    bullet.circle.radius = 12
    bullet.circle.fill = am4core.color(WHITE)
    bullet.circle.strokeWidth = 0
    bullet.filters.push(new am4core.DropShadowFilter())

    const image = bullet.createChild(am4core.Image)
    image.href = Home
    image.width = 15
    image.height = 15
    image.horizontalCenter = 'middle'
    image.verticalCenter = 'middle'

    return () => {
      chart.dispose()
    }
  }, [])

  return (
    <Container>
      <Text chartTitle>Cost Over Time on the Market</Text>
      <Text subChartTitle>
        <span>DOM vs Price of Listings</span>
        <Legend src={legendDom} />
      </Text>
      <div id={'domVsPriceChart'} style={{ width: '100%', height: 300 }} />
    </Container>
  )
}

export default DomVsPrice
