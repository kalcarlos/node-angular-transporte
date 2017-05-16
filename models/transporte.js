var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var _model = new Schema({
  dataEntrega: {
    type: Date
  },
  produto: {
    type: Schema.Types.ObjectId,
    ref: 'produtos'
  },
  rota: {
    type: Schema.Types.ObjectId,
    ref: 'rotas'
  },
  empresa:{
      type: Schema.Types.ObjectId,
      ref: 'empresas'
  }
});

mongoose.model('transportes', _model);