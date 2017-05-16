var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var _model = new Schema({
  nomeFantasia: String,
  razaoSocial: String,
  cnpj: String,
  endereco:{
    type: Schema.Types.ObjectId,
    ref: 'enderecos'
  }
});

mongoose.model('empresas', _model);