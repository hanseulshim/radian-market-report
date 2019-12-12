import React, { useEffect } from 'react'
import styled from 'styled-components'
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
import { propertyData } from '../data/data.json'
import config from '../config'

const { ageOfPropertiesConfig, sectionThreeChartConfig } = config

const {
  selectedProperty,
  comparisonProperty1,
  comparisonProperty2,
  stats,
  soldProperty
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

const AgeOfProperties = () => {
  useEffect(() => {
    const chart = am4core.createFromConfig(
      sectionThreeChartConfig.chart,
      ageOfPropertiesConfig.id,
      am4charts.XYChart
    )

    chart.id = ageOfPropertiesConfig.id

    const label = chart.createChild(am4core.Label)
    label.text = ageOfPropertiesConfig.title
    label.config = sectionThreeChartConfig.label

    const categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis())
    categoryAxis.config = sectionThreeChartConfig.categoryAxis

    const valueAxis = chart.yAxes.push(new am4charts.ValueAxis())
    valueAxis.config = sectionThreeChartConfig.valueAxis
    valueAxis.min = 0

    chart.data = selectedProperty.ageOfProperties
    const selectedPropertySeries = chart.series.push(new am4charts.LineSeries())
    selectedPropertySeries.config = sectionThreeChartConfig.selectedProperty
    selectedPropertySeries.tensionX = 0.75
    selectedPropertySeries.tensionY = 0.75

    // const comparisonProperty1Series = chart.series.push(
    //   new am4charts.LineSeries()
    // )
    // comparisonProperty1Series.data = comparisonProperty1.inventory
    // comparisonProperty1Series.config = sectionOneChartConfig.comparisonProperty1
    // const comparisonProperty2Series = chart.series.push(
    //   new am4charts.LineSeries()
    // )
    // comparisonProperty2Series.data = comparisonProperty2.inventory
    // comparisonProperty2Series.config = sectionOneChartConfig.comparisonProperty2
    // const soldProperties = chart.series.push(new am4charts.LineSeries())
    // soldProperties.data = soldProperty.inventory
    // soldProperties.config = sectionOneChartConfig.soldProperties

    return () => {
      chart.dispose()
    }
  }, [])
  return (
    <Container>
      <Info>
        <Title>Age of Peroperties Across Markets</Title>
        <div>{stats.ageOfProperties}</div>
      </Info>
      <Info>
        <Title>Days on Market</Title>
        <div>{stats.daysOnMarket}</div>
      </Info>
      <div
        id={ageOfPropertiesConfig.id}
        style={{ width: '100%', height: ageOfPropertiesConfig.height }}
      ></div>
    </Container>
  )
}

export default AgeOfProperties
