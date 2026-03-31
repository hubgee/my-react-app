const Hero = () => {
  return (
    <main className="flex flex-col items-center mt-32 px-6">
      <div className="relative w-full max-w-2xl">
        <div className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400">
           <span className="text-xl">🔍</span>
        </div>
        <input 
          type="text" 
          placeholder="search for skills (e.g. plumber, area 43)" 
          className="w-full py-4 px-16 rounded-full border border-stone-300 bg-white text-stone-500 focus:outline-none focus:ring-1 focus:ring-[#b33a3a]/20 italic text-lg shadow-sm"
        />
      </div>

      <button className="mt-16 bg-[#b33a3a] text-white px-10 py-3 rounded-full text-[10px] font-bold uppercase tracking-[0.15em] hover:bg-red-900 transition-all shadow-md">
        Join as a service provider
      </button>
    </main>
  );
};

export default Hero;
