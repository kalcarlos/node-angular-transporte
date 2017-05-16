var mongoose = require('mongoose');

var enderecoModel = mongoose.model('enderecos');

module.exports = function(app) {
  app.get('/api/enderecos', function(req, resp) {
    enderecoModel.find().then(function(dados){
      resp.json(dados);
    }, function(erro) {
      resp.status(500).json(erro);
    });
  });

  app.post('/api/enderecos', function(req, resp) {
    enderecoModel.create(req.body)
      .then(function(dado) {
        resp.json(dado);
      }, function(erro) {
        resp.status(500).json(erro);
      });
  });

  app.put('/api/enderecos/:id', function(req, resp) {
    enderecoModel.findByIdAndUpdate(req.params.id, req.body)
      .then(function(data) {
        resp.json(data);
      }, function(erro) {
        resp.status(500).json(erro);
      });
  });

  app.delete('/api/enderecos/:id', function(req, resp) {
    enderecoModel.remove({_id: req.params.id})
      .then(function() {
        resp.send();
      }, function(erro) {
        resp.status(500).json(erro);
      });
  });

  app.get('/api/enderecos/:id', function(req, resp) {
    enderecoModel.findById(req.params.id)
      .then(function(data) {
        resp.json(data);
      }, function(erro) {
        resp.status(500).json(erro);
      });
  });
};