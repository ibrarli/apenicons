import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    // Applied font-family: 'Oxanium' to the entire nav
    <nav className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50 font-['Oxanium']">
      <div className="max-w-full mx-auto px-5 h-16 flex items-center justify-between">
        
        {/* Left Side: Logo Branding */}
        <Link 
          to="/" 
          className="flex items-center  "
        >
          {/* Logo Container */}
          <div className=" h-12 flex items-center justify-center">
            <img 
              src="../logo.svg" 
              alt="ApenIcons Logo" 
              className="w-full h-full object-contain"
            />
          </div>

          {/* Brand Name - Using Oxanium and Gold */}
          <span className="text-2xl font-bold   ">
            Apen<span className="text-[#E7B339]">Icons</span>
          </span>
        </Link>

        {/* Right Side: Version Badge - Updated to Brand Gold */}
        <div className="flex items-center gap-4">
          <span className="px-3 py-1 rounded-md bg-[#E7B339]/10 text-[#E7B339] text-xs font-bold border border-[#E7B339]/20 uppercase tracking-widest">
            v1.0.2
          </span>
        </div>

      </div>
    </nav>
  );
};