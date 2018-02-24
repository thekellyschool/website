#!/usr/bin/env bash

echo 'deploy.sh'

# Make sure we are in the right directory.
MY_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd $MY_DIR
cd ..

# Sync with S3
aws s3 sync \
  ./ \
  s3://thekellyschool/website \
  --exclude=.git/** \
  --exclude=bin/** \
  --exclude=README.md

# Tell CloudFront that there are new files on S3 to fetch.
aws cloudfront create-invalidation \
  --distribution-id E2HT5RYWP92IC4 \
  --paths '/*'

