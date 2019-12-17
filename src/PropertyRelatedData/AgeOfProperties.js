import React, { useEffect } from 'react'
import styled from 'styled-components'
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
import { propertyData } from '../data/data.json'
import Home from '../assets/home.svg'
import legendAge from '../assets/legendAge.svg'
import config from '../config'

const {
  ageOfPropertiesConfig,
  sectionOneChartConfig,
  sectionThreeChartConfig
} = config

const {
  stats,
  selectedProperty,
  comparisonProperty1,
  comparisonProperty2
} = propertyData

const Container = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
`

const Info = styled.div`
  margin-top: 25px;
`

const Title = styled.div`
  font-weight: bold;
`

const ChartTitle = styled.div`
  font-weight: bold;
  font-size: 150%;
  margin-left: 20px;
  margin-right: 15px
  margin-bottom: 10px;
  margin-top: 30px;
  border-bottom: 1px solid #000;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`
const Legend = styled.img`
  height: 40px;
  margin-bottom: 5px;
`

const AgeOfProperties = () => {
  useEffect(() => {
    const chart = am4core.createFromConfig(
      sectionThreeChartConfig.chart,
      ageOfPropertiesConfig.id,
      am4charts.XYChart
    )

    chart.id = ageOfPropertiesConfig.id
    chart.maskBullets = false

    const yLabel = chart.createChild(am4core.Label)
    yLabel.text = 'Count'
    yLabel.config = sectionOneChartConfig.label
    yLabel.x = 30
    yLabel.fontSize = 12

    const dateAxis = chart.xAxes.push(new am4charts.DateAxis())
    dateAxis.config = sectionOneChartConfig.dateAxis
    dateAxis.title.text = 'Year Built'
    dateAxis.title.fontWeight = 'bold'

    const valueAxis = chart.yAxes.push(new am4charts.ValueAxis())
    valueAxis.config = sectionThreeChartConfig.valueAxis
    valueAxis.min = 0

    const selectedPropertySeries = chart.series.push(new am4charts.LineSeries())
    selectedPropertySeries.data = selectedProperty.ageOfProperties
    selectedPropertySeries.config = sectionOneChartConfig.selectedProperty
    selectedPropertySeries.tensionX = 0.75
    selectedPropertySeries.tensionY = 0.75

    const selectedPropertySeriesAvg = chart.series.push(
      new am4charts.ColumnSeries()
    )
    selectedPropertySeriesAvg.data = selectedProperty.ageOfPropertiesAvg
    selectedPropertySeriesAvg.config =
      sectionThreeChartConfig.selectedPropertySeriesAvg

    const comparisonProperty1Series = chart.series.push(
      new am4charts.LineSeries()
    )
    comparisonProperty1Series.data = comparisonProperty1.ageOfProperties
    comparisonProperty1Series.config = sectionOneChartConfig.comparisonProperty1
    comparisonProperty1Series.tensionX = 0.75
    comparisonProperty1Series.tensionY = 0.75

    const comparisonProperty1SeriesAvg = chart.series.push(
      new am4charts.ColumnSeries()
    )
    comparisonProperty1SeriesAvg.data = comparisonProperty1.ageOfPropertiesAvg
    comparisonProperty1SeriesAvg.config =
      sectionThreeChartConfig.comparisonProperty1SeriesAvg

    const comparisonProperty2Series = chart.series.push(
      new am4charts.LineSeries()
    )
    comparisonProperty2Series.data = comparisonProperty2.ageOfProperties
    comparisonProperty2Series.config = sectionOneChartConfig.comparisonProperty2
    comparisonProperty2Series.tensionX = 0.75
    comparisonProperty2Series.tensionY = 0.75

    const comparisonProperty2SeriesAvg = chart.series.push(
      new am4charts.ColumnSeries()
    )
    comparisonProperty2SeriesAvg.data = comparisonProperty2.ageOfPropertiesAvg
    comparisonProperty2SeriesAvg.config =
      sectionThreeChartConfig.comparisonProperty2SeriesAvg

    const soldPropertySeries = chart.series.push(new am4charts.LineSeries())
    soldPropertySeries.data = selectedProperty.soldProperty.ageOfProperties
    soldPropertySeries.config = sectionOneChartConfig.soldProperty
    soldPropertySeries.tensionX = 0.75
    soldPropertySeries.tensionY = 0.75

    const soldPropertySeriesAvg = chart.series.push(
      new am4charts.ColumnSeries()
    )
    soldPropertySeriesAvg.data =
      selectedProperty.soldProperty.ageOfPropertiesAvg
    soldPropertySeriesAvg.config = sectionThreeChartConfig.soldPropertySeriesAvg

    const max = Math.max(
      ...[
        ...selectedProperty.ageOfProperties,
        ...comparisonProperty1.ageOfProperties,
        ...comparisonProperty2.ageOfProperties,
        ...selectedProperty.soldProperty.ageOfProperties
      ].map(v => v.value)
    )

    const ageOfPropertySeries = chart.series.push(new am4charts.ColumnSeries())
    ageOfPropertySeries.data = [
      { date: selectedProperty.ageOfProperty, value: max * 1.1 }
    ]
    ageOfPropertySeries.config = sectionThreeChartConfig.ageOfProperty
    const bullet = ageOfPropertySeries.bullets.push(
      new am4charts.CircleBullet()
    )
    bullet.circle.radius = 11
    bullet.circle.strokeWidth = 0
    bullet.circle.fill = am4core.color('#FFF')
    bullet.filters.push(new am4core.DropShadowFilter())

    const image = bullet.createChild(am4core.Image)
    image.href = Home
    image.width = 15
    image.height = 15
    image.horizontalCenter = 'middle'
    image.verticalCenter = 'middle'

    const labelBullet = ageOfPropertySeries.bullets.push(
      new am4charts.LabelBullet()
    )
    labelBullet.label.text = '{date}'
    labelBullet.label.truncate = false
    labelBullet.dx = 30

    return () => {
      chart.dispose()
    }
  }, [])
  return (
    <Container>
      <Info>
        <Title>Age of Properties Across Markets</Title>
        <div>{stats.ageOfProperties}</div>
      </Info>
      <Info>
        <Title>Days on Market</Title>
        <div>{stats.daysOnMarket}</div>
      </Info>
      <ChartTitle>
        <span>Age of Properties Across Markets</span>
        <Legend src={legendAge} />
      </ChartTitle>
      <div
        id={ageOfPropertiesConfig.id}
        style={{ width: '100%', height: ageOfPropertiesConfig.height }}
      ></div>
    </Container>
  )
}

export default AgeOfProperties
