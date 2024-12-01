export type ResponseBase<T = never> = {
  messages: string[] | {
    success: string[]
    error: string[]
  }
  result: T|null
}
