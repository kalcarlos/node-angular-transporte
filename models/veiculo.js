var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var _model = new Schema({
  placa: String,
  modelo: String,
  marca: String,
  cor: String
});

mongoose.model('veiculos', _model);