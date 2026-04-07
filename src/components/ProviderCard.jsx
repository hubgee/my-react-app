const ProviderCard = ({ image, area, trade, name, bio }) => {
  return (
    <div className="bg-white border-2 border-[#002B5B] rounded-3xl shadow-lg p-6 flex flex-col items-center text-center max-w-70">
      {/* 1. Provider Image */}
      <div className="w-full h-48 rounded-3xl overflow-hidden mb-4">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>

      {/* 2. Details */}
      <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-1">
        {area} - {trade}
      </p>
      
      <h3 className="text-[#002B5B] font-extrabold text-xl mb-3">
        {name}
      </h3>
      
      <p className="text-[#002B5B] text-xs leading-relaxed mb-6 italic">
        "{bio}"
      </p>

      {/* 3. Action Button */}
      <button className="border-2 border-[#002B5B] text-[#002B5B] font-bold py-2 px-8 rounded-full text-[10px] uppercase tracking-widest hover:bg-[#002B5B] hover:text-white transition-all">
        Learn More
      </button>
    </div>
  );
};

export default ProviderCard;
