var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var _model = new Schema({
  nome: String,
  cpf: String,
  dataNascimento: {
    type: Date
  },
  veiculo: {
    type: Schema.Types.ObjectId,
    ref: 'veiculos'
  }
});

mongoose.model('motoristas', _model);