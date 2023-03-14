instalar o XAMPP e rodar os servidores MySQL e Apache


>npm init -y     -   criar algumas configurações

>npm install express mysql dotenv cors body-parser

express - node
mysql   - db
dotenv  - var de ambiente
cors    - mec requisição
bod-parser - tratar corpo da requisição
nodemon - server - dep Dev


>npm install nodemon --save-dev


Criar pasta src e o arquivo var.env   -   onde vamos definir variaveis do projeto

criar arquivo server.js na src

"scripts": {
    "start": "nodemon ./src/server.js",


npm start para rodar

get - select
post - insert
put - update
delete - delete


http://localhost:3000/api/agendaexibir

consumir no emulador:
/*
consumindo API local
  useEffect(() => {
    testarApi()
  }, [])

  async function testarApi() {
    let res = await fetch('http://10.0.2.2:3000/api/agendaexibir')
    let retorno = await res.json()
    console.log(retorno)   
  }
  */

 console.log(retorno.result[1].id)

    let res = await fetch('http://10.0.2.2:3000/api/carroMod/vectra')


rotas//
router.post('/agendacad', AgendaController.inserirAgenda)
router.get('/agendaexibir', AgendaController.buscarTodos)
