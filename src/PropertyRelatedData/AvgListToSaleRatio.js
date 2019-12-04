import React, { useEffect } from 'react'
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
import am4themes_animated from '@amcharts/amcharts4/themes/animated'
import { avgListToSaleRatio } from '../data/propertyData'
am4core.useTheme(am4themes_animated)

const { zipArea, zipBlue, zipYellow } = avgListToSaleRatio

const AvgListToSaleRatio = () => {
  useEffect(() => {
    const chart = am4core.create('avgListToSaleRatioDiv', am4charts.XYChart)

    chart.background.fill = am4core.color('#E5E5E6')

    const label = chart.createChild(am4core.Label)
    label.text = 'Avg List to Sale Ratio'
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
    valueAxis.numberFormatter.numberFormat = '#%'
    valueAxis.renderer.line.strokeOpacity = 1
    valueAxis.renderer.line.strokeWidth = 2

    const series = chart.series.push(new am4charts.LineSeries())
    series.data = zipArea
    series.dataFields.dateX = 'date'
    series.dataFields.valueY = 'price'
    series.strokeWidth = 4
    series.fill = am4core.color('#5B7482')
    series.fillOpacity = 1
    series.stroke = am4core.color('#5B7482')
    series.name = '20854'

    const series1 = chart.series.push(new am4charts.LineSeries())
    series1.data = zipBlue
    series1.dataFields.dateX = 'date'
    series1.dataFields.valueY = 'price'
    series1.strokeWidth = 4
    series1.stroke = am4core.color('#A9DAD2')
    series1.name = '20855'

    const series2 = chart.series.push(new am4charts.LineSeries())
    series2.data = zipYellow
    series2.dataFields.dateX = 'date'
    series2.dataFields.valueY = 'price'
    series2.strokeWidth = 4
    series2.stroke = am4core.color('#FEC847')
    series2.name = '20856'

    return () => {
      chart.dispose()
    }
  }, [])

  return (
    <div
      id="avgListToSaleRatioDiv"
      style={{ width: '100%', height: '500px' }}
    ></div>
  )
}

export default AvgListToSaleRatio
