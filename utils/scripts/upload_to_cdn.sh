#!/bin/bash

# Get the published package name
PUBLISHED_PACKAGE=$1
#PUBLISHED_PACKAGE="${{ steps.publish.outputs.id }}"

mkdir -p ./tmp \
  && sleep 60 \
  && npm install --prefix ./tmp "$PUBLISHED_PACKAGE" \
  && cd ./tmp/node_modules

aws s3 sync ./${{ matrix.name }} s3://${{ env.CDN_BUCKET }}/"$PUBLISHED_PACKAGE" --delete
aws s3 sync ./${{ matrix.name }} s3://${{ env.CDN_BUCKET }}/${{ matrix.name }}@latest --delete
aws s3api head-object --bucket ${{ env.CDN_BUCKET }} --key "$PUBLISHED_PACKAGE"/package.json
aws s3api head-object --bucket ${{ env.CDN_BUCKET }} --key ${{ matrix.name }}@latest/package.json

aws cloudfront create-invalidation --distribution-id ${{ secrets.CDN_CLOUDFRONT_DIST_ID }} --paths "/*"
