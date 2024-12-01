import api from "../instance.js"
import { toApiUrl } from "../util.js"

/**
 * List all domains
 * @param {boolean} [withservices]
 * @returns {Promise<string[]>}
 */
export const list = async (withservices) => {
  const url = toApiUrl("domainslist", "get", { withservices })
  /** @type {import("got").Response<import("./types.js").DomainListResponse>} */
  const res = await api(url, { responseType: "json" })

  console.log(res.body)

  if ((!Array.isArray(res.body.messages)) && res.body.messages.error) {
    throw new Error(res.body.messages.error.join("\n"))
  }

  return res.body.result || []
}

// export const get = () => {
//   const url = toApiUrl(globalConfig, "domain", "")
// }

/**
 * Add a domain
 * @param {import("./types.js").DomainAddPayload} payload
 * @returns {Promise<null>}
 */
export const add = async (payload) => {
  const url = toApiUrl("domain", "add", {
    domain: payload.domain,
    destinations: payload.destinations,
    aliases: payload.aliases,
  })
  /** @type {import("got").Response<import("./types.js").DomainAddResponse>} */
  const res = await api(url, { responseType: "json" })

  if ((!Array.isArray(res.body.messages)) && res.body.messages.error) {
    throw new Error(res.body.messages.error.join("\n"))
  }

  return null
}

/**
 * Remove a domain
 * @param {string} domain
 * @returns {Promise<null>}
 */
export const remove = async (domain) => {
  const url = toApiUrl("domain", "remove", { domain })
  /** @type {import("got").Response<import("./types.js").DomainAddResponse>} */
  const res = await api(url, { responseType: "json" })

  console.log(res.body, res.statusCode)

  if ((!Array.isArray(res.body.messages)) && res.body.messages.error) {
    throw new Error(res.body.messages.error.join("\n"))
  }

  return null
}

/**
 * Check if the domain exists
 * @param {string} domain
 * @returns {Promise<boolean>}
 */
export const exists = async (domain) => {
  const url = toApiUrl("domain", "exists", { domain })
  /** @type {import("got").Response<import("./types.js").DomainExistsResponse>} */
  const res = await api(url, { responseType: "json" })

  console.log(res.body, res.statusCode, res.statusMessage)

  if ((!Array.isArray(res.body.messages)) && res.body.messages.error) {
    return false
  }

  return true
}
