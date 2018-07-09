### Boilerplate Node
Boilerplate básico para projetos Node

##Instalar

* Intalando as dependências do Projeto
```shell
  npm install
```

* Executando o servidor
```shell
  nodemon app
```

##Testando
#Navegador / Postman
* GET /
URL: ```shell
  http://localhost:3000/
```
Response JSON: ```shell
  {
    Hello: "Hello"
  }
```

* GET /rota/{path}
URL: ```shell
  http://localhost:3000/rota/Teste
```
Response JSON: ```shell
  {
    entrada: "Teste"
  }
```

* POST /
URL: ```shell
  http://localhost:3000/
```
BODY: ```shell
  {
    "valor1": "valor 1",
    "valor2": "valor 2", 
    "numerico1": 1234, 
    "numerico2": 5678, 
    "boolean1": true, 
    "boolean2": false,
    "estrutura": {
      "var1": 1,
      "var2": 2,
      "var3": "3"
    }
  }
```
Response JSON: ```shell
  {
    "Solicitacao": "post",
    "Entradas": {
        "valor1": "valor 1",
        "valor2": "valor 2",
        "numerico1": 1234,
        "numerico2": 5678,
        "boolean1": true,
        "boolean2": false,
        "estrutura": {
            "var1": 1,
            "var2": 2,
            "var3": "3"
        }
    }
  }
```