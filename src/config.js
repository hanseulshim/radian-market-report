const SINBAD = '#71BAAF'
const SUPERNOVA = '#FFC907'
const JORDY_BLUE = '#96D9F2'
const DEEP_KOAMARU = '#0F2682'
const STEEL_BLUE1 = '#4A73B9'
const STEEL_BLUE = '#3A62A3'
const SUNSET_ORANGE = '#D04A42'
const WHITE = '#FFFFFF'
const ALABASTER = '#F7F7F7'
const BOTTICELLI = '#D9E3ED'
const GALLERY = '#efefef'
const BLACK = '#000000'
const WILD_SAND = '#F4F4F4'
const IRON = '#D0D3D5'

export default {
  medianPricesConfig: {
    id: 'medianPricesDiv',
    height: '300px',
    title: 'Median Listing Prices'
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
    height: '150px',
    title: 'Market Strength'
  },
  avgHpiByBedsConfig: {
    id: 'avgHpiByBedsDiv',
    height: '150px',
    title: 'Avg {SELECTED_PROPERTY} by Beds'
  },
  avgHpiBySqFtConfig: {
    id: 'avgHpiBySqFtDiv',
    height: '150px',
    title: 'Avg {SELECTED_PROPERTY} by Sq Ft'
  },
  ageOfPropertiesConfig: {
    id: 'ageOfPropertiesDiv',
    height: '400px',
    title: 'Age of Properties Across Markets'
  },
  domVsPriceConfig: {
    id: 'domVsPriceDiv',
    height: '220px',
    title: 'DOM vs Price of Listings'
  },
  inventoryPerDomConfig: {
    id: 'inventoryPerDomDiv',
    height: '150px',
    title: 'Inventory of Listings Per DOM'
  },
  averageDomOverTimeConfig: {
    id: 'averageDomOverTimeDiv',
    height: '150px',
    title: 'Average DOM Over Time'
  },
  map: {
    width: 150,
    height: 100
  },
  sectionOneChartConfig: {
    chart: {
      paddingTop: 25,
      paddingLeft: -5,
      fontSize: 12
    },
    legendConfig: {
      position: 'top',
      contentAlign: 'right',
      useDefaultMarker: true,
      fontSize: 14,
      labels: {
        marginLeft: 10
      },
      dy: -12,
      markers: {
        dx: -5,
        dy: -5
      }
    },
    dateAxis: {
      renderer: {
        minGridDistance: 50,
        grid: {
          location: 0.5,
          strokeOpacity: 0.1,
          stroke: BLACK
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
        minGridDistance: 25,
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
      fontWeight: 'bold',
      align: 'center',
      isMeasured: false,
      x: 75,
      y: -25
    },
    selectedProperty: {
      hiddenInLegend: true,
      dataFields: {
        dateX: 'date',
        valueY: 'value'
      },
      strokeWidth: 3,
      stroke: BLACK,
      fill: BLACK,
      fillOpacity: 0.05
    },
    comparisonProperty1: {
      hiddenInLegend: true,
      dataFields: {
        dateX: 'date',
        valueY: 'value'
      },
      strokeWidth: 3,
      stroke: STEEL_BLUE,
      fill: STEEL_BLUE
    },
    comparisonProperty2: {
      hiddenInLegend: true,
      dataFields: {
        dateX: 'date',
        valueY: 'value'
      },
      strokeWidth: 3,
      stroke: SINBAD,
      fill: SINBAD
    },
    soldProperty: {
      name: 'Sold',
      dataFields: {
        dateX: 'date',
        valueY: 'value'
      },
      strokeWidth: 2,
      strokeDasharray: '5, 5',
      stroke: BLACK,
      fill: BLACK
    },
    comparisonProperty1Sold: {
      hiddenInLegend: true,
      dataFields: {
        dateX: 'date',
        valueY: 'value'
      },
      strokeWidth: 2,
      strokeDasharray: '5, 5',
      stroke: STEEL_BLUE,
      fill: STEEL_BLUE
    },
    comparisonProperty2Sold: {
      hiddenInLegend: true,
      dataFields: {
        dateX: 'date',
        valueY: 'value'
      },
      strokeWidth: 2,
      strokeDasharray: '5, 5',
      stroke: SINBAD,
      fill: SINBAD
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
    legendConfig: {
      contentAlign: 'right',
      fontSize: 14,
      labels: {
        marginLeft: -35
      },
      markers: {
        dx: -10,
        dy: 8
      }
    },
    dateAxis: {
      renderer: {
        minGridDistance: 10,
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
      strokeWidth: 0,
      renderer: {
        minGridDistance: 20,
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
      x: 40,
      y: -30
    },
    hand: {
      pin: {
        radius: 9
      },
      radius: '85%',
      y: -5,
      startWidth: 18
    },
    series1: {
      dataFields: {
        dateX: 'date',
        valueY: 'value'
      },
      strokeWidth: 3,
      stroke: STEEL_BLUE1
    },
    series2: {
      dataFields: {
        dateX: 'date',
        valueY: 'value'
      },
      strokeWidth: 3,
      stroke: BLACK
    },
    series3: {
      dataFields: {
        dateX: 'date',
        valueY: 'value'
      },
      strokeWidth: 3,
      stroke: SUNSET_ORANGE
    },
    series4: {
      dataFields: {
        dateX: 'date',
        valueY: 'value'
      },
      strokeWidth: 3,
      stroke: SUPERNOVA
    }
  },
  sectionThreeChartConfig: {
    chart: {
      paddingTop: 25,
      paddingLeft: -5,
      fontSize: 12
    },
    label: {
      fontSize: 15,
      fontWeight: 'bold',
      align: 'center',
      isMeasured: false,
      x: 40,
      y: -30
    },
    valueAxis: {
      strokeWidth: 0,
      renderer: {
        minGridDistance: 20
      },
      numberFormatter: {
        numberFormat: '#'
      }
    },
    selectedPropertySeriesAvg: {
      hiddenInLegend: true,
      dataFields: {
        dateX: 'date',
        valueY: 'value'
      },
      columns: {
        width: '40%'
      },
      strokeWidth: 0,
      fill: BLACK,
      bullets: [
        {
          type: 'CircleBullet',
          circle: {
            radius: 8,
            strokeWidth: 0,
            fill: BLACK
          }
        }
      ]
    },
    comparisonProperty1SeriesAvg: {
      hiddenInLegend: true,
      dataFields: {
        dateX: 'date',
        valueY: 'value'
      },
      columns: {
        width: '40%'
      },
      strokeWidth: 0,
      fill: STEEL_BLUE,
      bullets: [
        {
          type: 'CircleBullet',
          circle: {
            radius: 8,
            strokeWidth: 0,
            fill: STEEL_BLUE
          }
        }
      ]
    },
    comparisonProperty2SeriesAvg: {
      hiddenInLegend: true,
      dataFields: {
        dateX: 'date',
        valueY: 'value'
      },
      columns: {
        width: '40%'
      },
      strokeWidth: 0,
      fill: SINBAD,
      bullets: [
        {
          type: 'CircleBullet',
          circle: {
            radius: 8,
            strokeWidth: 0,
            fill: SINBAD
          }
        }
      ]
    },
    soldPropertySeriesAvg: {
      hiddenInLegend: true,
      dataFields: {
        dateX: 'date',
        valueY: 'value'
      },
      columns: {
        width: '40%'
      },
      strokeWidth: 0,
      fill: '#AFB3B5',
      bullets: [
        {
          type: 'CircleBullet',
          circle: {
            radius: 8,
            strokeWidth: 0,
            fill: '#999999'
          }
        }
      ]
    },
    ageOfProperty: {
      hiddenInLegend: true,
      dataFields: {
        dateX: 'date',
        valueY: 'value'
      },
      columns: {
        width: '40%'
      },
      strokeWidth: 0,
      fill: WHITE
    }
  },
  sectionFourChartConfig: {
    chart: {
      paddingTop: 20,
      paddingLeft: -5,
      paddingBottom: 0,
      fontSize: 12
    },
    categoryAxis: {
      dataFields: {
        category: 'category'
      },
      renderer: {
        minGridDistance: 10,
        grid: {
          location: 0,
          strokeOpacity: 0.1,
          stroke: BLACK
        }
      },
      startLocation: 0,
      endLocation: 0
    },
    label: {
      fontSize: 12,
      align: 'center',
      isMeasured: false,
      x: 70,
      y: -20
    },
    selectedProperty: {
      hiddenInLegend: true,
      dataFields: {
        categoryX: 'category',
        valueY: 'high',
        openValueY: 'low'
      },
      strokeWidth: 0,
      fill: BLACK
    },
    selectedPropertyLineSeries: {
      noRisers: true,
      startLocation: 0.1,
      endLocation: 0.37,
      dataFields: {
        valueY: 'average',
        categoryX: 'category'
      },
      stroke: BLACK,
      strokeWidth: 3
    },
    comparisonProperty1: {
      hiddenInLegend: true,
      dataFields: {
        categoryX: 'category',
        valueY: 'high',
        openValueY: 'low'
      },
      strokeWidth: 0,
      fill: STEEL_BLUE
    },
    comparisonProperty1LineSeries: {
      noRisers: true,
      startLocation: 0.35,
      endLocation: 0.65,
      dataFields: {
        valueY: 'average',
        categoryX: 'category'
      },
      stroke: STEEL_BLUE,
      strokeWidth: 3
    },
    comparisonProperty2: {
      hiddenInLegend: true,
      dataFields: {
        categoryX: 'category',
        valueY: 'high',
        openValueY: 'low'
      },
      strokeWidth: 0,
      fill: SINBAD
    },
    comparisonProperty2LineSeries: {
      noRisers: true,
      startLocation: 0.6,
      endLocation: 0.95,
      dataFields: {
        valueY: 'average',
        categoryX: 'category'
      },
      stroke: SINBAD,
      strokeWidth: 3
    }
  },
  sectionFiveChartConfig: {
    selectedProperty: {
      hiddenInLegend: true,
      dataFields: {
        categoryX: 'category',
        valueY: 'value'
      },
      strokeWidth: 0,
      fill: BLACK,
      stroke: BLACK
    },
    comparisonProperty1: {
      hiddenInLegend: true,
      dataFields: {
        categoryX: 'category',
        valueY: 'value'
      },
      strokeWidth: 0,
      fill: STEEL_BLUE,
      stroke: STEEL_BLUE
    },
    comparisonProperty2: {
      hiddenInLegend: true,
      dataFields: {
        categoryX: 'category',
        valueY: 'value'
      },
      strokeWidth: 0,
      fill: SINBAD,
      stroke: SINBAD
    },
    soldProperty: {
      dataFields: {
        categoryX: 'category',
        valueY: 'value'
      },
      strokeWidth: 2,
      strokeDasharray: '5, 5',
      stroke: BLACK
    },
    categoryAxis: {
      dataFields: {
        category: 'category'
      },
      renderer: {
        minGridDistance: 10,
        grid: {
          location: 0.5,
          strokeOpacity: 0.1,
          stroke: BLACK
        }
      },
      startLocation: 0.5,
      endLocation: 0.5
    }
  },
  colors: {
    SINBAD,
    SUPERNOVA,
    JORDY_BLUE,
    DEEP_KOAMARU,
    STEEL_BLUE,
    GALLERY,
    SUNSET_ORANGE,
    WHITE,
    ALABASTER,
    BOTTICELLI,
    BLACK,
    WILD_SAND,
    IRON
  }
}
