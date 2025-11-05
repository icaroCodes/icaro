export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center gap-3">
          <img 
            src="/icarocodes.png" 
            alt="icaroCodes Logo" 
            className="w-10 h-10 object-contain"
          />
          <h1 className="text-2xl font-bold text-slate-900">
            icaroCodes
          </h1>
        </div>
      </div>
    </header>
  );
}
