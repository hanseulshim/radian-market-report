import React, { useEffect } from 'react'
import styled from 'styled-components'
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
import config from '../config1'
import { ageOfProperties } from '../data/data1.json'
import Text from '../common/Text'
import legendDom from '../assets/legendDom.svg'
import Home from '../assets/home.svg'
import { WHITE } from '../colors'

const Legend = styled.img`
  height: 30px;
`

const Container = styled.div`
  grid-area: chart4;
`

const AgeOfProperties = () => {
  useEffect(() => {
    const chart = am4core.createFromConfig(
      config.chart('age'),
      'ageOfPropertiesChart',
      am4charts.XYChart
    )

    const max = Math.max(
      ...[
        ...ageOfProperties.selected,
        ...ageOfProperties.comparable1,
        ...ageOfProperties.comparable2,
        ...ageOfProperties.selectedSold
      ].map(v => v.value)
    )

    const yLabel = chart.createChild(am4core.Label)
    yLabel.text = 'Count'
    yLabel.config = config.label('age')

    const dateAxis = chart.xAxes.push(new am4charts.DateAxis())
    dateAxis.config = config.dateAxis('age')
    dateAxis.title.text = 'Year Built'

    const valueAxis = chart.yAxes.push(new am4charts.ValueAxis())
    valueAxis.config = config.valueAxis('min')
    valueAxis.max = max + 10

    const selectedSeries = chart.series.push(new am4charts.LineSeries())
    selectedSeries.data = ageOfProperties.selected
    selectedSeries.config = config.line('selected', 'filled', 'curved')

    const selectedAvgSeries = chart.series.push(new am4charts.ColumnSeries())
    selectedAvgSeries.data = ageOfProperties.selectedAvg
    selectedAvgSeries.config = config.line('selected', 'column', 'bullet')

    const comparable1Series = chart.series.push(new am4charts.LineSeries())
    comparable1Series.data = ageOfProperties.comparable1
    comparable1Series.config = config.line('comparable1', null, 'curved')

    const comparable1AvgSeries = chart.series.push(new am4charts.ColumnSeries())
    comparable1AvgSeries.data = ageOfProperties.comparable1Avg
    comparable1AvgSeries.config = config.line('comparable1', 'column', 'bullet')

    const comparable2Series = chart.series.push(new am4charts.LineSeries())
    comparable2Series.data = ageOfProperties.comparable2
    comparable2Series.config = config.line('comparable2', null, 'curved')

    const comparable2AvgSeries = chart.series.push(new am4charts.ColumnSeries())
    comparable2AvgSeries.data = ageOfProperties.comparable2Avg
    comparable2AvgSeries.config = config.line('comparable2', 'column', 'bullet')

    const selectedSoldSeries = chart.series.push(new am4charts.LineSeries())
    selectedSoldSeries.data = ageOfProperties.selectedSold
    selectedSoldSeries.config = config.line('selected', 'dash', 'curved')

    const selectedSoldAvgSeries = chart.series.push(new am4charts.ColumnSeries())
    selectedSoldAvgSeries.data = ageOfProperties.selectedSoldAvg
    selectedSoldAvgSeries.config = config.line('selectedSold', 'column', 'bullet')

    const ageOfPropertySeries = chart.series.push(new am4charts.ColumnSeries())
    ageOfPropertySeries.data = [
      { date: ageOfProperties.ageOfSelected, value: max + 10 }
    ]
    ageOfPropertySeries.config = config.line('age', 'column', 'bullet')
    const bullet = ageOfPropertySeries.bullets.push(
      new am4charts.CircleBullet()
    )
    bullet.circle.radius = 15
    bullet.circle.strokeWidth = 0
    bullet.circle.fill = am4core.color(WHITE)
    bullet.filters.push(new am4core.DropShadowFilter())

    const image = bullet.createChild(am4core.Image)
    image.href = Home
    image.width = 20
    image.height = 20
    image.horizontalCenter = 'middle'
    image.verticalCenter = 'middle'

    const labelBullet = ageOfPropertySeries.bullets.push(
      new am4charts.LabelBullet()
    )
    labelBullet.label.text = '{date}'
    labelBullet.label.truncate = false
    labelBullet.dx = 35

    return () => {
      chart.dispose()
    }
  }, [])
  return (
    <Container>
      <Text chartTitle>
        <span>Age of Properties Across Markets</span>
        <Legend src={legendDom} />
      </Text>
      <div id={'ageOfPropertiesChart'} style={{ width: '100%', height: 500 }} />
    </Container>
  )
}

export default AgeOfProperties
