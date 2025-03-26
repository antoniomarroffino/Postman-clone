import {useState} from "react";
import { useHttp } from "../../hooks/useHttp";
import { methodBgColors, methodColors, methods } from "../../config/config";

const MethodDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { state, actions } = useHttp();

  return (
    <div className="relative group">
      <button
        className={`btn bg-base-100 hover:bg-base-200 border-2 border-neutral-800 hover:border-primary 
        transition-all duration-300 hover:scale-[1.02] flex items-center gap-2 pr-8 ${
          methodColors[state.request.method]
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-mono font-bold">{state.request.method}</span>
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
                className={`px-4 py-2 cursor-pointer font-mono font-semibold ${
                  method === state.request.method
                    ? `${methodBgColors[method]} text-white`
                    : `${methodColors[method]} hover:bg-base-200`
                } transition-colors duration-200`}
                onClick={() => {
                  actions.setMethod(method);
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
