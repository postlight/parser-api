# Mercury Parser API

[![Greenkeeper badge](https://badges.greenkeeper.io/postlight/mercury-parser-api.svg)](https://greenkeeper.io/)

This repo provides a drop-in replacement for the [Mercury Parser](https://github.com/postlight/mercury-parser) API. 
In fact, this [AWS Lambda](https://aws.amazon.com/lambda/)-based API for running the Mercury Parser is the same code 
and serverless infrastructure that powered the Mercury Parser API.

## Installation

```bash
# If you don't already have the mercury parser api installed, do that
git clone https://github.com/postlight/mercury-parser-api.git

# Install dependencies
yarn install
```

### API Gateway-like local dev server

To spin up a local dev server that will more closely match the API Gateway endpoint/experience:

```bash
yarn serve
```

## Deploy

Assuming you've already [set up your default AWS credentials](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html#cli-quick-configuration) (or have set a different AWS profile via [the profile field](serverless.yml#L21)), simply run:

```bash
yarn deploy
```

`yarn deploy` will deploy to "dev" environment. You can deploy to `stage` or `prod`
with:

```bash
yarn deploy:stage

# -- or --

yarn deploy:prod
```

After you've deployed, the output of the deploy script will give you the API endpoint
for your deployed function(s), so you should be able to test the deployed API via that URL.

## License

Licensed under either of the below, at your preference:

- Apache License, Version 2.0
  ([LICENSE-APACHE](LICENSE-APACHE) or http://www.apache.org/licenses/LICENSE-2.0)
- MIT license
  ([LICENSE-MIT](LICENSE-MIT) or http://opensource.org/licenses/MIT)

## Contribution

Unless it is explicitly stated otherwise, any contribution intentionally submitted for inclusion in the work, as defined in the Apache-2.0 license, shall be dual licensed as above without any additional terms or conditions.
