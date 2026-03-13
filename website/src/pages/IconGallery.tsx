import { useState } from 'react';
import { ALL_ICONS } from '../icon-registry';

const IconGallery = () => {
  const [search, setSearch] = useState('');

  // Helper to add spaces between PascalCase names
  const formatName = (name: string) => name.replace(/([A-Z])/g, ' $1').trim();

  const filteredIcons = ALL_ICONS.filter((icon: any) =>
    icon.name.toLowerCase().includes(search.toLowerCase()) ||
    icon.tags?.some((tag: string) => tag.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="p-8 max-w-7xl mx-auto min-h-screen bg-slate-50/50">
      <div className="mb-12 text-center sm:text-left">
        <h2 className="text-4xl font-extrabold mb-3 text-slate-900 tracking-tight">Icon Library</h2>
        <p className="text-slate-500 mb-8 text-lg">Click an icon to copy its component name.</p>
        
        <div className="relative max-w-md group">
          <input
            type="text"
            placeholder="Search icons..."
            className="w-full px-5 py-4 rounded-2xl border border-slate-200 bg-white shadow-sm focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-slate-700"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6">
        {filteredIcons.map((icon: any) => (
          <div 
            key={icon.name} 
            className="group relative flex flex-col items-center justify-center aspect-square p-4 bg-white border border-slate-200 rounded-3xl hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1 hover:border-blue-500 transition-all duration-300 cursor-pointer"
            onClick={() => {
               navigator.clipboard.writeText(`<${icon.name} />`);
               // You could replace this alert with a toast notification later
               alert(`Copied <${icon.name} />`);
            }}
          >
            {/* The Icon */}
            <div className="text-slate-700 group-hover:text-blue-600 transition-colors transform group-hover:scale-110 duration-300">
              <icon.component size={44} />
            </div>
            
            {/* The Tooltip - Hidden by default, appears on hover */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-slate-900 text-white text-[11px] font-bold rounded-lg opacity-0 group-hover:opacity-100 group-hover:-top-12 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-xl">
              {formatName(icon.name)}
              {/* Tooltip Arrow */}
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-900 rotate-45"></div>
            </div>
          </div>
        ))}
      </div>

      {filteredIcons.length === 0 && (
        <div className="py-20 text-center text-slate-400 text-xl font-medium">
          No icons found matching "{search}"
        </div>
      )}
    </div>
  );
};

export default IconGallery;