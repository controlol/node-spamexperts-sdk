import { configure as configureInstance } from "./api/instance.js"

/** @type {import("./types.js").SpamExpertsConfiguration} */
const defaultConfig = {
  authentication: {
    basic: {
      username: "",
      password: ""
    }
  },
  baseUrl: "https://api.spamexperts.com/api",
}


const globalConfig = {...structuredClone(defaultConfig)}

/**
 *
 * @param {import("utility-types").DeepPartial<import("./types.js").SpamExpertsConfiguration>} config
 */
export const configure = (config) => {
  if (config.authentication?.basic) {
    const { basic } = config.authentication
    if (basic.username && basic.password) {
      // update auth info, remove other auth methods
      defaultConfig.authentication = {
        basic: {
          username: basic.username,
          password: basic.password,
        }
      }
    }
  }

  if (config.baseUrl) {
    defaultConfig.baseUrl = config.baseUrl
  }

  configureInstance(defaultConfig)
}

export const getConfig = () => {
  return structuredClone(globalConfig)
}
