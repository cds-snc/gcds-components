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
PUBLISHED_PACKAGE=$1@$PACKAGE_VERSION
echo "Uploading published package: $PUBLISHED_PACKAGE"
#PUBLISHED_PACKAGE="${{ steps.publish.outputs.id }}"

mkdir -p ./tmp \
  && npm install --prefix ./tmp "$PUBLISHED_PACKAGE" \
  && cd ./tmp/node_modules

aws s3 sync ./${{ matrix.name }} s3://${{ env.CDN_BUCKET }}/"$PUBLISHED_PACKAGE" --delete
aws s3 sync ./${{ matrix.name }} s3://${{ env.CDN_BUCKET }}/${{ matrix.name }}@latest --delete
aws s3api head-object --bucket ${{ env.CDN_BUCKET }} --key "$PUBLISHED_PACKAGE"/package.json
aws s3api head-object --bucket ${{ env.CDN_BUCKET }} --key ${{ matrix.name }}@latest/package.json

aws cloudfront create-invalidation --distribution-id ${{ secrets.CDN_CLOUDFRONT_DIST_ID }} --paths "/*"
