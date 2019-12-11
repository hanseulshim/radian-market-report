export default {
  medianPricesConfig: {
    id: 'medianPricesDiv',
    height: '300px',
    title: 'Median Prices of Active Listings'
  },
  avgSaleToListRatioConfig: {
    id: 'avgSaleToListRatioDiv',
    height: '150px',
    title: 'Avg Sale to List Ratio'
  },
  inventoryConfig: {
    id: 'inventoryDiv',
    height: '150px',
    title: 'Inventory'
  },
  marketStrengthConfig: {
    id: 'marketStrengthDiv',
    height: '130px',
    title: 'Market Strength'
  },
  avgHpiByBedsConfig: {
    id: 'avgHpiByBedsDiv',
    height: '130px',
    title: ''
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
    chart: {
      paddingTop: 20,
      seriesContainer: {
        zIndex: -1
      },
      fontSize: 12
    },
    dateAxis: {
      renderer: {
        minGridDistance: 50,
        grid: {
          location: 0.5,
          strokeOpacity: 0.5,
          stroke: '#DFDFDF'
        }
      },
      dateFormats: {
        month: 'MMM'
      },
      periodChangeDateFormats: {
        month: 'MMM'
      },
      startLocation: 0.5,
      endLocation: 0.5
    },
    valueAxis: {
      width: 70,
      strokeWidth: 0,
      renderer: {
        minGridDistance: 20,
        labels: {
          width: 70,
          maxWidth: 70,
          truncate: true,
          textAlign: 'end'
        },
        grid: {
          disabled: true
        },
        axisFills: {
          disabled: false,
          fillOpacity: 0.5,
          fill: '#EFEFEF'
        }
      },
      numberFormatter: {
        numberFormat: '#'
      }
    },
    label: {
      fontSize: 15,
      fontWeight: 'bold',
      align: 'center',
      isMeasured: false,
      x: 75,
      y: -20
    },
    selectedProperty: {
      hiddenInLegend: true,
      dataFields: {
        dateX: 'date',
        valueY: 'value'
      },
      strokeWidth: 3,
      fill: '#D1D3D5',
      fillOpacity: 1,
      stroke: '#747575'
    },
    comparisonProperty1: {
      hiddenInLegend: true,
      dataFields: {
        dateX: 'date',
        valueY: 'value'
      },
      strokeWidth: 3,
      stroke: '#4B73B7',
      fill: '#4B73B7'
    },
    comparisonProperty2: {
      hiddenInLegend: true,
      dataFields: {
        dateX: 'date',
        valueY: 'value'
      },
      strokeWidth: 3,
      stroke: '#95D3C9',
      fill: '#95D3C9'
    },
    soldProperties: {
      name: 'Sold',
      dataFields: {
        dateX: 'date',
        valueY: 'value'
      },
      strokeWidth: 3,
      strokeDasharray: '4, 4',
      stroke: '#000000',
      fill: '#000000'
    }
  },
  sectionTwoChartConfig: {
    chart: {
      paddingTop: 40,
      paddingBottom: -5,
      paddingLeft: 0,
      paddingRight: 20,
      fontSize: 12
    },
    dateAxis: {
      renderer: {
        minGridDistance: 30,
        grid: {
          disabled: true
        }
      },
      dateFormats: {
        month: 'MMM'
      },
      periodChangeDateFormats: {
        month: 'MMM'
      },
      startLocation: 0.5,
      endLocation: 0.5
    },
    valueAxis: {
      renderer: {
        minGridDistance: 25,
        grid: {
          disabled: true
        }
      },
      numberFormatter: {
        numberFormat: '#'
      }
    },
    label: {
      fontSize: 15,
      fontWeight: 'bold',
      align: 'center',
      isMeasured: false,
      x: 10,
      y: -35
    },
    hand: {
      pin: {
        radius: 12
      },
      radius: '85%',
      y: -5,
      startWidth: 24
    },
    selectedProperty: {
      hiddenInLegend: true,
      dataFields: {
        dateX: 'date',
        valueY: 'value'
      },
      strokeWidth: 3,
      fill: '#D1D3D5',
      fillOpacity: 1,
      stroke: '#747575'
    },
    comparisonProperty1: {
      hiddenInLegend: true,
      dataFields: {
        dateX: 'date',
        valueY: 'value'
      },
      strokeWidth: 3,
      stroke: '#4B73B7',
      fill: '#4B73B7'
    },
    comparisonProperty2: {
      hiddenInLegend: true,
      dataFields: {
        dateX: 'date',
        valueY: 'value'
      },
      strokeWidth: 3,
      stroke: '#95D3C9',
      fill: '#95D3C9'
    },
    soldProperties: {
      name: 'Sold',
      dataFields: {
        dateX: 'date',
        valueY: 'value'
      },
      strokeWidth: 3,
      strokeDasharray: '4, 4',
      stroke: '#000000',
      fill: '#000000'
    }
  }
}
