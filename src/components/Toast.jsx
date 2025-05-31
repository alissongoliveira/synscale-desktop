export default function Toast({ type = "success", message = "", onClose }) {
  const bgColor = type === "success" ? "bg-green-500" : "bg-red-500";

  return (
    <div
      className={`fixed bottom-4 right-4 z-50 px-4 py-2 text-white rounded shadow-lg ${bgColor}`}
    >
      {message}
      <button onClick={onClose} className="ml-4 font-bold">
        ×
      </button>
    </div>
  );
}
