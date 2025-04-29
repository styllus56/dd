// Modelo de Cliente no MongoDB
const clienteSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  telefone: { type: String, required: true },
  email: { type: String },
  cpf: { type: String },
  endereco: {
    rua: String,
    numero: String,
    bairro: String,
    cidade: String,
    estado: String
  },
  dividas: [{
    valor: { type: Number, required: true },
    dataVencimento: { type: Date, required: true },
    dataPrometidaPagamento: { type: Date },
    descricao: String,
    status: { type: String, enum: ['pendente', 'parcial', 'pago', 'atrasado'], default: 'pendente' },
    historicoPagamentos: [{
      valor: Number,
      data: Date,
      metodo: String
    }]
  }],
  historicoComunicacao: [{
    tipo: { type: String, enum: ['ligacao', 'sms', 'whatsapp', 'email', 'visita'], required: true },
    data: { type: Date, default: Date.now },
    responsavel: String,
    observacoes: String
  }],
  observacoes: String,
  dataCadastro: { type: Date, default: Date.now }
});