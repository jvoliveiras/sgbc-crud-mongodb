import mongoose, { Schema, Document } from 'mongoose';

type ClienteModelProps = {
  cpf: string;
  nome: string;
  idade: number;
};

const clienteSchema = new Schema<ClienteModelProps>({
  cpf: { type: String, required: true, unique: true },
  nome: { type: String, required: true },
  idade: { type: Number, required: true },
}, {
  timestamps: false,
});

const ClienteModel = mongoose.model<ClienteModelProps & Document>('Cliente', clienteSchema);

export default ClienteModel;
