// We define the Navbar as its own independent function
const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-8 px-12">
      <div className="flex items-center gap-3 cursor-pointer">
        <div className="w-10 h-10 bg-[#b33a3a] rounded-full flex items-center justify-center text-white font-bold text-xs">
          SMS
        </div>
        <span className="font-bold text-sm tracking-tighter text-gray-800">
          SEARCH MALAWI SKILLS
        </span>
      </div>

      <div className="flex gap-10 text-[11px] font-bold tracking-[0.2em] text-gray-600 uppercase">
        <a href="#" className="hover:text-[#b33a3a] transition-colors">Contact</a>
        <a href="#" className="hover:text-[#b33a3a] transition-colors">Login</a>
      </div>
    </nav>
  );
};

export default Navbar;
