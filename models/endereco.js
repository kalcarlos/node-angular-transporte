var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var _model = new Schema({
  logradouro: String,
  bairro: String,
  cidade: String,
  pais: String
});

mongoose.model('enderecos', _model);