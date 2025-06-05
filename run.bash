#!/bin/bash

# Exit on any error
set -e

echo "🔥 Cleaning old build and cache..."
rm -rf .parcel-cache dist

echo "🔧 Building project..."
npm run build

echo "🚀 Serving 'dist'..."
npx serve -s dist
echo "✅ Build and serve completed successfully!"