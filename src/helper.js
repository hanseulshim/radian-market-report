export const getAverage = arr => {
  const sum = arr.reduce((a, b) => a + b, 0)
  return sum / arr.length || 0
}

export const hex2rgba = (hex, alpha = 1) => {
  const [r, g, b] = hex.match(/\w\w/g).map(x => parseInt(x, 16))
  return `rgba(${r},${g},${b},${alpha})`
}
