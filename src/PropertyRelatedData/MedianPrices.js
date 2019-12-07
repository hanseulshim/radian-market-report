import React, { useEffect } from 'react'
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
import am4themesAnimated from '@amcharts/amcharts4/themes/animated'
import { medianPricesData } from '../data/propertyData'
import home from '../assets/home.svg'
import config from '../config'
am4core.useTheme(am4themesAnimated)

const {
  selectedProperty,
  zipComparison1,
  zipComparison2,
  sold,
  selectedPropertyHome
} = medianPricesData

const { medianPricesConfig, sectionOneChartConfig } = config

const MedianPrices = () => {
  useEffect(() => {
    const chart = am4core.create('medianPricesDiv', am4charts.XYChart)

    const label = chart.createChild(am4core.Label)
    label.text = medianPricesConfig.title
    label.config = sectionOneChartConfig.label

    const dateAxis = chart.xAxes.push(new am4charts.DateAxis())
    dateAxis.config = sectionOneChartConfig.dateAxis

    const valueAxis = chart.yAxes.push(new am4charts.ValueAxis())
    valueAxis.config = sectionOneChartConfig.valueAxis
    valueAxis.numberFormatter.numberFormat = '$#a'

    const selectedPropertySeries = chart.series.push(new am4charts.LineSeries())
    selectedPropertySeries.data = selectedProperty
    selectedPropertySeries.config = sectionOneChartConfig.selectedProperty

    const comparisonProperty1 = chart.series.push(new am4charts.LineSeries())
    comparisonProperty1.data = zipComparison1
    comparisonProperty1.config = sectionOneChartConfig.comparisonProperty1

    const comparisonProperty2 = chart.series.push(new am4charts.LineSeries())
    comparisonProperty2.data = zipComparison2
    comparisonProperty2.config = sectionOneChartConfig.comparisonProperty2

    const soldProperties = chart.series.push(new am4charts.LineSeries())
    soldProperties.data = sold
    soldProperties.config = sectionOneChartConfig.soldProperties

    const iconSeries = chart.series.push(new am4charts.LineSeries())
    iconSeries.data = selectedPropertyHome
    iconSeries.dataFields.dateX = 'date'
    iconSeries.dataFields.valueY = 'price'
    iconSeries.strokeWidth = 4
    iconSeries.stroke = am4core.color('#000000')
    iconSeries.name = 'Home'

    const bullet = iconSeries.bullets.push(new am4charts.CircleBullet())
    bullet.circle.radius = 15
    bullet.circle.fill = am4core.color('#000000')
    const image = bullet.createChild(am4core.Image)
    image.href = home
    image.width = 20
    image.height = 20
    image.horizontalCenter = 'middle'
    image.verticalCenter = 'middle'

    return () => {
      chart.dispose()
    }
  }, [])

  return (
    <div
      id={medianPricesConfig.id}
      style={{ width: '100%', height: medianPricesConfig.height }}
    ></div>
  )
}

export default MedianPrices
