# ROTAS

base URL: <http:localhost:8080>

>## PLANS [ ``/plans`` ]

[GET] ``/``

irá lhe retornar um array todos os planos ativos do sistema

**RESPONSE:**
Valor     | Descrição |      Tipo
--------- | ------ | ------
**id** | o id do plano| number
**name** | o nome plano| string
**imageAmount** | quantidade de imagens que o assinante do plano pode enviar **por postagem**| number
**videoAmount** | quantidade de videos que o assinante do plano pode enviar **por postagem**| number
**monthlyValue** | valor pago mensalmente| number
**adsAmount** | quantidade de anúncios| number
**created_at** | data de criação do plano| Date
**deleted_at** | deta de exclusão do plano INDICA QUE O PLANO ESTÁ INATIVO para novos contratos| Date

<BR>

RESPONSE:
```json
[
  {
    "id",
    "name",
    "imageAmount",
    "videoAmount",
    "monthlyValue",
    "adsAmount",
    "created_at",
    "deleted_at"
  },
]

```
---
>## LOCATIONS [ ``/city`` ]

[GET] ``/{:uf}``

irá lhe retornar um array todas as cidades cadastradas
**REQUEST:**
```
ROUTE PARAMS:
{:uf} 
esse parametro corresponde à sigla do estado enviado, e é opcional, o envio do route param, uf, irá filtrar apenas cidades do estado enviado
```
<BR>

**RESPONSE:**
Valor     | Descrição |      Tipo
:---------: | :------: | ------
**id** | o id da cidade no sistema| number
**code** | código da cidade segundo o IBGE| number
**name** | nome da cidade| string
**uf** | sigla do estado da cidade| string
**created_at** | data de cadastro da cidade no sistema| Date



```json
[
  {
    "id",
    "code",
    "name",
    "uf",
    "created_at"
  },
]

```
---
>## FORGOT PASSWORD [ ``/forgotpassword`` ]

[PATCH] ``/sendmail/{:email}``

irá enviar um email de recuperação de senha para o email enviado
**REQUEST:**
```
ROUTE PARAMS:
{:email} 
esse parametro é obrigatorio e representa o email do usuário que quer recuperar a senha
```
<BR>

**RESPONSE:**
Valor     | Descrição |      Tipo
:---------: | :------: | ------
**status** | status do envio do email| string


```json
{
  "status"
}
```
---
>## FORGOT PASSWORD [ ``/forgotpassword`` ]

[PATCH] ``/changepassword/?code={:id}&email={:email}/``

irá enviar um email de recuperação de senha e o id do usuário

**REQUEST:**
```
QUERY PARAMS:

{:email} 
esse parametro é obrigatorio e representa o email do usuário que quer recuperar a senha
{:id} 
esse parametro é obrigatorio e representa o id do usuário que quer recuperar a senha
```

```json
BODY PARAMS:

{
	"password":string
}

password: nova senha

```
<BR>

**RESPONSE:**
Valor     | Descrição |      Tipo
:---------: | :------: | ------
**status** | status da troca da senha| string


```json
{
  "status"
}
```

---

>## healthz [ ``/healthz`` ]

[GET] ``/``

irá enviar um status da execução da API se ela está no ar


**RESPONSE:**
Valor     | Descrição |      Tipo
:---------: | :------: | ------
**status** | status de execução| string


```json
{
  "status"
}
```
---
>## PROPERTY [ ``/property`` ]

[GET] ``/``

irá enviar um array com todos os imóveis cadastrados

**RESPONSE**

```json
{
    "id",
    "street",
    "houseNumber",
    "district",
    "complement",
    "idCity",
    "idAdvertiser",
    "idContractType",
    "idPropertyType",
    "amountValue",
    "isFinancing",
    "latitude",
    "longitude",
    "amountBathroom",
    "amountBedroom",
    "amountParking",
    "hasPool",
    "note",
    "length",
    "width",
    "created_at",
    "deleted_at",
    "city": {
      "id",
      "code",
      "name",
      "uf",
      "created_at"
    },
    "advertiser": {
      "id",
      "idPlan",
      "name",
      "surname",
      "slug",
      "email",
      "birthDate",
      "cpf",
      "cnpj",
      "street",
      "houseNumber",
      "district",
      "complement",
      "reference",
      "phoneNumber",
      "phoneNumber2",
      "idCity",
      "avatar",
      "gender",
      "created_at",
      "deleted_at"
    },
    "contractType": {
      "id",
      "name"
    },
    "propertyType": {
      "id",
      "name"
    }
  }
```
