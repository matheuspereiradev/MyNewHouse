# MOVIDO PARA O TRELLO

# TODO LIST

## MODULO DE USUÁRIO

#### RECUPERAR SENHA

- ~~deve enviar um email com um link de recuperação~~
- ~~deve recuperar a senha~~
- após uma hora da solicitação o link deve expirar

#### ✓ LOGIN

- ~~deve se criar uma sessão para o usuário mediante login e senha~~

#### LOGOUT

- Token que fizeram logout devem ser invalidados

#### CADASTRAR NO SISTEMA

- ~~usuário deve poder se cadastrar no sistema~~
- ~~deve enviar um email de boas vindas~~
- usuário pode alterar seu avatar
- ~~adicionar sobrenome~~

#### CANCELAR ASSINATURA

- usuário deve cancelar sua assinatura no sistema

#### ATUALIZAR INFORMAÇÕES

- sistema deve listar dados da conta do usuário
- usuário deve poder editar suas informações
- usuário deve poder atualizar seu avatar
---
## PLANOS

#### ✓ DEFINIR PLANO DEFAULT FREE

- ~~TODOS usuários devem ser associados a um plano~~
- ~~por padrão esse deve ser o FREE~~

#### LISTAR PLANOS

- sistema deve prover uma lista com todos os planos ativos
- sistema deve listar detalhes de um plano específico

#### COMPRAR PLANO

- usuário deve poder assinar um novo plano
- deve-se gerar um pagamento no sistema
- ele deve poder pagar por esse plano por meio do sistema em cartão ou pix
- cada plano deve ter uma quantidade mensal de boost

#### [ERROR] VALIDAR ID DO FIND

- Validar quando enviar input inválido


---
## MODULO DE IMOVEIS

#### CADASTRAR IMOVEIS

- usuário deve poder cadastrar casa
- o sistema deve limitar o usuário À quantidade permitida no seu plano
- enviar imagens do imóvel respeitando a qunatidade permitida pelo plano
- sistema deve ter as informações de tipo de imóvel, tipo de contrato, forma de pagamento, 

#### FAVORITAR UM IMÓVEL

- deve ser possivel ao usuário favoritar um imóvel
- o usuário deve poder listar seus imoveis favoritos

#### ATUALIZAR IMOVEL

- corretor pode atualizar informações 
- corretor pode definir imóvel como vendido
- corretor pode enviar novas imagens
- corretor pode enviar UM video por imóvel caso o plano permita esse nao pode passar 200MB

#### CORRETOR PODE APAGAR O ANUNCIO DO IMÓVEL

- corretor pode apagar o anúncio do imóvel
- devem ser apagadas as imagens/videos do imóvel
- UM USUÁRIO SO PODE APAGAR OS PROPRIOS ANUNCIOS

#### LISTAR IMÓVEIS

-  usuário deve poder filtrar imóveis
-  deve ser exibida lista com todos os imóveis de um anunciantes
-  deve ser exibida informações detalhadas de um imóvel

#### DENUNCIAR ANUNCIOS

- usuário pode denunciar anuncio
- ao fazer uma denuncia deve-se enviar para a adminisração um email e para o anunciante
- se a dunucia for aceita o anuncio deve ser removido
- apos cada denuncia o alcance é diminuido
- apos 4 anuncios removidos o usuário tem sua conta suspensa

---

# FEATURES PARA O FUTURO

#### CADASTRAR PLANO

- administrador deve poder cadastrar planos

## COTAÇÕES

#### FAZER COTAÇÃO

- o usuário pode fazer cotação de um imovel com a caixa por meio do sistema

## MODULO BOLETOS [em espera]

#### GERAR BOLETOS EM API EXTERNA

- gerar boleto em uma API externa

#### SALVAR DADOS DO BOLETO



#### REALIZAR PAGAMENTO
