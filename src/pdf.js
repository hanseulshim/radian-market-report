import JSPDF from 'jspdf'
import moment from 'moment'
import numeral from 'numeral'
import html2canvas from 'html2canvas'
import * as am4core from '@amcharts/amcharts4/core'
import { propertyInfo, stats } from './data/data.json'
import * as colors from './colors'
import ActiveListingsSold from './assets/ActiveListingsSold.svg'
// import { Roboto, RobotoBold } from './fonts'
import config from './config'

export const buildPDF = async () => {
  const doc = new JSPDF('p', 'mm', 'a4')
  // doc.addFileToVFS('Roboto-Regular.ttf', Roboto)
  // doc.addFileToVFS('Roboto-Bold.ttf', RobotoBold)
  // doc.addFont('Roboto-Regular.ttf', 'Roboto', 'normal')
  // doc.addFont('Roboto-Bold.ttf', 'Roboto', 'bold')
  // doc.setFont('Roboto')

  // // Helpers
  const width = doc.internal.pageSize.width
  const headerht = 35
  const greyBG = (240, 240, 240)
  const margin = 10
  const quarter = width / 4
  const third = width / 3
  const half = width / 2
  const h1 = 20
  const h2 = 18
  const h3 = 14
  const p = 8
  const chartTitle = 12
  const selectedColor = colors.BLACK
  const comp1Color = colors.AZURE
  const comp2Color = colors.NEPTUNE

  // // Dynamic Fields
  const date = moment().format('MMMM DD, YYYY')
  const shortenedDate = date => moment(date).format('MMMM YYYY')

  const selected = propertyInfo.selected.toString()
  const comp1 = propertyInfo.comparable1.toString()
  const comp2 = propertyInfo.comparable2.toString()

  /// /////////// Page 1 /////////////////

  const twoColumns = half + 15
  const statsTableStart = 62.5
  const chartColumnStart = 60

  // Document Header
  doc.setFillColor(greyBG)
  doc.rect(0, 0, width, headerht, 'F')
  doc.setFontSize(h3)
  doc.text('Market Report', margin, 15)
  doc.setFontSize(h1)
  doc.text('Property Related Data', margin, 25)

  // Header Legend
  doc.setFontSize(p)
  doc.setTextColor(colors.WHITE)
  doc.setFillColor(selectedColor)
  doc.rect(width * 0.7, 10, quarter, 5, 'F')
  doc.text('Your Market', width * 0.7 + 2, 13)
  doc.text(selected, width - margin * 2, 13)
  doc.setFillColor(comp1Color)
  doc.rect(width * 0.7, 16, quarter, 5, 'F')
  doc.text('Comparable 1', width * 0.7 + 2, 19.5)
  doc.text(comp1, width - margin * 2, 19.5)
  doc.setFillColor(comp2Color)
  doc.rect(width * 0.7, 22, quarter, 5, 'F')
  doc.setTextColor(colors.BLACK)
  doc.text('Comparable 2', width * 0.7 + 2, 25.5)
  doc.text(comp2, width - margin * 2, 25.5)
  doc.text('Comparables = 3BR, 2.5BT, 2600sqft, etc', width * 0.7, 30)

  // Sub Title
  doc.setFontSize(h2)
  doc.setFontStyle('bold')
  doc.text('How Your Market Stacks Up Against the Rest', margin, 50)

  // Table Header
  doc.setFontSize(h3)
  doc.text(shortenedDate(stats.date), margin, 60)

  // Table
  doc.setDrawColor(colors.DUSTY_GRAY)
  doc.setFillColor(colors.BLACK)
  doc.rect(margin, statsTableStart, third - margin, 12, 'F')
  doc.setTextColor(colors.WHITE)
  doc.setFontSize(p)
  doc.setFontStyle('normal')
  doc.text(stats.address, margin + 2, statsTableStart + 5.5)
  doc.text(
    `${stats.city}, ${stats.state} ${stats.zip}`,
    margin + 2,
    statsTableStart + 9
  )
  doc.setFontStyle('bold')
  doc.setFontSize(h3)
  doc.text(
    `$${numeral(stats.price).format('0a')}`,
    margin + 40,
    statsTableStart + 7.5
  )
  // Grey area of Table
  doc.setFillColor(greyBG)
  doc.rect(margin, statsTableStart + 12, third - margin, 80, 'F')
  // Stats Table column headers
  const column1 = margin + 21.5
  const column2 = margin + 35
  const column3 = margin + 48.5
  doc.setFillColor(colors.BLACK)
  doc.setFontStyle('normal')
  doc.rect(margin + 20, statsTableStart + 16, 12.5, 5, 'F')
  doc.setFontSize(p)
  doc.text(selected, column1, statsTableStart + 19)
  doc.setFillColor(colors.AZURE)
  doc.rect(margin + 33.5, statsTableStart + 16, 12.5, 5, 'F')
  doc.text(comp1, column2, statsTableStart + 19)
  doc.setFillColor(colors.NEPTUNE)
  doc.setTextColor(colors.BLACK)
  doc.rect(margin + 47, statsTableStart + 16, 12.5, 5, 'F')
  doc.text(comp2, column3, statsTableStart + 19)
  doc.line(margin + 1, statsTableStart + 22, third, statsTableStart + 22)
  // Stats Table Rows : Row 1
  doc.text('Avg. Listed Price', margin + 2, statsTableStart + 26, {
    maxWidth: margin + 5
  })
  doc.text(
    `$${numeral(stats.selected.avgListedPrice).format('0a')}`,
    column1,
    statsTableStart + 28
  )
  doc.text(
    `$${numeral(stats.comparable1.avgListedPrice).format('0a')}`,
    column2,
    statsTableStart + 28
  )
  doc.text(
    `$${numeral(stats.comparable2.avgListedPrice).format('0a')}`,
    column3,
    statsTableStart + 28
  )
  doc.line(margin + 1, statsTableStart + 31, third, statsTableStart + 31)

  // Stats Table Rows : Row 2
  doc.text('Avg. Sold Price', margin + 2, statsTableStart + 34, {
    maxWidth: margin + 5
  })
  doc.text(
    `$${numeral(stats.selected.avgSoldPrice).format('0a')}`,
    column1,
    statsTableStart + 36
  )
  doc.text(
    `$${numeral(stats.comparable1.avgSoldPrice).format('0a')}`,
    column2,
    statsTableStart + 36
  )
  doc.text(
    `$${numeral(stats.comparable2.avgSoldPrice).format('0a')}`,
    column3,
    statsTableStart + 36
  )
  doc.line(margin + 1, statsTableStart + 39, third, statsTableStart + 39)

  // Stats Table Rows : Row 3
  doc.text('Active Inventory', margin + 2, statsTableStart + 42, {
    maxWidth: margin + 5
  })
  doc.text(
    stats.selected.activeInventory.toString(),
    column1,
    statsTableStart + 44
  )
  doc.text(
    stats.comparable1.activeInventory.toString(),
    column2,
    statsTableStart + 44
  )
  doc.text(
    stats.comparable2.activeInventory.toString(),
    column3,
    statsTableStart + 44
  )
  doc.line(margin + 1, statsTableStart + 47, third, statsTableStart + 47)

  // Stats Table Rows: Row 4
  doc.text('Sold Inventory', margin + 2, statsTableStart + 50, {
    maxWidth: margin + 5
  })
  doc.text(
    stats.selected.soldInventory.toString(),
    column1,
    statsTableStart + 52
  )
  doc.text(
    stats.comparable1.soldInventory.toString(),
    column2,
    statsTableStart + 52
  )
  doc.text(
    stats.comparable2.soldInventory.toString(),
    column3,
    statsTableStart + 52
  )

  // Market Strength Chart
  const marketStrengthChart = await am4core.registry.baseSprites
    .find(c => c.id === 'marketStrengthChart')
    .exporting.getImage('png')
  doc.addImage(
    marketStrengthChart,
    margin,
    statsTableStart + 57,
    third - margin,
    40
  )

  // Page 1 Column Description / Info
  doc.setFontSize(p)
  doc.setFontStyle('bold')
  doc.text(stats.description, margin, statsTableStart + 105, {
    maxWidth: third - margin
  })

  // Median Prices Chart
  doc.setFontStyle('normal')
  const medianPricesChart = await am4core.registry.baseSprites
    .find(c => c.id === 'medianPricesChart')
    .exporting.getImage('png')
  doc.setFontSize(chartTitle)
  doc.text('Median Prices', third + margin, chartColumnStart)
  doc.setDrawColor(colors.BLACK)
  doc.line(
    third + margin,
    62.5,
    third + margin + twoColumns,
    chartColumnStart + 2.5
  )
  doc.addImage(
    medianPricesChart,
    third + margin,
    chartColumnStart + 5,
    twoColumns,
    60
  )

  // Average Sale to List Ratio Chart
  const avgSaleToListRatioChart = await am4core.registry.baseSprites
    .find(c => c.id === 'avgSaleToListRatioChart')
    .exporting.getImage('png')
  doc.text('Avg Sale To List Ratio', third + margin, chartColumnStart + 68)
  doc.line(
    third + margin,
    chartColumnStart + 70.5,
    third + margin + twoColumns,
    chartColumnStart + 70.5
  )
  doc.addImage(
    avgSaleToListRatioChart,
    third + margin,
    chartColumnStart + 72,
    twoColumns,
    30
  )

  // Inventory Chart
  const inventoryChart = await am4core.registry.baseSprites
    .find(c => c.id === 'inventoryChart')
    .exporting.getImage('png')
  doc.text('Inventory', third + margin, chartColumnStart + 105)
  doc.line(
    third + margin,
    chartColumnStart + 107.5,
    third + margin + twoColumns,
    chartColumnStart + 107.5
  )
  doc.addImage(
    inventoryChart,
    third + margin,
    chartColumnStart + 110,
    twoColumns,
    30
  )

  // Average HPI By Beds Chart
  const avgHpiByBedsChart = await am4core.registry.baseSprites
    .find(c => c.id === 'avgHpiByBedsChart')
    .exporting.getImage('png')
  doc.addImage(
    avgHpiByBedsChart,
    margin,
    chartColumnStart + 150,
    half - margin,
    60
  )

  // Average HPI By Square Feet Chart
  const avgHpiBySqFtChart = await am4core.registry.baseSprites
    .find(c => c.id === 'avgHpiBySqFtChart')
    .exporting.getImage('png')
  doc.addImage(
    avgHpiBySqFtChart,
    half + 2.5,
    chartColumnStart + 150,
    half - margin,
    60
  )

  // // Page 1 Title
  // doc.setFontSize(24)
  // doc.setFontStyle('bold')
  // doc.text('Property Related Data', 10, headerht - 5)

  // // Page 1 Heading
  // doc.setFontSize(14)
  // doc.setFontStyle('bold')
  // doc.text('How Your Market Stacks Up Against the Rest', margin, 45)

  // // Page 1 Stats Table
  // doc.setFontStyle('normal')
  // doc.setFontSize(12)
  // doc.text(shortenedDate + ' Stats', margin, 55)
  // doc.setFillColor('0.00')
  // doc.rect(margin, 57.5, column1, 15, 'F')
  // doc.setTextColor('1.00')
  // doc.setFontSize(9)
  // doc.text(selectedProperty.address, margin + 2.5, 64)
  // doc.text(
  //   `${selectedProperty.city}, ${selectedProperty.state} ${selectedProperty.zip}`,
  //   margin + 2.5,
  //   67
  // )
  // doc.setFontStyle('bold')
  // doc.setFontSize(16)
  // doc.text(
  //   `$${numeral(selectedProperty.total).format('0a')}`,
  //   margin + 37.5,
  //   66
  // )

  // // Median Prices Chart
  // doc.addImage(medianPricesChart, 70, 52.5, column2, 60)

  // // Stats Table
  // const table = document.getElementById('stat-table')
  // const tableImg = await html2canvas(table).then(canvas =>
  //   canvas.toDataURL('image/png')
  // )
  // doc.addImage(tableImg, margin, 74, column1, 40)

  // // Page 1 Description
  // doc.setTextColor('0.00')
  // doc.setFontSize(8)
  // doc.setFontStyle('normal')
  // doc.text(description, margin, 122, {
  //   maxWidth: column1
  // })

  // // avgSaleToListChart
  // doc.addImage(avgSaleToListChart, 70, 112.5, column2, 40)

  // // Color legend
  // doc.setFillColor(greyBG)
  // doc.rect(0, 140, column1 + margin, 40, 'F')
  // doc.setFontStyle('bold')
  // doc.text('What do the colors mean?', margin, 145)
  // doc.setFontStyle('normal')
  // doc.setFillColor(SELECTEDGREY)
  // doc.rect(margin, 147.5, column1 - 2.5, 7.5, 'F')
  // doc.text('Selected Property', margin + 2.5, 152)
  // doc.text(selectedProperty.zip, column1 - 5, 152)
  // doc.setFillColor(DODGER_BLUE)
  // doc.rect(margin, 157.5, column1 - 2.5, 7.5, 'F')
  // doc.text('Comparable 1', margin + 2.5, 162.5)
  // doc.text(comparisonProperty1.label, column1 - 5, 162.5)
  // doc.setFillColor(RIPTIDE)
  // doc.rect(margin, 167.5, column1 - 2.5, 7.5, 'F')
  // doc.text('Comparable 2', margin + 2.5, 172.5)
  // doc.text(comparisonProperty2.label, column1 - 5, 172.5)

  // Inventory Chart
  // doc.addImage(inventoryChart, 70, 150, column2, 40)

  // // Market Strength Chart
  // doc.addImage(marketStrengthChart, margin, 185, column1, 30)

  // // Average HPI by Beds Chart
  // doc.addImage(avgHpiByBedsChart, 74, 185, column2 / 2 - 5, 30)

  // // Average HPI by Sq Ft Chart
  // doc.addImage(avgHpiBySqFtChart, 140, 185, column2 / 2 - 5, 30)

  // Page 1 Info Text: Legend
  // doc.setFillColor(220, 220, 220)
  // doc.rect(10, 95, 55, 40, 'F')
  // doc.setFontSize(10)
  // doc.text('What do the colors mean?', 12, 100, {
  //   maxWidth: '55'
  // })
  // doc.setFontSize(8)
  // doc.setFillColor(colors[0])
  // doc.rect(12, 102.5, 10, 2.5, 'F')
  // doc.text(keys[0], 24, 105, {
  //   maxWidth: '55'
  // })
  // doc.setFillColor(colors[1])
  // doc.rect(12, 107.5, 10, 2.5, 'F')
  // doc.text(keys[1], 24, 110, {
  //   maxWidth: '45'
  // })
  // doc.setFillColor(colors[2])
  // doc.rect(12, 115, 10, 2.5, 'F')
  // doc.text(keys[2], 24, 117.5, {
  //   maxWidth: '45'
  // })
  // doc.setFontStyle('bold')
  // doc.text('Similar Properties', 12, 122.5)
  // doc.setFontStyle('')
  // doc.text('similar propers', 12, 126, {
  //   maxWidth: '45'
  // })
  // doc.setFontStyle('bold')
  // doc.text('Sold Properties', 12, 130)
  // doc.setFontStyle('')
  // doc.text(soldProperties, 12, 133, {
  //   maxWidth: '45'
  // })
  // doc.setFillColor('1.00')

  // Page 1 Info Text: Table
  // doc.setFontSize(10)
  // doc.text(shortenedDate, 10, 145)
  // doc.setFillColor(0, 0, 0)
  // doc.rect(10, 147.5, 55, 15, 'F')
  // doc.setFillColor(220, 220, 220)
  // doc.rect(10, 165, 55, 25, 'F')

  // //Chart 3
  // doc.rect(67.5, 150, 130, 40)

  // //Chart 5
  // doc.rect(10, 192.5, 55, 25, 'F')

  // //Chart 6
  // doc.rect(70, 192.5, 65, 25, 'F')

  // //Chart 7
  // doc.rect(140, 192.5, 65, 25, 'F')

  // Page 1 Green Section
  // doc.setFillColor(173, 240, 224)
  // doc.rect(0, 225, 240, 240, 'F')

  // doc.setFillColor(0, 0, 0)
  // doc.rect(12, 230, 55, 55, 'F')
  // doc.text('Age of Properties Across Markets', 12, 232.5)
  // Save
  doc.save('report.pdf')
}
