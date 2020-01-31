import React, { useEffect } from 'react'
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
import * as am4plugins_forceDirected from '@amcharts/amcharts4/plugins/forceDirected'
import styled from 'styled-components'
import config from '../config1'
import Text from '../common/Text'
import { inventoryPerDom } from '../data/data1.json'

const Container = styled.div`
  grid-area: chart2;
`

const FamilyMakeup = () => {
  useEffect(() => {
    const chart = am4core.createFromConfig(
      config.chart(),
      'familyMakeupChart',
      am4plugins_forceDirected.ForceDirectedTree
    )

    const series = chart.series.push(
      new am4plugins_forceDirected.ForceDirectedSeries()
    )
    const workstation = 'M0 30l4-8h24l4 8zM4 2v18h24V2H4zm22 16H6V4h20v14z'

    series.data = [
      {
        name: 'First',
        value: 190,
        path: workstation
      },
      {
        name: 'Second',
        value: 289,
        path: workstation
      },
      {
        name: 'Third',
        value: 635,
        path: workstation
      },
      {
        name: 'Fourth',
        value: 732,
        path: workstation
      },
      {
        name: 'Fifth',
        value: 835,
        path: workstation
      }
    ]

    series.dataFields.value = 'value'
    series.dataFields.name = 'name'
    series.minRadius = 5
    series.maxRadius = 60

    // series.nodes.template.label.text = '{name}'
    // series.fontSize = 10
    // series.minRadius = 15
    // series.maxRadius = 40

    const icon = series.nodes.template.createChild(am4core.Sprite)

    icon.propertyFields.path = 'path'
    icon.horizontalCenter = 'middle'
    icon.verticalCenter = 'middle'
    icon.width = am4core.percent(30)
    icon.height = am4core.percent(30)

    // Configure circles
    series.nodes.template.circle.fill = am4core.color('#fff')
    series.nodes.template.circle.fill = am4core.color('#fff')

    // chart.data = inventoryPerDom.selected

    // const categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis())
    // categoryAxis.config = config.categoryAxis()

    // const valueAxis = chart.yAxes.push(new am4charts.ValueAxis())
    // valueAxis.config = config.valueAxis('min')

    // const selectedSeries = chart.series.push(new am4charts.ColumnSeries())
    // selectedSeries.data = inventoryPerDom.selected
    // selectedSeries.config = config.line('selected', 'column', 'category')

    // const comparable1Series = chart.series.push(new am4charts.ColumnSeries())
    // comparable1Series.data = inventoryPerDom.comparable1
    // comparable1Series.config = config.line('comparable1', 'column', 'category')

    // const comparable2Series = chart.series.push(new am4charts.ColumnSeries())
    // comparable2Series.data = inventoryPerDom.comparable2
    // comparable2Series.config = config.line('comparable2', 'column', 'category')

    return () => {
      chart.dispose()
    }
  }, [])

  return (
    <Container>
      <Text subChartTitle>Inventory of Listings per DOM</Text>
      <div
        id={'familyMakeupChart'}
        style={{
          width: 250,
          height: 250,
          border: '1px solid black',
          borderRadius: '50%'
        }}
      ></div>
    </Container>
  )
}

export default FamilyMakeup
