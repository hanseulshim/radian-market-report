import React, { useEffect } from 'react'
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
import styled from 'styled-components'
import config from '../config'
import Text from '../common/Text'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'
// import selectedArrowDown from '../assets/icon_arrow_black_down.svg'
// import selectedArrowUp from '../assets/icon_arrow_black_up.svg'
import { familyMakeupPopulation, propertyInfo } from '../data/data.json'

const Container = styled.div`
  grid-area: chart3;
`

const Title = styled(Text)`
  margin-bottom: 15px;
`

const FamilyMakeupPopulation = () => {
  useEffect(() => {
    const chart = am4core.createFromConfig(
      config.chart(),
      'familyMakeupPopulationChart',
      am4charts.XYChart
    )
    chart.data = familyMakeupPopulation
    chart.chartContainer.paddingBottom = 40
    chart.maskBullets = false

    const categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis())
    categoryAxis.config = config.categoryAxis()
    categoryAxis.renderer.labels.template.adapter.add(
      'text',
      (text, target) => {
        if (target.dataItem.dataContext) {
          return target.dataItem.dataContext.value
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
        }
      }
    )

    const valueAxis = chart.yAxes.push(new am4charts.ValueAxis())
    valueAxis.config = config.valueAxis('min')
    valueAxis.numberFormatter.numberFormat = '#a'

    const series = chart.series.push(new am4charts.ColumnSeries())
    series.dataFields.valueY = 'value'
    series.dataFields.categoryX = 'category'
    series.columns.template.adapter.add('fill', (fill, target) => {
      if (target.dataItem.dataContext && target.dataItem.dataContext.category) {
        return config.getColor(target.dataItem.dataContext.category)
      }
    })
    const labelBullet = series.bullets.push(new am4charts.LabelBullet())
    labelBullet.label.adapter.add('text', (text, target) => {
      if (target.dataItem.dataContext) {
        switch (target.dataItem.dataContext.category) {
          case 'selected':
            return propertyInfo.selected
          case 'comparable1':
            return propertyInfo.comparable1
          case 'comparable2':
            return propertyInfo.comparable2
        }
      }
    })
    labelBullet.label.fill = am4core.color('#fff')
    labelBullet.dy = 10
    labelBullet.verticalCenter = 'bottom'

    // const bullet = series.bullets.push(new am4charts.Bullet())
    // bullet.locationY = 1
    // bullet.zIndex = 2
    // bullet.dy = 24
    // // bullet.dx = -5
    // bullet.layout = 'horizontal'
    // bullet.align = 'center'

    // const icon = bullet.createChild(am4core.Image)
    // icon.nonScaling = true
    // icon.adapter.add('href', (href, target) => {
    // if (target.dataItem.dataContext && target.dataItem.dataContext.category) {
    //   if (target.dataItem.category === 'selected') {
    //     return target.dataItem.delta < 0 ? selectedArrowDown : selectedArrowUp
    //   }
    // }
    // })

    // var label = bullet.createChild(am4core.Label)
    // label.text = '{category}'

    return () => {
      chart.dispose()
    }
  }, [])

  return (
    <Container>
      <Title subCharttitle>Population Across Markets</Title>
      <div
        id={'familyMakeupPopulationChart'}
        style={{ width: '100%', height: 300 }}
      ></div>
    </Container>
  )
}

export default FamilyMakeupPopulation
