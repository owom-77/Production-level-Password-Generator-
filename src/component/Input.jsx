import React, { useId } from "react";

function Input({
  label,
  placeholder,
  type = "text",
  value,
  setValue,
  readOnly = false,
  ...props
},ref) {
    
  const id = useId();

  return (
    <div className="flex flex-col space-y-2">
      {label && (
        <label
          htmlFor={id}
          className="text-sm font-medium text-gray-300"
        >
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        readOnly={readOnly}
        placeholder={placeholder}
        checked={type === "checkbox" ? value : undefined} 
        value={type !== "checkbox" ? value : undefined} 
        onChange={(e) =>
          type === "checkbox"
            ? setValue && setValue((prev) => !prev) 
            : setValue && setValue(e.target.value) 
        }
        className="px-4 py-2 border border-gray-600 rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        {...props}
        ref={ref}
      />
    </div>
  );
}

export default React.forwardRef(Input);
