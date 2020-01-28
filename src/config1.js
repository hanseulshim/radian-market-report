import { BLACK, AZURE, NEPTUNE, VALENCIA, SUPERNOVA } from './colors'

const lineConfig = {
  dataFields: {
    dateX: 'date',
    valueY: 'value'
  },
  strokeWidth: 3
}

const dashLineConfig = {
  dataFields: {
    dateX: 'date',
    valueY: 'value'
  },
  strokeWidth: 2,
  strokeDasharray: '5, 5'
}

const dateAxis = {
  dateFormats: {
    month: 'MMM'
  },
  periodChangeDateFormats: {
    month: 'MMM'
  },
  startLocation: 0.5,
  endLocation: 0.5,
  renderer: {
    minGridDistance: 50,
    grid: {
      location: 0.5,
      strokeOpacity: 0.1,
      stroke: BLACK
    }
  }
}

const valueAxis = {
  strokeWidth: 0,
  renderer: {
    minGridDistance: 30,
    labels: {
      width: 75,
      maxWidth: 75,
      truncate: true,
      textAlign: 'end'
    }
  },
  numberFormatter: {
    numberFormat: '#'
  }
}

const fontSize = 14

const label = {
  fontSize: 18,
  fontWeight: 'bold',
  align: 'center',
  isMeasured: false,
  y: -35
}

const bar = {
  hiddenInLegend: true,
  dataFields: {
    categoryX: 'category',
    valueY: 'high',
    openValueY: 'low'
  },
  strokeWidth: 0
}

const barLine = {
  noRisers: true,
  dataFields: {
    valueY: 'average',
    categoryX: 'category'
  },
  strokeWidth: 3
}

export default {
  label,
  sectionOne: {
    chart: {
      paddingLeft: -20,
      fontSize
    },
    dateAxis: {
      ...dateAxis
    },
    valueAxis: {
      width: 75,
      ...valueAxis
    },
    selected: {
      ...lineConfig,
      stroke: BLACK,
      fill: BLACK,
      fillOpacity: 0.05
    },
    selectedSold: {
      ...dashLineConfig,
      stroke: BLACK
    },
    comparable1: {
      ...lineConfig,
      stroke: AZURE
    },
    comparable1Sold: {
      ...dashLineConfig,
      stroke: AZURE
    },
    comparable2: {
      ...lineConfig,
      stroke: NEPTUNE
    },
    comparable2Sold: {
      ...dashLineConfig,
      stroke: NEPTUNE
    }
  },
  sectionTwo: {
    chart: {
      paddingTop: 50,
      paddingBottom: -5,
      paddingLeft: 0,
      paddingRight: 20,
      fontSize
    },
    label: {
      ...label,
      x: 75
    },
    legendConfig: {
      contentAlign: 'right',
      fontSize,
      labels: {
        marginLeft: -35
      },
      markers: {
        dx: -10,
        dy: 8
      }
    },
    dateAxis: {
      ...dateAxis,
      renderer: {
        minGridDistance: 10,
        grid: {
          location: 0.5,
          strokeOpacity: 0.1,
          stroke: BLACK
        }
      }
    },
    valueAxis: {
      ...valueAxis,
      renderer: {
        labels: {
          truncate: true,
          textAlign: 'end'
        }
      }
    },
    series1: {
      ...lineConfig,
      stroke: AZURE
    },
    series2: {
      ...lineConfig,
      stroke: BLACK
    },
    series3: {
      ...lineConfig,
      stroke: VALENCIA
    },
    series4: {
      ...lineConfig,
      stroke: SUPERNOVA
    }
  },
  sectionThree: {
    chart: {
      paddingTop: 50,
      paddingLeft: -20,
      fontSize
    },
    label: {
      ...label,
      fontSize: 14,
      y: -25,
      x: 75
    },
    categoryAxis: {
      dataFields: {
        category: 'category'
      },
      renderer: {
        minGridDistance: 10,
        cellStartLocation: 0.1,
        cellEndLocation: 0.9,
        grid: {
          location: 0,
          strokeOpacity: 0.1,
          stroke: BLACK
        }
      }
    },
    selected: {
      ...bar,
      fill: BLACK
    },
    selectedLine: {
      ...barLine,
      startLocation: 0.1,
      endLocation: 0.37,
      stroke: BLACK,
      fill: BLACK
    },
    selectedSold: {
      ...barLine,
      strokeWidth: 2,
      strokeDasharray: '5, 5',
      stroke: BLACK
    },
    comparable1: {
      ...bar,
      fill: AZURE
    },
    comparable1Line: {
      ...barLine,
      startLocation: 0.35,
      endLocation: 0.65,
      stroke: AZURE,
      fill: AZURE
    },
    comparable2: {
      ...bar,
      fill: NEPTUNE
    },
    comparable2Line: {
      ...barLine,
      startLocation: 0.6,
      endLocation: 0.95,
      stroke: NEPTUNE,
      fill: NEPTUNE
    }
  }
}
