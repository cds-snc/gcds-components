#!/bin/bash



## Path to lerna.json
#LERNA_JSON="lerna.json"
#
## Check if lerna.json exists
#if [ ! -f "$LERNA_JSON" ]; then
#  echo "lerna.json not found!"
#  exit 1
#fi
#
## Read and process lerna.json using jq
#PACKAGE_VERSION=$(jq -r '.version' $LERNA_JSON)
#
#echo "Lerna version: $PACKAGE_VERSION"

# Get the published package name
echo "PACKAGE_VERSION: $PACKAGE_VERSION"
echo "CDN_BUCKET: $CDN_BUCKET"
echo "PACKAGE_PATH: $PACKAGE_PATH"

PUBLISHED_PACKAGE=$1@$PACKAGE_VERSION
echo "Uploading published package: $PUBLISHED_PACKAGE"

# AWS credentials not getting through here
# fatal error: Unable to locate credentials
# Verify AWS credentials
aws sts get-caller-identity

# Your AWS CLI command here
#aws s3 ls

#PUBLISHED_PACKAGE="${{ steps.publish.outputs.id }}"
#CDN_BUCKET=$2
#CDN_CLOUDFRONT_DIST_ID=$3
#PACKAGE_NAME=$4
install_package(){
  echo "Installing package: $PUBLISHED_PACKAGE"
  mkdir -p ./tmp \
    && npm install --prefix ./tmp "$PUBLISHED_PACKAGE" \
    && cd ./tmp/node_modules
}

upload_to_cdn() {
#  mkdir -p ./tmp \
#    && npm install --prefix ./tmp "$PUBLISHED_PACKAGE" \
#    && cd ./tmp/node_modules

  echo "Uploading package to CDN: $PUBLISHED_PACKAGE"
  aws s3 sync ./$PACKAGE_NAME s3://$CDN_BUCKET/"$PUBLISHED_PACKAGE" --delete
  aws s3 sync ./$PACKAGE_NAME s3://$CDN_BUCKET/$PACKAGE_NAME@latest --delete
  aws s3api head-object --bucket $CDN_BUCKET --key "$PUBLISHED_PACKAGE"/package.json
  aws s3api head-object --bucket $CDN_BUCKET --key $PACKAGE_NAME@latest/package.json

  aws cloudfront create-invalidation --distribution-id $CDN_CLOUDFRONT_DIST_ID --paths "/*"
}

# Retry function
retry() {
  local retries=$1
  local delay=$2
  local count=0

  while [[ $count -lt $retries ]]; do
    if install_package; then
      upload_to_cdn
      return 0
    fi

    count=$((count + 1))
    echo "Retry $count/$retries failed. Retrying in $delay seconds..."
    sleep $delay
  done

  echo "All $retries retries failed."
  return 1
}

# Retry 3 times with a 5-second delay in between
retry 3 5
