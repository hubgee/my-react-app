const ProviderCard = ({ image, area, trade, name, bio }) => {
  return (
    <div className="flex flex-col border-2 border-[#002B5B] rounded-3xl w-full max-w-70">
      {/* 1. Image Container with Yellow Background */}
      <div className=" rounded-4xl overflow-hidden mb-4 h-64 flex items-end justify-center shadow-sm">
        {/* We use h-[90%] to make the person "float" slightly off the bottom */}
        <img 
          src={image} 
          alt={name} 
          className="h-[90%] w-auto object-contain transition-transform hover:scale-105" 
        />
      </div>

      {/* 2. Area & Trade Label (Gold) */}
      <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.2em] mb-1">
        {area} — {trade}
      </p>
      
      {/* 3. Name (Bold Blue) */}
      <h3 className="text-[#002B5B] font-extrabold text-xl mb-2 uppercase leading-none">
        {name}
      </h3>
      
      {/* 4. Bio (Gray Italic) */}
      <p className="text-gray-500 text-[11px] leading-relaxed mb-5 italic line-clamp-2">
        {bio}
      </p>

      {/* 5. Action Button (Solid Gold Pill) */}
      <button className="bg-[#D4AF37] text-[#002B5B] font-bold py-2 px-6 rounded-full text-[9px] uppercase tracking-widest self-start hover:bg-[#E5C158] transition-colors shadow-sm">
        Learn More
      </button>
    </div>
  );
};

export default ProviderCard;
