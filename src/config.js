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
  makretStrengthConfig: {
    id: 'marketStrengthDiv',
    height: '250px',
    title: 'Market Strength'
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
    hand: {
      pin: {
        radius: 12
      },
      radius: '85%',
      y: -15,
      startWidth: 24
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
      stroke: '#8ce0cf',
      fill: '#8ce0cf'
    },
    comparisonProperty2: {
      hiddenInLegend: true,
      dataFields: {
        dateX: 'date',
        valueY: 'value'
      },
      strokeWidth: 4,
      stroke: '#ffc700',
      fill: '#ffc700'
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
