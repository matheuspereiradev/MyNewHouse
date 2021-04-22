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

>## LOCATIONS [ ``/city`` ]

[GET] ``/{:uf}``

irá lhe retornar um array todas as cidades cadastradas
**REQUEST:**
```
{:uf} 
ESSE PARAMETRO CORRESPONDE À SIGLA DO ESTADO ENVIADO, E É OPCIONAL, O ENVIO DO ROUTE PARAM, UF, IRÁ FILTRAR APENAS CIDADES DO ESTADO ENVIADO
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