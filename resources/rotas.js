var mongoose = require('mongoose');

var rotaModel = mongoose.model('rotas');

module.exports = function(app) {
  app.get('/api/rotas', function(req, resp) {
    rotaModel.find().populate({path: 'motorista origem destino', populate:{path: 'veiculo'}})
      .then(function(dados){
        resp.json(dados);
    }, function(erro) {
      resp.status(500).json(erro);
    });
  });

  app.post('/api/rotas', function(req, resp) {
    rotaModel.create(req.body)
      .then(function(dado) {
        resp.json(dado);
      }, function(erro) {
        resp.status(500).json(erro);
      });
  });

  app.put('/api/rotas/:id', function(req, resp) {
    rotaModel.findByIdAndUpdate(req.params.id, req.body)
      .then(function(data) {
        resp.json(data);
      }, function(erro) {
        resp.status(500).json(erro);
      });
  });

  app.delete('/api/rotas/:id', function(req, resp) {
    rotaModel.remove({_id: req.params.id})
      .then(function() {
        resp.send();
      }, function(erro) {
        resp.status(500).json(erro);
      });
  });

  app.get('/api/rotas/:id', function(req, resp) {
    rotaModel.findById(req.params.id)
      .then(function(data) {
        resp.json(data);
      }, function(erro) {
        resp.status(500).json(erro);
      });
  });
};