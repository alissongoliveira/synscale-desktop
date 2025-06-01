import { CheckCircle, AlertCircle, Info, X } from "lucide-react";
import { useEffect } from "react";

export default function Toast({
  type = "success",
  message = "",
  onClose,
  duration = 4000,
}) {
  const config = {
    success: {
      icon: <CheckCircle className="w-5 h-5 text-green-600" />,
      bg: "bg-green-100",
      text: "text-green-800",
    },
    error: {
      icon: <AlertCircle className="w-5 h-5 text-red-600" />,
      bg: "bg-red-100",
      text: "text-red-800",
    },
    info: {
      icon: <Info className="w-5 h-5 text-blue-600" />,
      bg: "bg-blue-100",
      text: "text-blue-800",
    },
  };

  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [onClose, duration]);

  const { icon, bg, text } = config[type] || config.success;

  return (
    <div
      className={`fixed bottom-4 right-4 z-50 flex items-center gap-3 px-4 py-3 rounded shadow ${bg} ${text}`}
    >
      {icon}
      <span className="text-sm">{message}</span>
      <button onClick={onClose} className={`${text} ml-2`}>
        <X size={16} />
      </button>
    </div>
  );
}
