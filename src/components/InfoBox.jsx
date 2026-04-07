const InfoBox = () => {
  return (
    <section className="px-6 mt-12">
      {/* The Main Blue Container */}
      <div className="bg-[#002B5B] rounded-3xl p-10 flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* LEFT SIDE: Heading Text */}
        <div className="max-w-md text-center md:text-left">
          <h2 className="text-white font-bold text-2xl md:text-2xl leading-tight tracking-wide italic">
            BRIDGING THE GAP <br />
            BETWEEN SKILL AND <br />
            CONVENIENCE
          </h2>
        </div>

        {/* RIGHT SIDE: The Two Gold Buttons */}
        <div className="flex justify-between gap-4 w-full md:w-auto">
          <button className="bg-[#D4AF37] hover:bg-[#C5A028] text-[#002B5B] font-bold py-3 px-8 rounded-full text-[10px] uppercase tracking-widest transition-all">
            Join as a service provider
          </button>
          
          <button className="bg-[#D4AF37] hover:bg-[#C5A028] text-[#002B5B] font-bold py-3 px-8 rounded-full text-[10px] uppercase tracking-widest transition-all">
            Learn more
          </button>
        </div>
        
      </div>
    </section>
  );
};

export default InfoBox;
