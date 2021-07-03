import get from 'lodash.get'

export default (object, path = '', defaultValue) => {
  const flatArrayIndex = path.indexOf('[]')
  if (flatArrayIndex > 0) {
    const pathToArray = path.slice(0, flatArrayIndex)
    const pathInArray = path.slice(flatArrayIndex + 3, path.length)
    const arrayToFlat = get(object, pathToArray, []).map((item) =>
      get(item, pathInArray, null)
    )
    return arrayToFlat
  }
  return get(object, path, defaultValue)
}
