import { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import ModalEmpresa from "../modals/ModalEmpresa";
import ModalMonitoramento from "../modals/ModalMonitoramento";
import { ModalContext } from "../contexts/ModalContext";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalEmpresaAberto, setModalEmpresaAberto] = useState(false);
  const [modalMonitoramentoAberto, setModalMonitoramentoAberto] =
    useState(false);

  const abrirModalEmpresa = () => {
    console.log("abrirModalEmpresa");
    setModalEmpresaAberto(true);
  };

  const abrirModalMonitoramento = () => {
    console.log("abrirModalMonitoramento");
    setModalMonitoramentoAberto(true);
  };

  return (
    <ModalContext.Provider
      value={{ abrirModalEmpresa, abrirModalMonitoramento }}
    >
      <div className="w-screen h-screen overflow-hidden bg-[#F1F4EF] font-mono">
        <Header onMenuClick={() => setMenuOpen(true)} />
        <Sidebar
          isOpen={menuOpen}
          onClose={() => setMenuOpen(false)}
          onAbrirModalEmpresa={abrirModalEmpresa}
          onAbrirModalMonitoramento={abrirModalMonitoramento}
        />
        <ModalEmpresa
          visible={modalEmpresaAberto}
          onClose={() => setModalEmpresaAberto(false)}
        />
        <ModalMonitoramento
          visible={modalMonitoramentoAberto}
          onClose={() => setModalMonitoramentoAberto(false)}
        />
      </div>
    </ModalContext.Provider>
  );
}
