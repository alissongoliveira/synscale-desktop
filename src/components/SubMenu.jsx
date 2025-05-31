export default function SubMenu({ visible, onClose }) {
  if (!visible) return null;

  const items = ["Usuário", "Veículo", "Cliente", "Produto"];

  return (
    <div
      className="fixed top-[90px] left-16 w-56 bg-white shadow transition-transform duration-200 z-40"
      onClick={(e) => e.stopPropagation()}
    >
      <ul className="divide-y divide-slate-200">
        {items.map((item) => (
          <li
            key={item}
            className="h-12 p-3 text-sm font-mono hover:bg-slate-100 cursor-pointer"
            onClick={() => onClose()}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
