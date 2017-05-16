var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var _model = new Schema({
  descricao: String,
  origem: {
    type: Schema.Types.ObjectId,
    ref: 'enderecos'
  },
  destino: {
    type: Schema.Types.ObjectId,
    ref: 'enderecos'
  },
  qtdeKm: Number,
  dataSaida: {
    type: Date
  },
  motorista: {
    type: Schema.Types.ObjectId,
    ref: 'motoristas'
  }
});

mongoose.model('rotas', _model);