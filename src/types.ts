export type SpamExpertsConfiguration = {
  authentication: {
    basic?: {
      username: string
      password: string
    }
  }
  baseUrl: string
}

export type ResponseFormat = "json"|"plain"

// only includes implemented controllers
export type SeController = "domain"|"outgoingusers"|"domainslist"

export type SeActionDomain = "exists"|"edit"|"add"|"remove"|"getproducts"|"setproducts"|"gethardquota"|"getbandwidthusage"
export type SeActionDomainsList = "get"
export type SeActionOutgoingUsers = "addip"|"remove"

export type SeAction = {
  domain: SeActionDomain
  domainslist: SeActionDomainsList
  outgoingusers: SeActionOutgoingUsers
}
