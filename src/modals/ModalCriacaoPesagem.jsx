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
} from "lucide-react";
import ModalCadastroCliente from "./ModalCadastroCliente";
import ModalCadastroMotorista from "./ModalCadastroMotorista";
import ModalCadastroVeiculo from "./ModalCadastroVeiculo";
import ModalCadastroTransportadora from "./ModalCadastroTransportadora";
import ModalCadastroProduto from "./ModalCadastroProduto";

export default function ModalCriacaoPesagem({ onClose }) {
  const [mostrarCadastroCliente, setMostrarCadastroCliente] = useState(false);
  const [mostrarCadastroMotorista, setMostrarCadastroMotorista] =
    useState(false);
  const [mostrarCadastroVeiculo, setMostrarCadastroVeiculo] = useState(false);
  const [mostrarCadastroTransportadora, setMostrarCadastroTransportadora] =
    useState(false);
  const [mostrarCadastroProduto, setMostrarCadastroProduto] = useState(false);

  const [pesoEntrada, setPesoEntrada] = useState(0);
  const [pesoSaida, setPesoSaida] = useState(0);
  const pesoLiquido = pesoSaida - pesoEntrada;
  const podeEmitir = pesoEntrada > 0 && pesoSaida > 0;

  const handleGrava = () => {
    // lógica para gravar pré-pesagem
    console.log("Gravou pré-pesagem:", { pesoEntrada, pesoSaida });
  };

  const handleEmitir = () => {
    // lógica para emitir a pesagem
    console.log("Emitiu pesagem:", { pesoEntrada, pesoSaida });
  };

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
                {
                  label: "Motorista",
                  icon: <Truck size={16} />,
                  motorista: true,
                },
                {
                  label: "Placa do Cavalo",
                  icon: <Truck size={16} />,
                  veiculo: true,
                },
                {
                  label: "Transportadora",
                  icon: <Truck size={16} />,
                  transportadora: true,
                },
                { label: "Produto", icon: <Truck size={16} />, produto: true },
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
                  ) : campo.motorista ? (
                    <button onClick={() => setMostrarCadastroMotorista(true)}>
                      <FolderPlus size={16} />
                    </button>
                  ) : campo.veiculo ? (
                    <button onClick={() => setMostrarCadastroVeiculo(true)}>
                      <FolderPlus size={16} />
                    </button>
                  ) : campo.transportadora ? (
                    <button
                      onClick={() => setMostrarCadastroTransportadora(true)}
                    >
                      <FolderPlus size={16} />
                    </button>
                  ) : campo.produto ? (
                    <button onClick={() => setMostrarCadastroProduto(true)}>
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

            {/* Coluna Direita - Pesos */}
            <div className="space-y-2 text-sm">
              <CampoPeso
                label="Peso de Entrada"
                valor={pesoEntrada}
                setValor={setPesoEntrada}
                cor="text-red-500"
              />
              <CampoPeso
                label="Peso de Saída"
                valor={pesoSaida}
                setValor={setPesoSaida}
                cor="text-yellow-500"
              />
              <CampoEstaticoPeso
                label="Peso Líquido"
                valor={pesoLiquido}
                cor="text-green-600"
              />
            </div>
          </div>

          {/* Botão principal */}
          <div className="mt-6 flex justify-center">
            {podeEmitir ? (
              <button
                onClick={handleEmitir}
                className="bg-green-700 text-white px-8 py-2 rounded text-sm shadow"
              >
                Emitir
              </button>
            ) : (
              <button
                onClick={handleGrava}
                className="bg-slate-800 text-white px-8 py-2 rounded text-sm shadow"
              >
                Grava
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Modais de cadastro */}
      {mostrarCadastroCliente && (
        <ModalCadastroCliente
          onClose={() => setMostrarCadastroCliente(false)}
        />
      )}
      {mostrarCadastroMotorista && (
        <ModalCadastroMotorista
          onClose={() => setMostrarCadastroMotorista(false)}
        />
      )}
      {mostrarCadastroVeiculo && (
        <ModalCadastroVeiculo
          onClose={() => setMostrarCadastroVeiculo(false)}
        />
      )}
      {mostrarCadastroTransportadora && (
        <ModalCadastroTransportadora
          onClose={() => setMostrarCadastroTransportadora(false)}
        />
      )}
      {mostrarCadastroProduto && (
        <ModalCadastroProduto
          onClose={() => setMostrarCadastroProduto(false)}
        />
      )}
    </>
  );
}

// Componentes auxiliares

const CampoEstatico = ({ icon, text }) => (
  <div className="flex items-center bg-gray-100 p-2 rounded gap-2 text-sm">
    {icon}
    <span>{text}</span>
  </div>
);

const CampoPeso = ({ label, valor, setValor, cor }) => (
  <div className="flex items-center justify-between bg-gray-100 p-2 rounded">
    <span>{label}:</span>
    <input
      type="number"
      value={valor}
      onChange={(e) => setValor(Number(e.target.value))}
      className={`text-right w-24 bg-transparent outline-none font-semibold ${cor}`}
    />
  </div>
);

const CampoEstaticoPeso = ({ label, valor, cor }) => (
  <div className="flex items-center justify-between bg-gray-100 p-2 rounded">
    <span>{label}:</span>
    <span className={`font-semibold ${cor}`}>{valor}</span>
  </div>
);
