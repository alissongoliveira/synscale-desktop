import { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import ModalEmpresa from "../modals/ModalEmpresa";
import { ModalContext } from "../contexts/ModalContext";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalEmpresaAberto, setModalEmpresaAberto] = useState(false);

  const abrirModalEmpresa = () => {
    console.log("Modal aberto via contexto");
    setModalEmpresaAberto(true);
  };

  return (
    <ModalContext.Provider value={{ abrirModalEmpresa }}>
      <div className="w-screen h-screen overflow-hidden bg-[#F1F4EF] font-mono">
        <Header onMenuClick={() => setMenuOpen(true)} />
        <Sidebar isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
        <ModalEmpresa
          visible={modalEmpresaAberto}
          onClose={() => setModalEmpresaAberto(false)}
        />
      </div>
    </ModalContext.Provider>
  );
}
