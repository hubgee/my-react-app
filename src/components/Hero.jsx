const Hero = () => {
  return (
    <section className="px-6 mt-4">
      {/* 1. The Container (The "Relative" Anchor) */}
      <div className="relative w-full h-75 md:h-100 overflow-hidden rounded-3xl">
        
        {/* 2. The Background Image */}
        <img 
          src="/tools.jpg" 
          alt="Handyman Tools" 
          className="w-full h-full object-cover brightness-90"
        />

        {/* 3. The Overlay (The "Absolute" Centerpiece) */}
        <div className="absolute inset-0 flex items-center justify-center px-4">
          
          {/* The Search Bar Container */}
          <div className="relative w-full max-w-xl group">
            {/* Search Icon */}
            <span className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 text-xl">
              🔍
            </span>
            
            {/* The Input Field */}
            <input 
              type="text" 
              placeholder="search" 
              className="w-full py-3 px-16 rounded-full border border-green-600 bg-white/90 backdrop-blur-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-600/20 text-center italic transition-all"
            />
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
