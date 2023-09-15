# mixed-patterns-store

![tests-badge](https://github.com/augustorcn/mixed-patterns-store/actions/workflows/tests.yaml/badge.svg)

# Intro

Implementation of the code produced through the [Clean Code And Clean Architecture course](https://branas.io/) from [Rodrigo Branas](https://github.com/rodrigobranas).

##### Important links

- [Ports and Adapters](https://alistair.cockburn.us/hexagonal-architecture/)
- [Uncle Bob Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)

## How to run

```sh
docker compose up -d
```

#### Test services

```sh
yarn --cwd ./auth/ test && \
yarn --cwd ./catalog/ test && \
yarn --cwd ./checkout/ test && \
yarn --cwd ./freight/ test
```
