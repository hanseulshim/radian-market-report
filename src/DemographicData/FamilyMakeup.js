import React, { useEffect } from 'react'
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
// eslint-disable-next-line camelcase
import * as am4plugins_forceDirected from '@amcharts/amcharts4/plugins/forceDirected'
import styled from 'styled-components'
import config from '../config'
import Text from '../common/Text'
import { familyMakeup, propertyInfo } from '../data/data.json'
import { BLACK, DESERT_STORM, NEPTUNE, AZURE, WHITE } from '../colors'
import { hex2rgba } from '../helper'

const Container = styled.div`
  grid-area: chart4;
  display: flex;
`

const ChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Chart = styled.div`
  width: 250px;
  height: 250px;
  position:relative
  background-color: ${props =>
    props.id === 'selectedFamilyMakeupChart'
      ? hex2rgba(BLACK, 0.2)
      : props.id === 'comparable1FamilyMakeupChart'
      ? hex2rgba(AZURE, 0.2)
      : props.id === 'comparable2FamilyMakeupChart'
      ? hex2rgba(NEPTUNE, 0.2)
      : ''};
  border-radius: 50%;
  > span {
    position:absolute;
    bottom:0
  }
`

const FamilyMakeup = () => {
  useEffect(() => {
    Object.keys(familyMakeup).map(zip => {
      const bubbleConfig = config.getBubbleConfig(zip)

      const chart = am4core.createFromConfig(
        config.chart(),
        bubbleConfig.divId,
        am4plugins_forceDirected.ForceDirectedTree
      )
      const series = chart.series.push(
        new am4plugins_forceDirected.ForceDirectedSeries()
      )

      series.data = familyMakeup[zip]
      series.dataFields.value = 'value'
      series.dataFields.name = 'name'
      series.minRadius = 20
      series.maxRadius = 55

      const icon = series.nodes.template.createChild(am4core.Image)
      icon.horizontalCenter = 'middle'
      icon.verticalCenter = 'middle'

      // Add adapter functions for dynamic icon images and sizes
      icon.adapter.add('pixelHeight', (pixelHeight, target) => {
        if (target.dataItem && target.dataItem.value > 0.1) {
          return target.dataItem.value * 120
        } else return 20
      })
      icon.adapter.add('href', (href, target) => {
        if (
          target.dataItem.dataContext &&
          target.dataItem.dataContext.category
        ) {
          switch (target.dataItem.dataContext.category) {
            case 'single':
              return 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Person_icon_BLACK-01.svg'
            case 'couple':
              return 'https://cdn.onlinewebfonts.com/svg/img_572706.png'
            default:
              return 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Person_icon_BLACK-01.svg'
          }
        }
      })

      // Configure circles. Fill Opacity is linked to value in data
      series.nodes.template.circle.fill = am4core.color(
        hex2rgba(bubbleConfig.color)
      )
      series.nodes.template.adapter.add(
        'fillOpacity',
        (fillOpacity, target) => {
          if (target.dataItem.dataContext && target.dataItem.value > 0.1) {
            return target.dataItem.value * 1.5
          } else return 0.2
        }
      )
      series.nodes.template.outerCircle.disabled = true
      series.nodes.template.circle.stroke = am4core.color(
        hex2rgba(bubbleConfig.color)
      )
      series.nodes.template.propertyFields.strokeOpacity = 'value'
      series.nodes.template.outerCircle.stroke = false

      return () => {
        chart.dispose()
      }
    })
  }, [])

  return (
    <Container>
      <ChartContainer>
        <Chart id={'selectedFamilyMakeupChart'} />
        <Text subChartTitle style={{ marginLeft: '0' }}>
          {propertyInfo.selected}
        </Text>
      </ChartContainer>
      <ChartContainer>
        <Chart id={'comparable1FamilyMakeupChart'} />
        <Text subChartTitle style={{ marginLeft: '0' }}>
          {propertyInfo.comparable1}
        </Text>
      </ChartContainer>
      <ChartContainer>
        <Chart id={'comparable2FamilyMakeupChart'} />
        <Text subChartTitle style={{ marginLeft: '0' }}>
          {propertyInfo.comparable2}
        </Text>
      </ChartContainer>
    </Container>
  )
}

export default FamilyMakeup
