#!/bin/bash

# Required parameters:
# @raycast.schemaVersion 1
# @raycast.title Update Bookshelf
# @raycast.mode compact

# Optional parameters:
# @raycast.icon 🤖

# Documentation:
# @raycast.description Fires curl request to Netlify build hooks

## Andrewhudson.dev deploy Hook
## https://api.netlify.com/build_hooks/65c1f12e43d606539f68b7ff
curl -X POST -d {} https://api.netlify.com/build_hooks/65c1f12e43d606539f68b7ff

echo 'Deploying andrewhudson.dev'

## bigandy-astro.netlify.app deploy hook
## https://api.netlify.com/build_hooks/65c1f1a42e945b56c3fedce2
curl -X POST -d {} https://api.netlify.com/build_hooks/65c1f1a42e945b56c3fedce2
echo 'Deploying bigandy-astro.netlify.app'