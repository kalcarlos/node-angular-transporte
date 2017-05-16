var mongoose = require('mongoose');

var motoristaModel = mongoose.model('motoristas');

module.exports = function(app) {
  app.get('/api/motoristas', function(req, resp) {
    motoristaModel.find().populate('veiculo', 'placa modelo')
      .then(function(dados){
        resp.json(dados);
    }, function(erro) {
      resp.status(500).json(erro);
    });
  });

  app.post('/api/motoristas', function(req, resp) {
    motoristaModel.create(req.body)
      .then(function(dado) {
        resp.json(dado);
      }, function(erro) {
        resp.status(500).json(erro);
      });
  });

  app.put('/api/motoristas/:id', function(req, resp) {
    motoristaModel.findByIdAndUpdate(req.params.id, req.body)
      .then(function(data) {
        resp.json(data);
      }, function(erro) {
        resp.status(500).json(erro);
      });
  });

  app.delete('/api/motoristas/:id', function(req, resp) {
    motoristaModel.remove({_id: req.params.id})
      .then(function() {
        resp.send();
      }, function(erro) {
        resp.status(500).json(erro);
      });
  });

  app.get('/api/motoristas/:id', function(req, resp) {
    motoristaModel.findById(req.params.id)
      .then(function(data) {
        resp.json(data);
      }, function(erro) {
        resp.status(500).json(erro);
      });
  });
};