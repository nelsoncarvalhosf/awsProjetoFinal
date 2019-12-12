# ApiPagamentos.PaymentApi

All URIs are relative to *https://virtserver.swaggerhub.com/Diogo-Perdigao/API-Pagamentos-Not-Format/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getBillet**](PaymentApi.md#getBillet) | **GET** /billet/{id} | Gera boleto
[**getPagamento**](PaymentApi.md#getPagamento) | **GET** /buy/{id} | Retorna o status do pagamento
[**setPagamento**](PaymentApi.md#setPagamento) | **POST** /buy | Registrar Pedido


<a name="getBillet"></a>
# **getBillet**
> getBillet(id)

Gera boleto

Mostra o boleto para pagamento

### Example
```javascript
var ApiPagamentos = require('api_pagamentos');
var defaultClient = ApiPagamentos.ApiClient.instance;

// Configure OAuth2 access token for authorization: apikey_auth
var apikey_auth = defaultClient.authentications['apikey_auth'];
apikey_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new ApiPagamentos.PaymentApi();

var id = 8.14; // Number | Identificador da compra


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getBillet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Identificador da compra | 

### Return type

null (empty response body)

### Authorization

[apikey_auth](../README.md#apikey_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/html; charset=utf-8

<a name="getPagamento"></a>
# **getPagamento**
> Object getPagamento(authorization, id)

Retorna o status do pagamento

Identifica o pagamento pelo seu ID

### Example
```javascript
var ApiPagamentos = require('api_pagamentos');
var defaultClient = ApiPagamentos.ApiClient.instance;

// Configure OAuth2 access token for authorization: apikey_auth
var apikey_auth = defaultClient.authentications['apikey_auth'];
apikey_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new ApiPagamentos.PaymentApi();

var authorization = "authorization_example"; // String | Token de acesso obtido no endpoint de autenticação

var id = 8.14; // Number | Identificador da compra


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPagamento(authorization, id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| Token de acesso obtido no endpoint de autenticação | 
 **id** | **Number**| Identificador da compra | 

### Return type

**Object**

### Authorization

[apikey_auth](../README.md#apikey_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="setPagamento"></a>
# **setPagamento**
> Object setPagamento(authorization, opts)

Registrar Pedido

Registra pedido de pagamento iniciando processo de compra

### Example
```javascript
var ApiPagamentos = require('api_pagamentos');
var defaultClient = ApiPagamentos.ApiClient.instance;

// Configure OAuth2 access token for authorization: apikey_auth
var apikey_auth = defaultClient.authentications['apikey_auth'];
apikey_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new ApiPagamentos.PaymentApi();

var authorization = "authorization_example"; // String | Token de acesso obtido no endpoint de autenticação

var opts = { 
  'buy': new ApiPagamentos.Buy() // Buy | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.setPagamento(authorization, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| Token de acesso obtido no endpoint de autenticação | 
 **buy** | [**Buy**](Buy.md)|  | [optional] 

### Return type

**Object**

### Authorization

[apikey_auth](../README.md#apikey_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

