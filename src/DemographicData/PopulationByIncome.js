import React, { useEffect } from 'react'
import styled from 'styled-components'
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
import { populationByIncome } from '../data/data1.json'
// import Home from '../assets/home.svg'
// import legendAge from '../assets/legendAge.svg'
import config from '../config1'
// import { range } from 'rxjs'

const Container = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  grid-area: chart2;
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

const PopulationByIncome = () => {
  useEffect(() => {
    const chart = am4core.createFromConfig(
      config.chart(),
      'populationByIncomeChart',
      am4charts.XYChart
    )
    chart.data = populationByIncome.selected

    // const categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis())
    // categoryAxis.config = populationByIncomeChartConfig.categoryAxis
    // categoryAxis.title.text = 'Income'
    // categoryAxis.title.fontWeight = 'bold'
    // categoryAxis.renderer.cellStartLocation = 0.2
    // categoryAxis.renderer.cellEndLocation = 0.8

    // const valueAxis = chart.yAxes.push(new am4charts.ValueAxis())
    // valueAxis.config = populationByIncomeChartConfig.valueAxis
    // valueAxis.min = 0

    const categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis())
    categoryAxis.config = config.categoryAxis('line')

    const valueAxis = chart.yAxes.push(new am4charts.ValueAxis())
    valueAxis.config = config.valueAxis('min')
    valueAxis.min = 0

    // const selectedPropertySeries = chart.series.push(new am4charts.LineSeries())
    // selectedPropertySeries.data = selectedProperty.populationByIncome
    // selectedPropertySeries.config =
    //   populationByIncomeChartConfig.selectedProperty
    // selectedPropertySeries.tensionX = 0.75
    // selectedPropertySeries.tensionY = 0.75

    const selectedSeries = chart.series.push(new am4charts.LineSeries())
    selectedSeries.data = populationByIncome.selected
    selectedSeries.config = config.line('selected', null, 'category')
    selectedSeries.tensionX = 0.75
    selectedSeries.tensionY = 0.75

    // const comparisonProperty1Series = chart.series.push(
    //   new am4charts.LineSeries()
    // )
    // comparisonProperty1Series.data = comparisonProperty1.populationByIncome
    // comparisonProperty1Series.config =
    //   populationByIncomeChartConfig.comparisonProperty1
    // comparisonProperty1Series.tensionX = 0.75
    // comparisonProperty1Series.tensionY = 0.75
    const comparable1Series = chart.series.push(new am4charts.LineSeries())
    comparable1Series.data = populationByIncome.comparable1
    comparable1Series.config = config.line('comparable1', null, 'category')
    comparable1Series.tensionX = 0.75
    comparable1Series.tensionY = 0.75

    // const comparisonProperty2Series = chart.series.push(
    //   new am4charts.LineSeries()
    // )
    // comparisonProperty2Series.data = comparisonProperty2.populationByIncome
    // comparisonProperty2Series.config =
    //   populationByIncomeChartConfig.comparisonProperty2
    // comparisonProperty2Series.tensionX = 0.75
    // comparisonProperty2Series.tensionY = 0.75
    const comparable2Series = chart.series.push(new am4charts.LineSeries())
    comparable2Series.data = populationByIncome.comparable2
    comparable2Series.config = config.line('comparable2', null, 'category')
    comparable2Series.tensionX = 0.75
    comparable2Series.tensionY = 0.75

    // Column Series for marking averages

    // const FHA = chart.series.push(new am4charts.ColumnSeries())
    // FHA.data = populationByIncome.selectedFHArange
    // FHA.config = config.bar('FHA')

    return () => {
      chart.dispose()
    }
  }, [])
  return (
    <Container>
      <ChartTitle>
        <span>Population By Income</span>
      </ChartTitle>
      <div
        id={'populationByIncomeChart'}
        style={{ width: '100%', height: 150 }}
      ></div>
    </Container>
  )
}

export default PopulationByIncome
