import ProviderCard from './ProviderCard';

const ProviderSection = () => {
  return (
    <section className="px-6 py-16 bg-white">
      <h2 className="text-[#002B5B] font-bold text-xl mb-10 text-center md:text-left">
        MEET OUR FEATURED SERVICE PROVIDERS
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* The Cards Grid */}
        <div className="flex flex-wrap justify-center gap-8">
          <ProviderCard 
            image="/martin.png" 
            area="AREA 49" 
            trade="ELECTRICIAN" 
            name="MARTIN" 
            bio="Certified electrician with 10 years experience in residential wiring."
          />
          <ProviderCard 
            image="/maya.png" 
            area="AREA 12" 
            trade="PLUMBER" 
            name="MAYA" 
            bio="Specialist in modern kitchen fittings and emergency leak repairs."
          />
        </div>

        {/* The Side CTA Button (The one you said is on the left/side) */}
        <div className="shrink-0">
          <button className="border-2 border-[#002B5B] text-[#002B5B] font-bold py-4 px-8 rounded-full text-[10px] uppercase tracking-widest flex items-center gap-2 hover:bg-gray-50 transition-all">
            Explore more service providers <span className="text-lg">›</span>
          </button>
        </div>

      </div>
    </section>
  );
};

export default ProviderSection;
