import React from "react";

type InputFieldProps = {
  label: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  hasError?: boolean;
};

const InputField: React.FC<InputFieldProps> = ({
  label,
  type = "text",
  value,
  onChange,
  error,
  hasError = false,
}) => (
  <div className="flex flex-col">
    <label className="text-[0.85rem] mb-[0.25rem] text-lightgrey-stamind-lightgrey-200">
      {label}
    </label>
    <div className="relative w-[22rem]">
      <input
        type={type}
        value={value}
        onChange={onChange}
        className={`w-full h-[3rem] p-[0.5rem] bg-black-stamind-black-850 border rounded-md text-sm text-lightgrey-stamind-lightgrey-100 ${
          hasError
            ? "border-decoration-stamind-decoration-error-1"
            : "border-grey-stamind-grey-400"
        }`}
      />
      {error && (
        <p className="text-[0.7rem] mt-[0.6rem] text-decoration-stamind-decoration-error-1 text-xs">
          {error}
        </p>
      )}
    </div>
  </div>
);

export default InputField;
