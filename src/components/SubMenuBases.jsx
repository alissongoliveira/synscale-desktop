import { forwardRef } from "react";
import { useModal } from "../contexts/ModalContext";

const SubMenuBases = forwardRef(({ visible, onClose }, ref) => {
  const { abrirModalEmpresa } = useModal();

  if (!visible) return null;

  const handleClick = () => {
    onClose();
    setTimeout(() => {
      abrirModalEmpresa();
    }, 50);
  };

  return (
    <div
      ref={ref}
      className="fixed top-[90px] left-16 w-[260px] bg-white shadow transition-transform duration-200 z-[9999]"
    >
      <div className="divide-y divide-slate-200">
        <div
          className="h-12 flex items-center justify-center p-3 text-sm font-mono hover:bg-slate-100 cursor-pointer"
          onClick={handleClick}
        >
          Gerenciar Dados da Empresa
        </div>
      </div>
    </div>
  );
});

export default SubMenuBases;
