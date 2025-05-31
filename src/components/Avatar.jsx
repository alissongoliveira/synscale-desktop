export default function Avatar({ letra = "A" }) {
  return (
    <div className="w-10 h-10 rounded-full bg-gray-300 text-slate-800 font-bold flex items-center justify-center">
      {letra}
    </div>
  );
}
