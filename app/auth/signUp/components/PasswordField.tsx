import React from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

type PasswordFieldProps = {
  label: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  showPassword: boolean;
  toggleShowPassword: () => void;
  error?: string;
  hasError?: boolean;
  children?: React.ReactNode;
};

const PasswordField: React.FC<PasswordFieldProps> = ({
  label,
  placeholder,
  value,
  onChange,
  showPassword,
  toggleShowPassword,
  error,
  hasError = false,
  children,
}) => (
  <div className="flex flex-col">
    <label className="text-[0.85rem] mb-[0.25rem] text-lightgrey-stamind-lightgrey-200">
      {label}
    </label>
    <div className="relative w-[22rem]">
      <input
        type={showPassword ? "text" : "password"}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full h-[3rem] p-[0.5rem] bg-black-stamind-black-850 border rounded-md text-sm text-lightgrey-stamind-lightgrey-100 placeholder-grey-stamind-grey-300
          ${
            hasError
              ? "border-decoration-stamind-decoration-error-1"
              : "border-grey-stamind-grey-400"
          }`}
      />
      {showPassword ? (
        <VisibilityIcon
          onClick={toggleShowPassword}
          className="absolute top-1/2 right-3 transform -translate-y-1/2 text-uiSpecificColor-stamind-icon cursor-pointer"
          style={{ fontSize: "1rem" }}
        />
      ) : (
        <VisibilityOffIcon
          onClick={toggleShowPassword}
          className="absolute top-1/2 right-3 transform -translate-y-1/2 text-uiSpecificColor-stamind-icon cursor-pointer"
          style={{ fontSize: "1rem" }}
        />
      )}
    </div>
    {error && (
      <p className="text-[0.7rem] mt-[0.6rem] text-decoration-stamind-decoration-error-1 text-xs">
        {error}
      </p>
    )}
    {children}
  </div>
);

export default PasswordField;
