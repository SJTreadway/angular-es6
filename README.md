Anagram Angular-Webpack-ES6 Application
================

Install
-------

Download code repository and install all client side (frontend) / server side (node) dependecies

    git clone https://github.com/SJTreadway/angular-es6.git
    cd angular-es6
    npm install

Launch Application
-----------

    npm start

Debug
-----

    gulp build
    node-debug server/dist/app.js

* Debugger (node-inspector) runs at http://127.0.0.1:8080/?ws=127.0.0.1:8080&port=5858 (wait for the assets to load)
* App runs at http://localhost:4000

Build
-----

    git pull
    npm install && gulp build

Set Environment Variables
-------------------------

set `NODE_ENV` env variable to 'production' or 'development' (default) accordingly
