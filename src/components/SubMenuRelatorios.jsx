export default function SubMenuRelatorios({ visible, onClose }) {
  if (!visible) return null;

  const items = [
    "Usuários Cadastrados",
    "Solicitações de Complementos",
    "Solicitações de Complementos por Status",
  ];

  return (
    <div
      className="fixed top-[90px] left-16 w-[300px] bg-white shadow transition-transform duration-200 z-40"
      onClick={(e) => e.stopPropagation()}
    >
      <ul className="divide-y divide-slate-200">
        {items.map((item) => (
          <li
            key={item}
            className="h-12 flex items-center p-3 text-sm font-mono hover:bg-slate-100 cursor-pointer"
            onClick={() => onClose()}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
