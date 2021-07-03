import set from 'lodash.set'
import get from './get'

export default (objectToSet, path = '', value) => {
  const flatArrayIndex = path.indexOf('[]')
  if (flatArrayIndex > 0) {
    const pathToArray = path.slice(0, flatArrayIndex)
    const pathInArray = path.slice(flatArrayIndex + 3, path.length)
    const arrayToSet = get(objectToSet, pathToArray, [])
    const arraySet = value.map((item, index) => ({
      ...(arrayToSet[index] ?? []),
      [pathInArray]: item,
    }))
    return set(objectToSet, pathToArray, arraySet)
  }
  return set(objectToSet, path, value)
}
