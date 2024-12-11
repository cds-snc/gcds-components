#!/bin/bash

PACKAGE_NAME=$1

## Path to the release manifest which has the version numbers
RELEASE_PLEASE_MANIFEST=".release-please-manifest.json"

# Check if lerna.json exists
if [ ! -f "$RELEASE_PLEASE_MANIFEST" ]; then
  echo ".release-please-manifest.json not found!"
  exit 1
fi

echo "Current working directory: $(pwd)"

## Read and process lerna.json using jq to get the package version
PACKAGE_VERSION=$(jq -r '."packages/web"' $RELEASE_PLEASE_MANIFEST)

echo "PACKAGE_VERSION: $PACKAGE_VERSION"
echo "CDN_BUCKET: $CDN_BUCKET"
echo "PACKAGE_PATH: $PACKAGE_PATH"
echo "PACKAGE_NAME: $PACKAGE_NAME"

# Get the published package name and version
PUBLISHED_PACKAGE=$PACKAGE_NAME@$PACKAGE_VERSION

# Install the package from npm
install_package(){
  echo "Installing package: $PUBLISHED_PACKAGE"
  mkdir -p ./tmp \
    && npm install --prefix ./tmp "$PUBLISHED_PACKAGE" \
    && cd ./tmp/node_modules
}

# Upload the package files to the CDN
upload_to_cdn() {
  echo "Uploading published package to CDN: $PUBLISHED_PACKAGE"
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
    # Upload the package to the CDN if the package is available and was installed
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
