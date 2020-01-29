import React, { useEffect } from 'react'
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
import styled from 'styled-components'
import config from '../config1'
import { avgHpiBySqFt, propertyInfo } from '../data/data1.json'
import { DESERT_STORM } from '../colors'

const Container = styled.div`
  grid-area: chart5;
  background: ${DESERT_STORM};
`
const AvgHpiBySqFt = () => {
  useEffect(() => {
    const chart = am4core.createFromConfig(
      config.chart('section2'),
      'avgHpiBySqFtChart',
      am4charts.XYChart
    )

    chart.legend = new am4charts.Legend()
    chart.legend.parent = chart.tooltipContainer
    chart.legend.config = config.legend()
    chart.legend.labels.template.marginLeft = -50
    chart.legend.markers.template.dx = -7
    chart.legend.markers.template.width = 40

    const label = chart.createChild(am4core.Label)
    label.config = config.label('section2')
    label.text = `Avg ${propertyInfo.selected} HPI by Sq Ft`

    const dateAxis = chart.xAxes.push(new am4charts.DateAxis())
    dateAxis.config = config.dateAxis('section2')

    const valueAxis = chart.yAxes.push(new am4charts.ValueAxis())
    valueAxis.config = config.valueAxis('min')

    const series1 = chart.series.push(new am4charts.LineSeries())
    series1.name = '2.5-3k'
    series1.data = avgHpiBySqFt.sqFt1
    series1.config = config.line('series1')

    const series2 = chart.series.push(new am4charts.LineSeries())
    series2.name = '3-3.5k'
    series2.data = avgHpiBySqFt.sqFt2
    series2.config = config.line('series2')

    const series3 = chart.series.push(new am4charts.LineSeries())
    series3.name = '3.5-4k'
    series3.data = avgHpiBySqFt.sqFt3
    series3.config = config.line('series3')

    const series4 = chart.series.push(new am4charts.LineSeries())
    series4.name = '4.5-5k'
    series4.data = avgHpiBySqFt.sqFt4
    series4.config = config.line('series4')

    return () => {
      chart.dispose()
    }
  }, [])

  return (
    <Container
      id={'avgHpiBySqFtChart'}
      style={{ width: '100%', height: 300 }}
    />
  )
}

export default AvgHpiBySqFt
