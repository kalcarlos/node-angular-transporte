var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var _model = new Schema({
  descricao: String,
  tipo: String,
  quantidade: String
});

mongoose.model('produtos', _model);