# api_pagamentos

ApiPagamentos - JavaScript client for api_pagamentos
Este é um exemplo de serviço de validação de pagamentos
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 1.0.0
- Package version: 1.0.0
- Build package: io.swagger.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install api_pagamentos --save
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing 
into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your api_pagamentos from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('api_pagamentos')` in javascript files from the directory you ran the last 
command above from.

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/YOUR_USERNAME/api_pagamentos
then install it via:

```shell
    npm install YOUR_USERNAME/api_pagamentos --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually 
use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var ApiPagamentos = require('api_pagamentos');

var defaultClient = ApiPagamentos.ApiClient.instance;

// Configure OAuth2 access token for authorization: apikey_auth
var apikey_auth = defaultClient.authentications['apikey_auth'];
apikey_auth.accessToken = "YOUR ACCESS TOKEN"

var api = new ApiPagamentos.PaymentApi()

var id = 8.14; // {Number} Identificador da compra


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.getBillet(id, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://virtserver.swaggerhub.com/Diogo-Perdigao/API-Pagamentos-Not-Format/1.0.0*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*ApiPagamentos.PaymentApi* | [**getBillet**](docs/PaymentApi.md#getBillet) | **GET** /billet/{id} | Gera boleto
*ApiPagamentos.PaymentApi* | [**getPagamento**](docs/PaymentApi.md#getPagamento) | **GET** /buy/{id} | Retorna o status do pagamento
*ApiPagamentos.PaymentApi* | [**setPagamento**](docs/PaymentApi.md#setPagamento) | **POST** /buy | Registrar Pedido
*ApiPagamentos.ValidationApi* | [**antifraud**](docs/ValidationApi.md#antifraud) | **POST** /validation/antifraud | Retorno do antifaude
*ApiPagamentos.ValidationApi* | [**complete**](docs/ValidationApi.md#complete) | **POST** /validation/payment | Pagamento Aprovado


## Documentation for Models

 - [ApiPagamentos.Authorization](docs/Authorization.md)
 - [ApiPagamentos.Buy](docs/Buy.md)
 - [ApiPagamentos.Payment](docs/Payment.md)
 - [ApiPagamentos.Status](docs/Status.md)
 - [ApiPagamentos.User](docs/User.md)


## Documentation for Authorization


### api_key

- **Type**: API key
- **API key parameter name**: api_key
- **Location**: HTTP header

### apikey_auth

- **Type**: OAuth
- **Flow**: implicit
- **Authorization URL**: https://auth.aws.com/oauth/login
- **Scopes**: 
  - write:payment: add payment
  - read:payment: read payments
