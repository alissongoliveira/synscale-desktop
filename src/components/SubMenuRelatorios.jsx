import { forwardRef } from "react";

const SubMenuRelatorios = forwardRef(({ visible, onClose }, ref) => {
  if (!visible) return null;

  const handleClick = () => {
    onClose();
  };

  return (
    <div
      ref={ref}
      className="fixed top-[90px] left-16 w-[260px] bg-white shadow transition-transform duration-200 z-[9999]"
      onClick={(e) => e.stopPropagation()}
    >
      <ul className="divide-y divide-slate-200">
        <li
          className="h-12 flex items-center justify-center p-3 text-sm font-mono hover:bg-slate-100 cursor-pointer"
          onClick={handleClick}
        >
          Usuários Cadastrados
        </li>
        <li
          className="h-12 flex items-center justify-center p-3 text-sm font-mono hover:bg-slate-100 cursor-pointer"
          onClick={handleClick}
        >
          Solicitações de Complementos
        </li>
        <li
          className="h-12 flex items-center justify-center p-3 text-sm font-mono hover:bg-slate-100 cursor-pointer"
          onClick={handleClick}
        >
          Solicitações por Status
        </li>
      </ul>
    </div>
  );
});

export default SubMenuRelatorios;
