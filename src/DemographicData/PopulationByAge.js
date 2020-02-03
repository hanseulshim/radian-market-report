import React, { useEffect } from 'react'
import styled from 'styled-components'
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
import { populationByAge } from '../data/data1.json'
import config from '../config1'

const Container = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  grid-area: chart1;
`

const ChartTitle = styled.div`
  font-weight: bold;
  font-size: 150%;
  border-bottom: 1px solid #000;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`

const PopulationByAge = () => {
  useEffect(() => {
    const chart = am4core.createFromConfig(
      config.chart(),
      'populationByAgeChart',
      am4charts.XYChart
    )

    chart.data = populationByAge.categories

    const categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis())
    categoryAxis.config = config.categoryAxis('bullet')

    const valueAxis = chart.yAxes.push(new am4charts.ValueAxis())
    valueAxis.config = config.valueAxis('bullet')

    var series = chart.series.push(new am4charts.ColumnSeries())
    series.dataFields.valueY = 'valueY'
    series.dataFields.value = 'value'
    series.dataFields.categoryX = 'category'
    series.columns.template.disabled = true
    series.sequencedInterpolation = true

    var bullet = series.bullets.push(new am4core.Circle())
    bullet.strokeWidth = 3
    bullet.stroke = am4core.color('#D27C30')
    bullet.fill = am4core.color('#D27C30')
    bullet.strokeOpacity = 0
    bullet.fillOpacity = 0.5

    series.heatRules.push({
      property: 'radius',
      target: bullet,
      min: 2,
      max: 40
    })

    bullet.hiddenState.properties.scale = 0.01
    bullet.hiddenState.properties.opacity = 0.5

    return () => {
      chart.dispose()
    }
  }, [])
  return (
    <Container>
      <ChartTitle>
        <span>Population By Age</span>
      </ChartTitle>
      <div
        id={'populationByAgeChart'}
        style={{ width: '100%', height: 150 }}
      ></div>
    </Container>
  )
}

export default PopulationByAge
