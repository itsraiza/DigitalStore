import { useState } from "react";

const ProductOptions = ({ options = [], radius = "4px", shape = "square", type = "text" }) => {
  const [selected, setSelected] = useState(null);

  const baseStyle = shape === "circle"
    ? "w-[31px] h-[31px] rounded-full"
    : `w-[auto] h-[46px] px-4 rounded-[${radius}]`;

  return (
    <div className="flex gap-4 flex-wrap">
      {options.map((option, index) => (
        <div
          key={index}
          onClick={() => setSelected(index)}
          className={`flex items-center justify-center font-bold border hover:bg-[#C92071] cursor-pointer ${
            selected === index ? "border-2 border-[#C92071]" : "border border-[#CCCCCC]"
          } ${baseStyle}`}
          style={{
            borderRadius: shape === "square" ? radius : "50%",
            backgroundColor: type === "color" ? option : "",
          }}
        >
          {type === "text" && (
            <span
              className={`${
                shape === "square" ? "text-[16px]" : "text-[14px]"
              } text-[#474747] hover:text-white`}
            >
              {option}
            </span>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProductOptions;