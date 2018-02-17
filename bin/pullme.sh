#!/usr/bin/env bash
set -e

# We can run this every minute. It's cheap and safe.
# crontab -e
# * * * * * pullme.sh >/dev/null 2>&1

# Make sure we are in the right directory.
MY_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd $MY_DIR
cd ..

# Pull down changes from git.
OUTPUT="$(git pull)"
echo "$OUTPUT"

# Check and see if I have been updated.
if [[ "$OUTPUT" = "Already"* ]]; then
  # If not, do nothing.
  echo "Not Deploying"
else
  # If yes, run my deployment script.
  echo "Deploying"
  $MY_DIR/deploy.sh
fi