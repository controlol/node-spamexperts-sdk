import api from "../instance.js"
import { toApiUrl } from "../util.js"

/**
 *
 * @param {string} domain
 * @param {string} ip
 * @param {number} [mask]
 */
export const addIp = async (domain, ip, mask) => {
  const url = toApiUrl("outgoingusers", "addip", { domain, ip, mask })
  /** @type {import("got").Response<import("./types.js").OutgoingUsersAddIpResponse>} */
  const res = await api(url, { responseType: "json" })

  console.log(res.body)

  if ((!Array.isArray(res.body.messages)) && res.body.messages.error) {
    throw new Error(res.body.messages.error.join("\n"))
  }
}
