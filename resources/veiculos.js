var mongoose = require('mongoose');

var veiculoModel = mongoose.model('veiculos');

module.exports = function(app) {
  app.get('/api/veiculos', function(req, resp) {
    veiculoModel.find().then(function(dados){
      resp.json(dados);
    }, function(erro) {
      resp.status(500).json(erro);
    });
  });

  app.post('/api/veiculos', function(req, resp) {
    veiculoModel.create(req.body)
      .then(function(dado) {
        resp.json(dado);
      }, function(erro) {
        resp.status(500).json(erro);
      });
  });

  app.put('/api/veiculos/:id', function(req, resp) {
    veiculoModel.findByIdAndUpdate(req.params.id, req.body)
      .then(function(data) {
        resp.json(data);
      }, function(erro) {
        resp.status(500).json(erro);
      });
  });

  app.delete('/api/veiculos/:id', function(req, resp) {
    veiculoModel.remove({_id: req.params.id})
      .then(function() {
        resp.send();
      }, function(erro) {
        resp.status(500).json(erro);
      });
  });

  app.get('/api/veiculos/:id', function(req, resp) {
    veiculoModel.findById(req.params.id)
      .then(function(data) {
        resp.json(data);
      }, function(erro) {
        resp.status(500).json(erro);
      });
  });
};