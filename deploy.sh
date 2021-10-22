#/usr/bin/env bash

rm -rf dist
echo "Increment Version Inside products/app-avm-widget/package.json"
npm install && npm run build
npm list npm-cli-login || npm i npm-cli-login
echo "Build Package To publish"
echo -n Password: 
read -s password
npm-cli-login -u sameer-cakesoftech -p $password -e sameer@cakesofttech.com -r https://registry.npmjs.org/
cd dist/app-avm-widget
npm publish
echo "success: Published package"