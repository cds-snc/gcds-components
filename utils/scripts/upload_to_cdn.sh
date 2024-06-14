#!/bin/bash

# Path to lerna.json
LERNA_JSON="lerna.json"

# Check if lerna.json exists
if [ ! -f "$LERNA_JSON" ]; then
  echo "lerna.json not found!"
  exit 1
fi

# Read and process lerna.json using jq
PACKAGE_VERSION=$(jq -r '.version' $LERNA_JSON)

echo "Lerna version: $PACKAGE_VERSION"

# Get the published package name
echo "PACKAGE_VERSION: $PACKAGE_VERSION"
echo "CDN_BUCKET: $CDN_BUCKET"
echo "PACKAGE_PATH: $PACKAGE_PATH"

PUBLISHED_PACKAGE=$1@$PACKAGE_VERSION
echo "Uploading published package: $PUBLISHED_PACKAGE"
#PUBLISHED_PACKAGE="${{ steps.publish.outputs.id }}"
#CDN_BUCKET=$2
#CDN_CLOUDFRONT_DIST_ID=$3
#PACKAGE_NAME=$4

mkdir -p ./tmp \
  && npm install --prefix ./tmp "$PUBLISHED_PACKAGE" \
  && cd ./tmp/node_modules

aws s3 sync ./$PACKAGE_NAME s3://$CDN_BUCKET/"$PUBLISHED_PACKAGE" --delete
aws s3 sync ./$PACKAGE_NAME s3://$CDN_BUCKET/$PACKAGE_NAME@latest --delete
aws s3api head-object --bucket $CDN_BUCKET --key "$PUBLISHED_PACKAGE"/package.json
aws s3api head-object --bucket $CDN_BUCKET --key $PACKAGE_NAME@latest/package.json

aws cloudfront create-invalidation --distribution-id $CDN_CLOUDFRONT_DIST_ID --paths "/*"
