export default {
  medianPricesConfig: {
    id: 'medianPricesDiv',
    height: '400px',
    title: 'Median Prices of Active Listings'
  },
  avgSaleToListRatioConfig: {
    id: 'avgSaleToListRatioDiv',
    height: '250px',
    title: 'Avg Sale to List Ratio'
  },
  inventoryConfig: {
    id: 'inventoryDiv',
    height: '275px',
    title: 'Inventory'
  },
  legendConfig: {
    position: 'top',
    contentAlign: 'right',
    fontSize: 14,
    labels: {
      marginLeft: 10
    }
  },
  sectionOneChartConfig: {
    dateAxis: {
      renderer: {
        minGridDistance: 50
      },
      dateFormats: {
        month: 'MMM'
      },
      periodChangeDateFormats: {
        month: 'YY MMM'
      },
      startLocation: 0.5,
      endLocation: 0.5,
      paddingRight: 20
    },
    valueAxis: {
      width: 70,
      renderer: {
        minGridDistance: 50,
        line: {
          strokeOpacity: 1,
          strokeWidth: 2
        },
        labels: {
          width: 70,
          maxWidth: 70,
          truncate: true,
          textAlign: 'end'
        }
      },
      numberFormatter: {
        numberFormat: '#'
      }
    },
    label: {
      fontSize: 15,
      align: 'center',
      isMeasured: false,
      x: 75,
      y: 10
    },
    selectedProperty: {
      hiddenInLegend: true,
      dataFields: {
        dateX: 'date',
        valueY: 'value'
      },
      strokeWidth: 4,
      fill: '#5B7482',
      fillOpacity: 1,
      stroke: '#5B7482'
    },
    comparisonProperty1: {
      hiddenInLegend: true,
      dataFields: {
        dateX: 'date',
        valueY: 'value'
      },
      strokeWidth: 4,
      stroke: '#A9DAD2'
    },
    comparisonProperty2: {
      hiddenInLegend: true,
      dataFields: {
        dateX: 'date',
        valueY: 'value'
      },
      strokeWidth: 4,
      stroke: '#FEC847'
    },
    soldProperties: {
      name: 'Sold',
      dataFields: {
        dateX: 'date',
        valueY: 'value'
      },
      strokeWidth: 4,
      strokeDasharray: '4, 4',
      stroke: '#000000'
    }
  }
}
