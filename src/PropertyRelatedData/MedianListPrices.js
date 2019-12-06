import React, { useEffect } from 'react'
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
import am4themesAnimated from '@amcharts/amcharts4/themes/animated'
import { medianListPricesData } from '../data/propertyData'
import home from '../assets/home.svg'
am4core.useTheme(am4themesAnimated)

const {
  zipSelected,
  zipComparison1,
  zipComparison2,
  sold,
  selectedProperty
} = medianListPricesData

const MedianListPrices = () => {
  useEffect(() => {
    const chart = am4core.create('medianListPriceDiv', am4charts.XYChart)

    const label = chart.createChild(am4core.Label)
    label.text = 'Median List Prices'
    label.fontSize = 15
    label.align = 'center'
    label.isMeasured = false
    label.x = 75
    label.y = 10

    const dateAxis = chart.xAxes.push(new am4charts.DateAxis())
    dateAxis.dateFormats.setKey('month', 'MMM')
    dateAxis.periodChangeDateFormats.setKey('month', 'YY MMM')
    dateAxis.renderer.minGridDistance = 50
    dateAxis.renderer.grid.template.location = 0.5
    dateAxis.startLocation = 0.5
    dateAxis.endLocation = 0.5
    dateAxis.paddingRight = 20

    const valueAxis = chart.yAxes.push(new am4charts.ValueAxis())
    valueAxis.renderer.minGridDistance = 50
    valueAxis.numberFormatter = new am4core.NumberFormatter()
    valueAxis.numberFormatter.numberFormat = '$#a'
    valueAxis.renderer.line.strokeOpacity = 1
    valueAxis.renderer.line.strokeWidth = 2

    const series = chart.series.push(new am4charts.LineSeries())
    series.data = zipSelected
    series.dataFields.dateX = 'date'
    series.dataFields.valueY = 'price'
    series.strokeWidth = 4
    series.fill = am4core.color('#5B7482')
    series.fillOpacity = 1
    series.stroke = am4core.color('#5B7482')
    series.name = '20854'

    const series1 = chart.series.push(new am4charts.LineSeries())
    series1.data = zipComparison1
    series1.dataFields.dateX = 'date'
    series1.dataFields.valueY = 'price'
    series1.strokeWidth = 4
    series1.stroke = am4core.color('#A9DAD2')
    series1.name = '20855'

    const series2 = chart.series.push(new am4charts.LineSeries())
    series2.data = zipComparison2
    series2.dataFields.dateX = 'date'
    series2.dataFields.valueY = 'price'
    series2.strokeWidth = 4
    series2.stroke = am4core.color('#FEC847')
    series2.name = '20856'

    const series3 = chart.series.push(new am4charts.LineSeries())
    series3.data = sold
    series3.dataFields.dateX = 'date'
    series3.dataFields.valueY = 'price'
    series3.strokeWidth = 4
    series3.strokeDasharray = '4, 4'
    series3.stroke = am4core.color('#000000')
    series3.name = 'Sold (Last # Months)'

    const series4 = chart.series.push(new am4charts.LineSeries())
    series4.data = selectedProperty
    series4.dataFields.dateX = 'date'
    series4.dataFields.valueY = 'price'
    series4.strokeWidth = 4
    series4.stroke = am4core.color('#000000')
    series4.name = 'Home'

    const bullet = series4.bullets.push(new am4charts.CircleBullet())
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
      id="medianListPriceDiv"
      style={{ width: '100%', height: '500px' }}
    ></div>
  )
}

export default MedianListPrices
