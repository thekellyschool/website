#!/usr/bin/env bash


echo 'DEPLOYING'



# #!/usr/bin/env bash
# set -e
# MY_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
# GIT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
# cd $MY_DIR
# cd ../node/deploy
# rm -rf node_modules
# . ~/.nvm/nvm.sh > /dev/null 2>&1
# npm install > /dev/null 2>&1
# nvm use 6 > /dev/null 2>&1
# SYNC_DIR="$(./deploy.js)"
# rm -rf node_modules
# aws s3 sync --exclude 'jscss/*' --delete --content-type text/html $SYNC_DIR s3://glo.sh/$GIT_BRANCH
# aws s3 sync --include 'jscss/*' $SYNC_DIR s3://glo.sh/$GIT_BRANCH
# aws cloudfront create-invalidation \
#   --distribution-id E29S1AZ8HEMEO5 \
#   --paths '/*'


# vi ~/sync-website-to-s3.sh

# #!/usr/bin/env bash

# cd /home/ubuntu/static-web
# OUTPUT="$(git pull)"
# aws s3 sync /home/ubuntu/static-web s3://thekellyschool/website \
#   --exclude=.git/** \
#   --exclude=README.md
# if [ "$OUTPUT" != "Already up-to-date." ]; then
#   aws cloudfront create-invalidation \
#   --distribution-id E2HT5RYWP92IC4 \
#   --paths '/*'
# fi

# chmod +x ~/sync-website-to-s3.sh

# crontab -e
# * * * * * /home/ubuntu/sync-website-to-s3.sh >/dev/null 2>&1


# set -e
# MY_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
# GIT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
# cd $MY_DIR
# cd ../node/deploy
# rm -rf node_modules
# . ~/.nvm/nvm.sh > /dev/null 2>&1
# npm install > /dev/null 2>&1
# nvm use 6 > /dev/null 2>&1
# SYNC_DIR="$(./deploy.js)"
# rm -rf node_modules
# aws s3 sync --exclude 'jscss/*' --delete --content-type text/html $SYNC_DIR s3://glo.sh/$GIT_BRANCH
# aws s3 sync --include 'jscss/*' $SYNC_DIR s3://glo.sh/$GIT_BRANCH
# aws cloudfront create-invalidation \
#   --distribution-id E29S1AZ8HEMEO5 \
#   --paths '/*'