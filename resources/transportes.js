var mongoose = require('mongoose');

var transporteModel = mongoose.model('transportes');

module.exports = function(app) {
  app.get('/api/transportes', function(req, resp) {
    transporteModel.find().populate({path: 'produto rota empresa', populate:{path: 'endereco origem destino motorista'}})
      .then(function(dados){
        resp.json(dados);
    }, function(erro) {
      resp.status(500).json(erro);
    });
  });

  app.post('/api/transportes', function(req, resp) {
    transporteModel.create(req.body)
      .then(function(dado) {
        resp.json(dado);
      }, function(erro) {
        resp.status(500).json(erro);
      });
  });

  app.put('/api/transportes/:id', function(req, resp) {
    transporteModel.findByIdAndUpdate(req.params.id, req.body)
      .then(function(data) {
        resp.json(data);
      }, function(erro) {
        resp.status(500).json(erro);
      });
  });

  app.delete('/api/transportes/:id', function(req, resp) {
    transporteModel.remove({_id: req.params.id})
      .then(function() {
        resp.send();
      }, function(erro) {
        resp.status(500).json(erro);
      });
  });

  app.get('/api/transportes/:id', function(req, resp) {
    transporteModel.findById(req.params.id)
      .then(function(data) {
        resp.json(data);
      }, function(erro) {
        resp.status(500).json(erro);
      });
  });
};