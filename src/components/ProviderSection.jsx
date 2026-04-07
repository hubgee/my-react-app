import ProviderCard from './ProviderCard';

const ProviderSection = () => {
  // This is your data array. Make sure these images are in your 'public' folder!
  const providers = [
    {
      id: 1,
      image: '/martin.png',
      area: 'Area 49',
      trade: 'Trade',
      name: 'Provider Name',
      bio: 'Bio',
    },

    {
      id: 2,
      image: '/maya.png',
      area: 'kawale',
      trade: 'Trade',
      name: 'Provider Name',
      bio: 'Bio',
    },

    {
      id: 3,
      image: '/martin.png',
      area: 'Area 49',
      trade: 'Trade',
      name: 'Provider Name',
      bio: 'Bio',
    },

    {
      id: 4,
      image: '/maya.png',
      area: 'Area 49',
      trade: 'Trade',
      name: 'Provider Name',
      bio: 'Bio',
    },
  ];

  return (
    <section className="px-6 py-20 max-w-7xl mx-auto bg-white">
      
      {/* HEADER: Title Left, Button Right */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
        <div>
          <h2 className="text-[#D4AF37] font-bold text-lg md:text-xl tracking-widest uppercase leading-tight">
            Meet our experienced and certified <br />
            service providers
          </h2>
        </div>

        <button className="border-2 border-[#002B5B] text-[#002B5B] font-bold py-2.5 px-8 rounded-full text-[10px] uppercase tracking-widest flex items-center gap-2 hover:bg-[#002B5B] hover:text-white transition-all whitespace-nowrap group">
          Explore more service providers 
          <span className="text-lg group-hover:translate-x-1 transition-transform">›</span>
        </button>
      </div>

      {/* THE GRID: 4 columns on Desktop, 2 on Tablet, 1 on Mobile */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 justify-items-center">
        {providers.map((person) => (
          <ProviderCard 
            key={person.id}
            image={person.image}
            area={person.area}
            trade={person.trade}
            name={person.name}
            bio={person.bio}
          />
        ))}
      </div>
    </section>
  );
};

export default ProviderSection;
