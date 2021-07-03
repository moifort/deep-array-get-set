const lodashGet = require('lodash.get')
const lodashSet = require('lodash.set')

const get = (object, path = '', defaultValue) => {
    const flatArrayIndex = path.indexOf('[]')
    if (flatArrayIndex > 0) {
        const pathToArray = path.slice(0, flatArrayIndex)
        const pathInArray = path.slice(flatArrayIndex + 3, path.length)
        const arrayToFlat = lodashGet(object, pathToArray, []).map((item) =>
            lodashGet(item, pathInArray, null)
        )
        return arrayToFlat
    }
    return lodashGet(object, path, defaultValue)
}

const set = (objectToSet, path = '', value) => {
    const flatArrayIndex = path.indexOf('[]')
    if (flatArrayIndex > 0) {
        const pathToArray = path.slice(0, flatArrayIndex)
        const pathInArray = path.slice(flatArrayIndex + 3, path.length)
        const arrayToSet = get(objectToSet, pathToArray, [])
        const arraySet = value.map((item, index) => ({
            ...(arrayToSet[index] || []),
            [pathInArray]: item,
        }))
        return lodashSet(objectToSet, pathToArray, arraySet)
    }
    return lodashSet(objectToSet, path, value)
}


module.exports = {get, set}
