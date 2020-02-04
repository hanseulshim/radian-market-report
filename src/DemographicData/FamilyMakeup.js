import React, { useEffect } from 'react'
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
// eslint-disable-next-line camelcase
import * as am4plugins_forceDirected from '@amcharts/amcharts4/plugins/forceDirected'
import styled from 'styled-components'
import config from '../config1'
import Text from '../common/Text'
import { familyMakeup } from '../data/data1.json'
import { BLACK, DESERT_STORM, NEPTUNE, AZURE, WHITE } from '../colors'
import { hex2rgba } from '../helper'

const Container = styled.div`
  grid-area: chart4;
`
const Chart = styled.div`
  width: 250px;
  height: 250px;
  background-color: ${props => hex2rgba(NEPTUNE, 0.3)};
  border-radius: 50%;
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

    series.data = familyMakeup.selected
    series.dataFields.value = 'value'
    series.dataFields.name = 'name'
    series.minRadius = 20
    series.maxRadius = 55

    const icon = series.nodes.template.createChild(am4core.Image)

    icon.horizontalCenter = 'middle'
    icon.verticalCenter = 'middle'
    icon.adapter.add('pixelHeight', (pixelHeight, target) => {
      if (target.dataItem && target.dataItem.value > 0.1) {
        return target.dataItem.value * 100
      } else return 20
    })
    icon.adapter.add('href', (href, target) => {
      if (target.dataItem.dataContext && target.dataItem.dataContext.category) {
        if (target.dataItem.dataContext.category === 'single') {
          return 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Person_icon_BLACK-01.svg'
        }
        if (target.dataItem.dataContext.category === 'couple') {
          return 'https://cdn.onlinewebfonts.com/svg/img_572706.png'
        }
      }
    })

    // Configure circles
    series.nodes.template.circle.fill = am4core.color(hex2rgba(NEPTUNE))
    series.nodes.template.propertyFields.fillOpacity = 'value'
    series.nodes.template.outerCircle.disabled = true
    series.nodes.template.circle.stroke = am4core.color(hex2rgba(NEPTUNE, 0.9))

    return () => {
      chart.dispose()
    }
  }, [])

  return (
    <Container>
      <Chart id={'familyMakeupChart'}></Chart>
      <Text subChartTitle>20854</Text>
    </Container>
  )
}

export default FamilyMakeup
