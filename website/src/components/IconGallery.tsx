import { useState } from "react";
import { ALL_ICONS } from "../icon-registry";
import IconDrawer from "./IconDrawer";
import IconItem from "./IconItem";

const IconGallery = () => {
  const [search, setSearch] = useState("");
  const [selectedIcon, setSelectedIcon] = useState<any>(null);

  const filteredIcons = ALL_ICONS.filter(
    (icon: any) =>
      icon.name.toLowerCase().includes(search.toLowerCase()) ||
      icon.tags?.some((tag: string) =>
        tag.toLowerCase().includes(search.toLowerCase())
      )
  );

  return (
    <div className="p-8 max-w-full mx-auto min-h-screen relative">
      <div className="mb-10">
        <h2 className="text-xl font-bold mb-4 text-slate-900 tracking-tight">Icon Library</h2>
        <div className="relative max-w-sm">
          <input
            type="text"
            placeholder="Search icons..."
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:ring-4 focus:ring-[#E7B339]/5 focus:border-[#E7B339] outline-none transition-all text-sm shadow-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-[repeat(auto-fill,minmax(40px,1fr))] gap-2">
        {filteredIcons.map((icon: any) => (
          <IconItem
            key={icon.name}
            icon={icon}
            isSelected={selectedIcon?.name === icon.name}
            onClick={() => setSelectedIcon(icon)}
          />
        ))}
      </div>

      {/* Empty State */}
      {filteredIcons.length === 0 && (
        <div className="py-32 text-center">
          <p className="text-slate-400 text-sm italic">No icons matching "{search}"</p>
        </div>
      )}

      {/* Drawer */}
      {selectedIcon && (
        <IconDrawer 
          icon={selectedIcon} 
          onClose={() => setSelectedIcon(null)} 
        />
      )}
    </div>
  );
};

export default IconGallery;