# Boilerplate Node
Boilerplate básico para projetos Node

## Instalar

* Instalando Node 
  
  Clique no [link](https://nodejs.org/en/download/) para instalar o Node

* Instalando as dependências do Projeto
```
  npm install
```

* Executando o servidor
```
  nodemon app
```

## Testando
Navegador / Postman
* GET /

URL:
```
  http://localhost:3000/
```
Response JSON:
```
  {
    Hello: "Hello"
  }
```

* GET /rota/{path}

URL:
```
  http://localhost:3000/rota/Teste
```
Response JSON:
```
  {
    entrada: "Teste"
  }
```

* POST /

URL:
```
  http://localhost:3000/
```
BODY:
```
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
Response JSON:
```
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