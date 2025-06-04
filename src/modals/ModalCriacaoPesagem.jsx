import { useState } from "react";
import {
  X,
  Calendar,
  Clock,
  MessageSquare,
  Tag,
  User,
  Truck,
  Search,
  FolderPlus,
  Lock,
  Plus,
} from "lucide-react";
import ModalCadastroCliente from "./ModalCadastroCliente";

export default function ModalCriacaoPesagem({ onClose }) {
  const [mostrarCadastroCliente, setMostrarCadastroCliente] = useState(false);

  return (
    <>
      <div className="fixed inset-0 bg-black/30 z-50 flex items-center justify-center font-jetbrains-mono">
        <div className="bg-white w-[900px] rounded shadow-lg relative p-4">
          {/* Cabeçalho */}
          <div className="bg-slate-200 text-center py-2 text-sm font-semibold tracking-widest rounded">
            PAINEL DE CONTROLE
            <button
              onClick={onClose}
              className="absolute right-4 top-2 text-gray-700 hover:text-black"
            >
              <X size={18} />
            </button>
          </div>

          {/* Painéis das balanças */}
          <div className="grid grid-cols-2 gap-4 mt-4">
            {[
              { label: "BALANÇA 01", peso: 21500 },
              { label: "BALANÇA 02", peso: 60000 },
            ].map((b, i) => (
              <div
                key={i}
                className="bg-gray-100 rounded-md flex flex-col items-center justify-center py-6"
              >
                <span className="text-xs text-gray-600">{b.label}</span>
                <span className="text-5xl font-bold tracking-widest">
                  {b.peso}
                </span>
              </div>
            ))}
          </div>

          {/* Área de dados */}
          <div className="grid grid-cols-3 gap-4 mt-4">
            {/* Coluna Esquerda */}
            <div className="space-y-2">
              <CampoEstatico icon={<Tag size={16} />} text="001" />
              <CampoEstatico icon={<Calendar size={16} />} text="26/05/2025" />
              <CampoEstatico icon={<Clock size={16} />} text="15:00:00" />
              <div className="flex items-start bg-gray-100 rounded p-2 gap-2 h-[88px]">
                <MessageSquare size={16} />
                <textarea
                  placeholder="Observação"
                  className="w-full bg-transparent resize-none outline-none text-sm"
                />
              </div>
            </div>

            {/* Coluna Central */}
            <div className="space-y-2">
              {[
                { label: "Cliente", icon: <User size={16} />, cliente: true },
                { label: "Motorista", icon: <Truck size={16} /> },
                { label: "Placa do Cavalo", icon: <Truck size={16} /> },
                { label: "Transportadora", icon: <Truck size={16} /> },
                { label: "Produto", icon: <Truck size={16} /> },
              ].map((campo, idx) => (
                <div
                  key={idx}
                  className="flex items-center bg-gray-100 rounded p-2 gap-2"
                >
                  {campo.icon}
                  <input
                    type="text"
                    placeholder={campo.label}
                    className="bg-transparent w-full text-sm outline-none"
                  />
                  <button>
                    <Search size={16} />
                  </button>
                  {campo.cliente ? (
                    <button onClick={() => setMostrarCadastroCliente(true)}>
                      <FolderPlus size={16} />
                    </button>
                  ) : (
                    <button>
                      <FolderPlus size={16} />
                    </button>
                  )}
                </div>
              ))}
            </div>

            {/* Coluna Direita */}
            <div className="space-y-2 text-sm">
              <Peso label="Peso de Entrada" valor={21500} cor="text-red-500" />
              <Peso label="Peso de Saída" valor={60000} cor="text-yellow-500" />
              <Peso label="Peso Líquido" valor={38500} cor="text-green-600" />
            </div>
          </div>

          {/* Botão Gravar */}
          <div className="mt-6 flex justify-center">
            <button className="bg-slate-800 text-white px-8 py-2 rounded text-sm shadow">
              Grava
            </button>
          </div>
        </div>
      </div>

      {/* Modal de Cadastro de Cliente */}
      {mostrarCadastroCliente && (
        <ModalCadastroCliente
          onClose={() => setMostrarCadastroCliente(false)}
        />
      )}
    </>
  );
}

const CampoEstatico = ({ icon, text }) => (
  <div className="flex items-center bg-gray-100 p-2 rounded gap-2 text-sm">
    {icon}
    <span>{text}</span>
  </div>
);

const Peso = ({ label, valor, cor }) => (
  <div className="flex items-center justify-between bg-gray-100 p-2 rounded">
    <span>{label}:</span>
    <div className="flex items-center gap-1">
      <span className={`font-semibold ${cor}`}>{valor}</span>
      <Plus size={14} className="text-gray-500" />
      <Lock size={14} className="text-gray-500" />
    </div>
  </div>
);
