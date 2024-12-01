# SpamExperts Node SDK

This SDK covers a subset of the SpamExperts API. It's possible to add/remove domains and set their enabled products.

## Installation

1. Add the repository as a submodule to your git repository.
2. In the root of your npm project, run `npm install <path-to-submodule>`

## Setup

The SDK needs to be configured with your SpamExperts API credentials and url. This can be done by calling `configure()` with a configuration object.

```js
import { configure } from "spamexperts-sdk"

configure({
  authentication: {
    basic: {
      username: "wf-api",
      password: "sEA#8Mf@WH^VWJhl"
    }
  },
  baseUrl: "https://api.spamexperts.com/api"
})
```

## Usage

### Domains

#### List domains

```js
import { domain } from "spamexperts-sdk"

const domains = await domain.list()
```

#### Add a domain

```js
import { domain } from "spamexperts-sdk"

await domain.add({
  domain: "example.com",
  destinations: ["example.org", "127.0.0.1"],
  aliases: ["www.example.com"]
})
```
