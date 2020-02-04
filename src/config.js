import {
  BLACK,
  AZURE,
  NEPTUNE,
  VALENCIA,
  SUPERNOVA,
  DUSTY_GRAY,
  WHITE
} from './colors'

const fontSize = 14

const getColor = category =>
  category === 'selected' || category === 'series2'
    ? BLACK
    : category === 'comparable1' || category === 'series1'
    ? AZURE
    : category === 'comparable2'
    ? NEPTUNE
    : category === 'series3'
    ? VALENCIA
    : category === 'series4'
    ? SUPERNOVA
    : category === 'selectedSold'
    ? DUSTY_GRAY
    : category === 'age'
    ? WHITE
    : ''

const chart = type => ({
  paddingLeft: -25,
  paddingTop: type === 'section2' || type === 'age' ? 50 : 10,
  paddingBottom: type === 'section2' ? -5 : 10,
  paddingRight: type === 'section2' ? 20 : 15,
  fontSize
})

const dateAxis = type => ({
  dateFormats: {
    month: 'MMM'
  },
  periodChangeDateFormats: {
    month: 'MMM'
  },
  startLocation: 0.5,
  endLocation: 0.5,
  renderer: {
    minGridDistance: type === 'section2' ? 10 : type === 'age' ? 100 : 50,
    grid: {
      location: type === 'age' ? 0 : 0.5,
      strokeOpacity: 0.1,
      stroke: BLACK
    }
  },
  title: {
    fontWeight: 'bold',
    fontSize
  }
})

const valueAxis = type => ({
  width: 75,
  strokeWidth: 0,
  renderer: {
    minGridDistance: 30,
    labels: {
      width: 75,
      maxWidth: 75,
      truncate: true,
      textAlign: 'end'
    },
    ticks: {
      template: {
        disabled: type === 'bullet'
      }
    }
  },
  numberFormatter: {
    numberFormat: type === 'price' ? '$#a' : type === 'percent' ? '#%' : '#'
  },
  min: type === 'min' ? 0 : '',
  max: ''
})

const categoryAxis = type => ({
  dataFields: {
    category: 'category'
  },
  startLocation: type === 'line' ? 0.5 : 0,
  endLocation: type === 'line' ? 0.5 : 1,
  renderer: {
    minGridDistance: 10,
    cellStartLocation: 0.1,
    cellEndLocation: 0.9,
    grid: {
      location: type === 'line' ? 0.5 : 0,
      strokeOpacity: 0.1
    }
  },
  title: {
    fontWeight: 'bold',
    fontSize
  }
})

const line = (category, type, chart) => {
  const dataFields =
    chart === 'category' ||
    chart === 'vertical' ||
    chart === 'vertical1' ||
    chart === 'curvedVert'
      ? {
          valueY: 'value',
          categoryX: 'category'
        }
      : {
          dateX: 'date',
          valueY: 'value'
        }
  return {
    dataFields,
    noRisers: chart === 'category',
    strokeWidth: type === 'dash' ? 2 : type === 'column' ? 0 : 3,
    stroke: getColor(category),
    strokeDasharray: type === 'dash' ? '5, 5' : 0,
    fill: getColor(category),
    fillOpacity: type === 'filled' ? 0.05 : type === 'column' ? 1 : 0,
    startLocation:
      category === 'selected'
        ? 0.1
        : category === 'comparable1'
        ? 0.35
        : category === 'comparable2'
        ? 0.6
        : 0,
    endLocation:
      category === 'selected'
        ? 0.37
        : category === 'comparable1'
        ? 0.65
        : category === 'comparable2'
        ? 0.95
        : 0,
    bullets:
      chart === 'bullet'
        ? [
            {
              type: 'CircleBullet',
              circle: {
                radius: 8,
                strokeWidth: 0,
                fill: getColor(category)
              }
            }
          ]
        : [],
    columns:
      chart === 'bullet' || chart === 'vertical'
        ? {
            width: '25%'
          }
        : chart === 'vertical1'
        ? {
            width: '7%'
          }
        : {},
    tensionX: chart === 'curved' || chart === 'curvedVert' ? 0.75 : 1,
    tensionY: chart === 'curved' || chart === 'curvedVert' ? 0.75 : 1
  }
}

const bar = category => ({
  hiddenInLegend: true,
  dataFields: {
    categoryX: 'category',
    valueY: 'high',
    openValueY: 'low'
  },
  strokeWidth: 0,
  fill: getColor(category)
})

const legend = () => {
  return {
    contentAlign: 'right',
    fontSize,
    labels: {
      marginLeft: -35
    },
    markers: {
      dx: -10,
      dy: 8
    }
  }
}

const label = type => {
  return {
    fontSize: type === 'age' ? fontSize : 18,
    fontWeight: 'bold',
    align: 'center',
    isMeasured: false,
    y: -35,
    x: type === 'section2' ? 75 : type === 'age' ? 35 : 0
  }
}

const getBubbleConfig = zip => {
  return {
    divId: zip + 'FamilyMakeupChart',
    color: getColor(zip)
  }
}

export default {
  chart,
  dateAxis,
  valueAxis,
  label,
  line,
  legend,
  categoryAxis,
  bar,
  getBubbleConfig
}
