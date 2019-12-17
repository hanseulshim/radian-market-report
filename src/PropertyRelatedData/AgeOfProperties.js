import React, { useEffect } from 'react'
import styled from 'styled-components'
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
import { propertyData } from '../data/data.json'
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

const AgeOfProperties = () => {
  useEffect(() => {
    const chart = am4core.createFromConfig(
      sectionOneChartConfig.chart,
      ageOfPropertiesConfig.id,
      am4charts.XYChart
    )

    chart.id = ageOfPropertiesConfig.id

    const label = chart.createChild(am4core.Label)
    label.text = ageOfPropertiesConfig.title
    label.config = sectionOneChartConfig.label

    const dateAxis = chart.xAxes.push(new am4charts.DateAxis())
    dateAxis.config = sectionOneChartConfig.dateAxis

    const valueAxis = chart.yAxes.push(new am4charts.ValueAxis())
    valueAxis.config = sectionOneChartConfig.valueAxis
    valueAxis.min = 0

    const selectedPropertySeries = chart.series.push(new am4charts.LineSeries())
    selectedPropertySeries.data = selectedProperty.ageOfProperties
    selectedPropertySeries.config = sectionOneChartConfig.selectedProperty
    selectedPropertySeries.tensionX = 0.75
    selectedPropertySeries.tensionY = 0.75

    const selectedPropertySeriesAvg = chart.series.push(
      new am4charts.LineSeries()
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
      new am4charts.LineSeries()
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
      new am4charts.LineSeries()
    )
    comparisonProperty2SeriesAvg.data = comparisonProperty2.ageOfPropertiesAvg
    comparisonProperty2SeriesAvg.config =
      sectionThreeChartConfig.comparisonProperty2SeriesAvg

    const soldPropertySeries = chart.series.push(new am4charts.LineSeries())
    soldPropertySeries.data = selectedProperty.soldProperty.ageOfProperties
    soldPropertySeries.config = sectionOneChartConfig.soldProperty
    soldPropertySeries.tensionX = 0.75
    soldPropertySeries.tensionY = 0.75

    const soldPropertySeriesAvg = chart.series.push(new am4charts.LineSeries())
    soldPropertySeriesAvg.data =
      selectedProperty.soldProperty.ageOfPropertiesAvg
    soldPropertySeriesAvg.config = sectionThreeChartConfig.soldPropertySeriesAvg

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
