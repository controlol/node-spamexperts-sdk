import got from "got"

// /** @type {import("got").HandlerFunction} */
// const jsonHandler = (options, next) => {
//   if (options.isStream) {
//     // It's a Stream, return synchronously.
//     return next(options)
//   }

//   return (async () => {
//     try {
//       const response = await next(options)
//       response.yourOwnProperty = true
//       return response
//     } catch (error) {
//       // Every error will be replaced by this one.
//       // Before you receive any error here,
//       // it will be passed to the `beforeError` hooks first.
//       // Note: this one won't be passed to `beforeError` hook. It's final.
//       throw new Error('Your very own error.')
//     }
//   })()
// }

const api = got.extend({
  // handlers: [jsonHandler]
  mutableDefaults: true,
  responseType: "json",
  hooks: {
    // beforeRequest: [
    //   (options) => {
    //     // options.url = options.url + "/format/json"
    //   }
    // ]
  }
})

/**
 * Configures the instance
 * @param {import("../types.js").SpamExpertsConfiguration} config
 */
export const configure = (config) => {
  api.defaults.options.prefixUrl = config.baseUrl

  if (config.authentication.basic) {
    // create a local reference
    const { username, password } = config.authentication.basic

    // if in the future multiple hooks are created must splice instead of replacing the array
    api.defaults.options.hooks.init = [
      (options) => {
        if (!options.headers) options.headers = {}
        options.headers.Authorization = `Basic ${Buffer.from(`${username}:${password}`).toString("base64")}`
      }
    ]
  }
}

export default api
