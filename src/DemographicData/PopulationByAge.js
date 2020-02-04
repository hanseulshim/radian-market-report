import React, { useEffect } from 'react'
import styled from 'styled-components'
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
import Text from '../common/Text'
import { propertyInfo, populationByAge } from '../data/data1.json'
import { BRANDY_PUNCH, BLACK, AZURE, NEPTUNE } from '../colors'
import config from '../config1'

const Container = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  grid-area: chart1;
`

const PopulationByAge = () => {
  useEffect(() => {
    const chart = am4core.createFromConfig(
      config.chart(),
      'populationByAgeChart',
      am4charts.XYChart
    )

    chart.paddingBottom = 0

    chart.data = populationByAge.selected.map(v => ({ ...v, valueY: 70 }))

    const categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis())
    categoryAxis.config = config.categoryAxis('bullet')
    categoryAxis.renderer.grid.template.disabled = true
    categoryAxis.renderer.line.strokeOpacity = 0.1

    const valueAxis = chart.yAxes.push(new am4charts.ValueAxis())
    valueAxis.config = config.valueAxis('bullet')
    valueAxis.renderer.labels.template.disabled = true
    valueAxis.renderer.grid.template.disabled = true
    valueAxis.renderer.axisFills.template.disabled = true
    valueAxis.min = 50
    valueAxis.max = 100
    valueAxis.strictMinMax = true

    const series = chart.series.push(new am4charts.ColumnSeries())
    series.dataFields.valueY = 'valueY'
    series.dataFields.value = 'value'
    series.dataFields.categoryX = 'category'
    series.columns.template.disabled = true
    series.sequencedInterpolation = true

    const selectedAvgSeries = chart.series.push(new am4charts.ColumnSeries())
    selectedAvgSeries.data = [{ ...populationByAge.selectedAvg, value: 89 }]
    selectedAvgSeries.config = config.line('selected', 'column', 'vertical')

    const selectedLabel = selectedAvgSeries.bullets.push(new am4charts.LabelBullet())
    selectedLabel.fontSize = 13
    selectedLabel.label.fill = BLACK
    selectedLabel.label.fontWeight = 'bold'
    selectedLabel.label.text = `${propertyInfo.selected} Avg. ${populationByAge.selectedAvg.average} yrs`
    selectedLabel.label.truncate = false
    selectedLabel.label.hideOversized = false
    selectedLabel.label.horizontalCenter = 'left'
    selectedLabel.dx = 5
    selectedLabel.dy = 5

    const comparable1AvgSeries = chart.series.push(new am4charts.ColumnSeries())
    comparable1AvgSeries.data = [{ ...populationByAge.comparable1Avg, value: 99 }]
    comparable1AvgSeries.config = config.line('comparable1', 'column', 'vertical')

    const comparable1Label = comparable1AvgSeries.bullets.push(new am4charts.LabelBullet())
    comparable1Label.fontSize = 13
    comparable1Label.label.fill = AZURE
    comparable1Label.label.fontWeight = 'bold'
    comparable1Label.label.text = `${propertyInfo.comparable1} Avg. ${populationByAge.comparable1Avg.average} yrs`
    comparable1Label.label.truncate = false
    comparable1Label.label.hideOversized = false
    comparable1Label.label.horizontalCenter = 'left'
    comparable1Label.dx = 5
    comparable1Label.dy = 5

    const comparable2AvgSeries = chart.series.push(new am4charts.ColumnSeries())
    comparable2AvgSeries.data = [{ ...populationByAge.comparable2Avg, value: 94 }]
    comparable2AvgSeries.config = config.line('comparable2', 'column', 'vertical')

    const comparable2Label = comparable2AvgSeries.bullets.push(new am4charts.LabelBullet())
    comparable2Label.fontSize = 13
    comparable2Label.label.fill = NEPTUNE
    comparable2Label.label.fontWeight = 'bold'
    comparable2Label.label.text = `${propertyInfo.comparable2} Avg. ${populationByAge.comparable2Avg.average} yrs`
    comparable2Label.label.truncate = false
    comparable2Label.label.hideOversized = false
    comparable2Label.label.horizontalCenter = 'left'
    comparable2Label.dx = 5
    comparable2Label.dy = 5

    const bullet = series.bullets.push(new am4core.Circle())
    bullet.strokeWidth = 3
    bullet.stroke = am4core.color(BRANDY_PUNCH)
    bullet.fill = am4core.color(BRANDY_PUNCH)
    bullet.strokeOpacity = 0
    bullet.fillOpacity = 0.5

    series.heatRules.push({
      property: 'radius',
      target: bullet,
      min: 5,
      max: 50
    })

    bullet.hiddenState.properties.scale = 0.01
    bullet.hiddenState.properties.opacity = 0.5

    return () => {
      chart.dispose()
    }
  }, [])
  return (
    <Container>
      <Text chartTitle>{propertyInfo.selected} Population by Age</Text>
      <div
        id={'populationByAgeChart'}
        style={{ width: '100%', height: 200 }}
      ></div>
    </Container>
  )
}

export default PopulationByAge
