# Cors

Middleware for Dylan which enables cors handling.

## Install

`npm install @dylan/cors`

## Usage

``` js
const dylan = require('dylan');
const cors = require('@dylan/cors');
const app = dylan();

app.use(cors({
  allowHeaders: 'Content-Type, X-Requested-With',
  allowlist: ['https://foo.org', 'https://boo.org']
}));
```
