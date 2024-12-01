import api from "../instance.js"
import { toApiUrl } from "../util.js"

/**
 * Get enabled products for a domain
 * @param {string} domain
 * @returns {Promise<Record<import("./types.js").DomainProduct, boolean>>}
 */
export const getProducts = async (domain) => {
  const url = toApiUrl("domain", "getproducts", { domain })
  /** @type {import("got").Response<import("./types.js").DomainGetProductsResponse>} */
  const res = await api(url, { responseType: "json" })

  if ((!Array.isArray(res.body.messages)) && res.body.messages.error) {
    throw new Error(res.body.messages.error.join("\n"))
  }

  if (res.body.result === null) {
    throw new Error("Unexpected result, value is null")
  }

  return {
    incoming: res.body.result.incoming === 1,
    outgoing: res.body.result.outgoing === 1,
    archiving: res.body.result.archiving === 1,
  }
}

/**
 * Get enabled products for a domain
 * @param {string} domain
 * @param {Partial<Record<import("./types.js").DomainProduct, boolean>>} products
 * @returns {Promise<null>}
 */
export const setProducts = async (domain, products) => {
  const url = toApiUrl("domain", "setproducts", {
    domain,
    ...products
  })
  /** @type {import("got").Response<import("./types.js").DomainGetProductsResponse>} */
  const res = await api(url, { responseType: "json" })

  if ((!Array.isArray(res.body.messages)) && res.body.messages.error) {
    throw new Error(res.body.messages.error.join("\n"))
  }

  return null
}
