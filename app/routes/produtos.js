module.exports = function(app) {
    
    app.get('/', (req, res) => { res.json(paginaInicial) });

    app.post('/', (req, res) => { 
        res.json({
            'Solicitacao': 'post',
            'Entradas': req.body
        })
    });
    
    app.get('/rota/:entrada', (req, res) => { res.json({"entrada": req.params.entrada}) });

    app.get('/sobre', (req, res) => { res.json({
        app: 'Boilerplate Node',
        versao: '1.0.0',
        criador: 'J.Spinelli',
        informacoes: 'Qualquer problema é só abrir ISSUE ou Pull Request'
    }) })
}

var paginaInicial = {
    Hello: 'Hello'
}