import Header from "../components/Header";

export default function Home() {
  return (
    <div className="w-screen h-screen overflow-hidden bg-[#F1F4EF] font-mono">
      <Header />
      <div className="flex flex-col items-center justify-center h-[calc(100%-72px)]">
        <img src="/logo.png" alt="Logo Central" className="h-56 mb-6" />
      </div>
    </div>
  );
}
