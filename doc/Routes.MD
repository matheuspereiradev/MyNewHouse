# ROTAS

base URL: <http:localhost:8080>

>## PLANS [ ``/plans`` ]

[GET] ``/``

irá lhe retornar um array todos os planos ativos do sistema

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