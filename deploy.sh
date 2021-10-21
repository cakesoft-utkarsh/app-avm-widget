#/usr/bin/env bash

rm -rf dist
echo "Increment Version Inside products/app-avm-widget/package.json"
npm install && npm run build
echo "Build Package To publish"
echo -n Password: 
read -s password
npm-cli-login -u sameer-cakesoftech -p $password -e sameer@cakesofttech.com -r https://registry.npmjs.org/app-avm-widget
cd dist/app-avm-widget
npm publish
echo "success: Published package"