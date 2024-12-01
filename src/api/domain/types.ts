// domain

import { ResponseBase } from "../response.js"

export type DomainListResponse = ResponseBase<string[]>

export type DomainAddResponse = ResponseBase
export type DomainRemoveResponse = ResponseBase

export type DomainExistsResponse = ResponseBase<{ present: 1 }|null>

export interface DomainAddPayload {
  domain: string // New domain
  destinations?: string[] // Destination hostnames or IP addresses for clean email
  aliases?: string[] // The new domain's aliases
}

// products

export type DomainProduct = "incoming"|"outgoing"|"archiving"

export type DomainGetProductsResponse = ResponseBase<Record<DomainProduct, 0|1>>
export type DomainSetProductsResponse = ResponseBase

