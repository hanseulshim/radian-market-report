import React, { useEffect } from 'react'
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
import styled from 'styled-components'
import config from '../config'
import Text from '../common/Text'
import AvgDOMOverTime from '../assets/AvgDOMOverTime.png'

const Legend = styled.img`
  height: 15px;
`

const Container = styled.div`
  grid-area: chart3;
`

const AverageDomOverTime = () => {
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/data.json')
      const data = await res.json()
      const { averageDomOverTime } = data

      const chart = am4core.createFromConfig(
        config.chart(),
        'averageDomOverTimeChart',
        am4charts.XYChart
      )
      chart.data = averageDomOverTime.selected
      chart.id = 'averageDomOverTimeChart'

      const categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis())
      categoryAxis.config = config.categoryAxis('line')

      const valueAxis = chart.yAxes.push(new am4charts.ValueAxis())
      valueAxis.config = config.valueAxis('min')

      const selectedSeries = chart.series.push(new am4charts.LineSeries())
      selectedSeries.data = averageDomOverTime.selected
      selectedSeries.config = config.line('selected', null, 'category')

      const comparable1Series = chart.series.push(new am4charts.LineSeries())
      comparable1Series.data = averageDomOverTime.comparable1
      comparable1Series.config = config.line('comparable1', null, 'category')

      const comparable2Series = chart.series.push(new am4charts.LineSeries())
      comparable2Series.data = averageDomOverTime.comparable2
      comparable2Series.config = config.line('comparable2', null, 'category')

      const selectedSoldSeries = chart.series.push(new am4charts.LineSeries())
      selectedSoldSeries.data = averageDomOverTime.selectedSold
      selectedSoldSeries.config = config.line('selected', 'dash', 'category')

      return () => {
        chart.dispose()
      }
    }
    fetchData()
  }, [])

  return (
    <Container>
      <Text subChartTitle>
        <span>Average DOM Over Time</span>
        <Legend src={AvgDOMOverTime} id="averageDomOverTimeLegend" />
      </Text>
      <div
        id={'averageDomOverTimeChart'}
        style={{ width: '100%', height: 150 }}
      />
    </Container>
  )
}

export default AverageDomOverTime
