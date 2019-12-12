# ApiPagamentos.ValidationApi

All URIs are relative to *https://virtserver.swaggerhub.com/Diogo-Perdigao/API-Pagamentos-Not-Format/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**antifraud**](ValidationApi.md#antifraud) | **POST** /validation/antifraud | Retorno do antifaude
[**complete**](ValidationApi.md#complete) | **POST** /validation/payment | Pagamento Aprovado


<a name="antifraud"></a>
# **antifraud**
> Object antifraud(authorization, code)

Retorno do antifaude

Retorno do serviço de antifraude para validação de dados do pagamento

### Example
```javascript
var ApiPagamentos = require('api_pagamentos');
var defaultClient = ApiPagamentos.ApiClient.instance;

// Configure OAuth2 access token for authorization: apikey_auth
var apikey_auth = defaultClient.authentications['apikey_auth'];
apikey_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new ApiPagamentos.ValidationApi();

var authorization = "authorization_example"; // String | Token de acesso obtido no endpoint de autenticação

var code = new ApiPagamentos.Authorization(); // Authorization | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.antifraud(authorization, code, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| Token de acesso obtido no endpoint de autenticação | 
 **code** | [**Authorization**](Authorization.md)|  | 

### Return type

**Object**

### Authorization

[apikey_auth](../README.md#apikey_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="complete"></a>
# **complete**
> Object complete(authorization, code)

Pagamento Aprovado

Recebe do serviço do banco informação que o valor foi pago pelo cartão ou o boleto foi pago

### Example
```javascript
var ApiPagamentos = require('api_pagamentos');
var defaultClient = ApiPagamentos.ApiClient.instance;

// Configure OAuth2 access token for authorization: apikey_auth
var apikey_auth = defaultClient.authentications['apikey_auth'];
apikey_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new ApiPagamentos.ValidationApi();

var authorization = "authorization_example"; // String | Token de acesso obtido no endpoint de autenticação

var code = new ApiPagamentos.Authorization(); // Authorization | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.complete(authorization, code, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| Token de acesso obtido no endpoint de autenticação | 
 **code** | [**Authorization**](Authorization.md)|  | 

### Return type

**Object**

### Authorization

[apikey_auth](../README.md#apikey_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

