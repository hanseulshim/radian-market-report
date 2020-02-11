import React, { useEffect } from 'react'
import styled from 'styled-components'
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
import config from '../config'
import Text from '../common/Text'
import { BLACK } from '../colors'
import PopulationAgeVsIncome from '../assets/PopulationAgeVsIncome.png'

const Legend = styled.img`
  height: 15px;
`

const Container = styled.div`
  grid-area: chart2;
`

const ChartTitle = styled(Text)`
  margin-left: 10px;
`

const PopulationOfAgeVsIncome = () => {
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/data.json')
      const data = await res.json()
      const { populationOfAgeVsIncome } = data

      const chart = am4core.createFromConfig(
        config.chart('age'),
        'populationByIncomeChart',
        am4charts.XYChart
      )
      chart.id = 'ageVsIncomeChart'

      const max = Math.max(
        ...[
          ...populationOfAgeVsIncome.selected,
          ...populationOfAgeVsIncome.comparable1,
          ...populationOfAgeVsIncome.comparable2
        ].map(v => v.value)
      )

      chart.data = populationOfAgeVsIncome.selected

      const categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis())
      categoryAxis.config = config.categoryAxis('line')
      categoryAxis.title.text = 'Income'

      const valueAxis = chart.yAxes.push(new am4charts.ValueAxis())
      valueAxis.config = config.valueAxis('percent')
      valueAxis.min = 0

      const selectedSeries = chart.series.push(new am4charts.LineSeries())
      selectedSeries.data = populationOfAgeVsIncome.selected
      selectedSeries.config = config.line('selected', 'filled', 'curvedVert')

      const comparable1Series = chart.series.push(new am4charts.LineSeries())
      comparable1Series.data = populationOfAgeVsIncome.comparable1
      comparable1Series.config = config.line('comparable1', null, 'curvedVert')

      const comparable2Series = chart.series.push(new am4charts.LineSeries())
      comparable2Series.data = populationOfAgeVsIncome.comparable2
      comparable2Series.config = config.line('comparable2', null, 'curvedVert')

      const selectedSoldSeries = chart.series.push(new am4charts.LineSeries())
      selectedSoldSeries.data = populationOfAgeVsIncome.selectedSold
      selectedSoldSeries.config = config.line('selected', 'dash', 'curvedVert')

      const fhaSeries = chart.series.push(new am4charts.ColumnSeries())
      fhaSeries.data = [{ ...populationOfAgeVsIncome.fha, value: max + 0.1 }]
      fhaSeries.config = config.line('selected', 'column', 'vertical1')

      const fhaLabel = fhaSeries.bullets.push(new am4charts.LabelBullet())
      fhaLabel.fontSize = 13
      fhaLabel.label.fill = BLACK
      fhaLabel.label.fontWeight = 'bold'
      fhaLabel.label.text = `$${populationOfAgeVsIncome.fha.category} FHA`
      fhaLabel.label.truncate = false
      fhaLabel.label.hideOversized = false
      fhaLabel.label.horizontalCenter = 'left'
      fhaLabel.dx = 5
      fhaLabel.dy = 5

      const conventionalSeries = chart.series.push(new am4charts.ColumnSeries())
      conventionalSeries.data = [
        { ...populationOfAgeVsIncome.conventional, value: max + 0.075 }
      ]
      conventionalSeries.config = config.line('selected', 'column', 'vertical1')

      const conventionalLabel = conventionalSeries.bullets.push(
        new am4charts.LabelBullet()
      )
      conventionalLabel.fontSize = 13
      conventionalLabel.label.fill = BLACK
      conventionalLabel.label.fontWeight = 'bold'
      conventionalLabel.label.text = `$${populationOfAgeVsIncome.conventional.category} Conventional`
      conventionalLabel.label.truncate = false
      conventionalLabel.label.hideOversized = false
      conventionalLabel.label.horizontalCenter = 'left'
      conventionalLabel.dx = 5
      conventionalLabel.dy = 5

      const avgIncomeSeries = chart.series.push(new am4charts.ColumnSeries())
      avgIncomeSeries.data = [
        { ...populationOfAgeVsIncome.avgIncome, value: max + 0.05 }
      ]
      avgIncomeSeries.config = config.line('selected', 'column', 'vertical1')

      const avgIncomeLabel = avgIncomeSeries.bullets.push(
        new am4charts.LabelBullet()
      )
      avgIncomeLabel.fontSize = 13
      avgIncomeLabel.label.fill = BLACK
      avgIncomeLabel.label.fontWeight = 'bold'
      avgIncomeLabel.label.text = `$${populationOfAgeVsIncome.avgIncome.category} Avg Income`
      avgIncomeLabel.label.truncate = false
      avgIncomeLabel.label.hideOversized = false
      avgIncomeLabel.label.horizontalCenter = 'left'
      avgIncomeLabel.dx = 5
      avgIncomeLabel.dy = 5

      return () => {
        chart.dispose()
      }
    }
    fetchData()
  }, [])
  return (
    <Container>
      <ChartTitle chartTitle>
        <span>Population of Age vs Income</span>
        <Legend src={PopulationAgeVsIncome} id="ageVsIncomeLegend" />
      </ChartTitle>
      <div
        id={'populationByIncomeChart'}
        style={{ width: '100%', height: 400 }}
      />
    </Container>
  )
}

export default PopulationOfAgeVsIncome
