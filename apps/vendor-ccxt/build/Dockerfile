# syntax = docker/dockerfile:1.4

FROM node:18.17.0-bullseye-slim

LABEL maintainer="Siyuan Wang <c.one@thrimbda.com>"

# https://github.com/nodejs/docker-node/blob/main/docs/BestPractices.md#handling-kernel-signals
ARG TINI_VERSION=v0.19.0
ADD https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini /tini
RUN chmod a+x /tini
ENTRYPOINT ["/tini", "--"]

USER node

WORKDIR /app

ENV NODE_ENV=production

COPY --chown=node:node ./out/vendor-ccxt-out /app

RUN node create-links.js create

WORKDIR /app/vendors/ccxt

# USER nobody
CMD ["node", "./lib/index.js"]