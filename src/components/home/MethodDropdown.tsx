import { FC, useState } from "react";
import { methodBgColors, methodColors, methods } from "../../config/config";

interface MethodDropdownProps {
  selectedMethod: string;
  onMethodChange: (method: string) => void;
}

const MethodDropdown: FC<MethodDropdownProps> = ({
  selectedMethod,
  onMethodChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative group">
      <button
        className={`btn btn-outline ${methodColors[selectedMethod]} 
                hover:bg-base-200 border-base-content/20 hover:border-primary 
                transition-all duration-300 hover:scale-[1.02] flex items-center gap-2 pr-8`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-mono font-bold">{selectedMethod}</span>
        <svg
          className={`w-4 h-4 transform transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute mt-2 w-full z-10">
          <div className="bg-base-100 border-2 border-primary rounded-lg shadow-xl overflow-hidden">
            {methods.map((method) => (
              <div
                key={method}
                className={`px-4 py-2 cursor-pointer font-mono font-semibold 
                                ${
                                  method === selectedMethod
                                    ? `${methodBgColors[method]} text-white`
                                    : `${methodColors[method]} hover:bg-base-200`
                                } 
                                transition-colors duration-200`}
                onClick={() => {
                  onMethodChange(method);
                  setIsOpen(false);
                }}
              >
                {method}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MethodDropdown;
