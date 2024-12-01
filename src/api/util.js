/**
 * @typedef {string|number|boolean|string[]|undefined} Param
 */

/**
 *
 * @template {import("../types.js").SeController} T
 * @param {T} controller
 * @param {import("../types.js").SeAction[T]} action
 * @param {Record<string, Param>} [params]
 * @returns {string}
 */
export const toApiUrl = (controller, action, params) => (
  `${controller}/${action}/format/json/${toParams(params)}`
)

/**
 *
 * @param {Record<string, Param>|undefined} params
 * @returns {string}
 */
const toParams = (params) => (
  Object.entries(params || {})
    .map(([key, value]) => [key, toParam(value)])
    .filter(([_key, value]) => value !== undefined)
    .map(([key, value]) => `${key}/${value}`).join("/")
)

/**
 * Converts a value to a string
 * @param {Param} param
 */
const toParam = (param) => {
  if (Array.isArray(param)) {
    return JSON.stringify(param)
  }

  // the api doesn't properly handle 'false' boolean
  if (typeof param === "boolean") {
    return param ? 1 : 0
  }

  return param
}
