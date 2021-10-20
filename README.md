# AppAvmWidget

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.5.

# Installation
If there is a dependency issue angular@common then use
npm i app-avm-widget --force

# Additional Step
In angular.json append {"input": "./node_modules/app-avm-widget/src/assets", "glob": "*", "output": "/assets"} in assets
e.g.
`
"assets": [
  ...
{"input": "./node_modules/app-avm-widget/src/assets", "glob": "*", "output": "/assets"},
  ...
],
`


# Usage
`<app-avm-widget rvmAddress=<Address> rvmWidgetKey=<APIKey> [style.display]="!isShow ? 'block' : 'none'"></app-avm-widget>`

The display is optional toggle using isShow variable
