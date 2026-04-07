const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-6 bg-white">
      {/* 1. LEFT SIDE: Logo & Brand Name */}
      <div className="flex items-center gap-2">
  {/* Replacing the Emoji with your real PNG */}
  <img 
    src="/sms.png" 
    alt="SMS Logo" 
    className="h-15 w-auto object-contain" 
  />
        
        {/* Brand Name in Gold/Yellow */}
        <span className="font-bold text-sm tracking-tighter text-gray-800">
          SEARCH MALAWI SKILLS
        </span>
      </div>

      {/* 2. RIGHT SIDE: Navigation Links */}
      <div className="flex gap-8 text-[11px] font-bold tracking-[0.2em] text-gray-500 uppercase">
        <a href="#" className="hover:text-green-600 transition-colors">
          Contact
        </a>
        <a href="#" className="hover:text-green-600 transition-colors">
          Login
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
