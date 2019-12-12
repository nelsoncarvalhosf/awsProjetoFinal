# ApiPagamentos.Buy

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **Number** | Valor da compra | 
**moeda** | **String** |  | [optional] 
**fret** | **Number** | Valor do frete | 
**info** | **String** | Informações sobre o pagamento | 
**installments** | **Number** | Quantidade de parcelas do pagamento | [optional] 
**cc** | **Number** | 4 digitos do cartao de credito para validar antifraude | [optional] 
**method** | **String** | Tipo de pagamento, visa, boleto, mastercard, etc | 
**user** | [**User**](User.md) |  | 


<a name="MethodEnum"></a>
## Enum: MethodEnum


* `creditoVisa` (value: `"credito visa"`)

* `debitoVisa` (value: `"debito visa"`)

* `creditoMastercard` (value: `"credito mastercard"`)

* `debitoMastercard` (value: `"debito mastercard"`)

* `boleto` (value: `"boleto"`)




