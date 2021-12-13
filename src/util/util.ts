import request from "sync-request";

const createRequest = (config: any) => {
    const { baseURL, method, url, headers } = config
    return request(method, `${baseURL}${url}`, { headers })
}

const stringifyKeyValuePair = ([key, value]: any[]) => {
    return `${key}=${encodeURIComponent(value)}`
}

const removeEmptyValue = (obj: any) => {
    if(!(obj instanceof Object)) return {}
    Object.keys(obj).forEach(key => isEmptyValue(obj[key]) && delete obj[key])
    return obj
}

const isEmptyValue = (input: any) => {
    /**
     * input is considered empty value: falsy value (like null, undefined, '', except false and 0),
     * string with white space characters only, empty array, empty object
     */
    return (!input && input !== false && input !== 0) ||
        ((input instanceof String || typeof input === 'string') && !input.trim()) ||
        (Array.isArray(input) && !input.length) ||
        (input instanceof Object && !Object.keys(input).length)
}

const buildQueryString = (params: any) => {
    if (!params) return ''
    return Object.entries(params)
      .map(stringifyKeyValuePair)
      .join('&')
}

const fromatData = (datas: any): any => {
    if(Array.isArray(datas)) {
        return datas.map((data: any) => {
            return fromatData(data)
        })
    } else if (typeof datas === "object" && datas !== null) {
            const newObj: any = {}
            Object.entries(datas).map(([key, value]: any[]) => newObj[key] = fromatData(value))
            return newObj;
    } else {
        return (datas === undefined || datas === null) ? "" : datas
    }
}

export {
    createRequest,
    buildQueryString,
    removeEmptyValue,
    isEmptyValue,
    fromatData
}