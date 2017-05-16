var mongoose = require('mongoose');

var produtoModel = mongoose.model('produtos');

module.exports = function(app) {
  app.get('/api/produtos', function(req, resp) {
    produtoModel.find().then(function(dados){
      resp.json(dados);
    }, function(erro) {
      resp.status(500).json(erro);
    });
  });

  app.post('/api/produtos', function(req, resp) {
    produtoModel.create(req.body)
      .then(function(dado) {
        resp.json(dado);
      }, function(erro) {
        resp.status(500).json(erro);
      });
  });

  app.put('/api/produtos/:id', function(req, resp) {
    produtoModel.findByIdAndUpdate(req.params.id, req.body)
      .then(function(data) {
        resp.json(data);
      }, function(erro) {
        resp.status(500).json(erro);
      });
  });

  app.delete('/api/produtos/:id', function(req, resp) {
    produtoModel.remove({_id: req.params.id})
      .then(function() {
        resp.send();
      }, function(erro) {
        resp.status(500).json(erro);
      });
  });

  app.get('/api/produtos/:id', function(req, resp) {
    produtoModel.findById(req.params.id)
      .then(function(data) {
        resp.json(data);
      }, function(erro) {
        resp.status(500).json(erro);
      });
  });
};