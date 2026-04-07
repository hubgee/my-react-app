const TrustSection = () => {
  const stats = [
    { label: "Happy Trusted Clients", value: "2000+" },
    { label: "Registered Service Providers", value: "1000+" },
    { label: "Customer Satisfaction", value: "95%" },
  ];

  return (
    <section className="py-20 px-6">
      {/* Centered Heading */}
      <div className="text-center mb-24">
        <h2 className="text-4xl md:text-5xl font-light text-gray-900 tracking-tight">
          EXPERIENCE <span className="text-[#002B5B] font-medium">CONVENIENCE</span>
        </h2>
        <p className="text-3xl md:text-4xl font-light text-gray-900 tracking-tight uppercase">
          AT YOUR FINGERTIPS
        </p>
      </div>

      {/* Stats Row */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 text-center">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center">
            <h3 className="text-[#FFB800] text-7xl md:text-8xl font-bold mb-2">
              {stat.value}
            </h3>
            <p className="text-[#002B5B] font-bold text-xs uppercase tracking-widest max-w-37.5">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustSection;
