const FilterGroup = ({ 
    title, 
    options,
    inputType ="checkbox"

}) => {
  return (
    <div className="mb-6">
      <h3 className="text-[#474747] font-semibold mb-2">{title}</h3>
      {options.map((option, index) => (
        <label key={index} className="flex items-center gap-2 mb-1">
          <input type={inputType} className="w-[22px] h-[22px] accent-[#C92071] cursor-pointer" />
          <span className="text-[#474747]">{option}</span>
        </label>
      ))}
    </div>
  );
};

export default FilterGroup;
