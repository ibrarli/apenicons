interface IconItemProps {
  icon: any;
  isSelected: boolean;
  onClick: () => void;
}

const IconItem = ({ icon, isSelected, onClick }: IconItemProps) => {
  const formatName = (name: string) => name.replace(/([A-Z])/g, " $1").trim();

  return (
    <div
      className={`group relative flex items-center justify-center w-10 h-10 border rounded-md transition-all duration-200 cursor-pointer ${
        isSelected
          ? "border-[#E7B339] bg-[#E7B339]/5 shadow-sm"
          : "bg-white border-slate-100 hover:border-slate-300"
      }`}
      onClick={onClick}
    >
      <div className={`${isSelected ? "text-[#E7B339]" : "text-slate-600"} group-hover:scale-110 transition-transform`}>
        <icon.component size={18} />
      </div>

      {/* Tooltip */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-slate-900 text-white text-[11px] font-medium rounded-lg opacity-0 group-hover:opacity-100 group-hover:-top-11 transition-all duration-200 pointer-events-none whitespace-nowrap z-50 shadow-xl ring-1 ring-white/10">
        {formatName(icon.name)}
        {/* Tooltip Arrow */}
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-900 rotate-45 rounded-sm"></div>
      </div>
    </div>
  );    
};

export default IconItem;