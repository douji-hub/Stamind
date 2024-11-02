import React, {useState} from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

type InputFieldProps = {
  label: string;
  placeholder?: string;
  type?: "text" | "email" | "password";
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessage?: string;
  hasError?: boolean;
  boxClass?: string;
};

type VisibleIconProps = {
  showValue: boolean;
  toggleShowValue: () => void;
}

const VisibleIcon = (props: VisibleIconProps) => {
  const {showValue, toggleShowValue} = props
  return (
    <>
      {showValue ? (
        <VisibilityIcon
          onClick={toggleShowValue}
          className="absolute top-1/2 right-3 transform -translate-y-1/2 text-uiSpecificColor-stamind-icon cursor-pointer"
          style={{fontSize: "1rem"}}
        />
      ) : (
        <VisibilityOffIcon
          onClick={toggleShowValue}
          className="absolute top-1/2 right-3 transform -translate-y-1/2 text-uiSpecificColor-stamind-icon cursor-pointer"
          style={{fontSize: "1rem"}}
        />
      )
      }
    </>
  )
}

const InputComponent = (props: InputFieldProps) => {
  const {
    label,
    placeholder,
    type = "text",
    value,
    onChange,
    errorMessage,
    hasError = false,
    boxClass = "",
  } = props

  // using on type == password
  const [showValue, setShowValue] = useState<boolean>(true)

  function toggleShowValue() {
    setShowValue(prevState => !prevState)
  }

  // Classify password and others, if is password field, then control type by "showValue"
  function inputType(type: 'text' | 'email' | 'password', showValue: boolean) {
    if (type == 'password') {
      return showValue ? 'text' : 'password'
    } else {
      return type
    }
  }

  return (
    <div className={"flex flex-col " + boxClass}>
      <label className="text-[0.85rem] mb-[0.25rem] text-lightgrey-stamind-lightgrey-200">
        {label}
      </label>
      <div className="relative">
        <input
          type={inputType(type, showValue)}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full h-[3rem] p-[0.5rem] bg-black-stamind-black-850 border focus:border-primary-stamind-blue-800 focus:outline-none rounded-md text-sm text-lightgrey-stamind-lightgrey-100 placeholder-grey-stamind-grey-300
          ${
            hasError
              ? "border-decoration-stamind-decoration-error-1"
              : "border-grey-stamind-grey-400"
          }`}
        />
        {type == 'password' && <VisibleIcon showValue={showValue} toggleShowValue={toggleShowValue}/>}
      </div>
      {hasError && (
        <p className="text-[0.7rem] mt-[0.6rem] text-decoration-stamind-decoration-error-1 text-xs">
          {errorMessage}
        </p>
      )}
    </div>
  )
}

export default InputComponent;
