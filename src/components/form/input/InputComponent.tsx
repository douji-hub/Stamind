import React, { useState } from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'

type InputFieldProps = {
  label: string
  placeholder?: string
  type?: 'text' | 'email' | 'password' | 'confirmPassword'
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  errorMessage?: (string | false)[]
  hasError?: boolean
  boxClass?: string
}

type VisibleIconProps = {
  showValue: boolean
  toggleShowValue: () => void
}

const VisibleIcon = (props: VisibleIconProps) => {
  const { showValue, toggleShowValue } = props
  return (
    <>
      {showValue ? (
        <VisibilityIcon
          onClick={toggleShowValue}
          className="absolute top-1/2 right-3 transform -translate-y-1/2 text-uiSpecificColor-stamind-icon cursor-pointer"
          style={{ fontSize: '1rem' }}
        />
      ) : (
        <VisibilityOffIcon
          onClick={toggleShowValue}
          className="absolute top-1/2 right-3 transform -translate-y-1/2 text-uiSpecificColor-stamind-icon cursor-pointer"
          style={{ fontSize: '1rem' }}
        />
      )}
    </>
  )
}

const InputComponent = (props: InputFieldProps) => {
  const {
    label,
    placeholder,
    type = 'text',
    value,
    onChange,
    errorMessage,
    hasError = false,
    boxClass = '',
  } = props

  // using on type == password
  const [showValue, setShowValue] = useState<boolean>(false)

  function toggleShowValue() {
    setShowValue((prevState) => !prevState)
  }

  // Classify password and others, if is password field, then control type by "showValue"
  function inputType(
    type: 'text' | 'email' | 'password' | 'confirmPassword',
    showValue: boolean,
  ) {
    if (type == 'password' || type == 'confirmPassword') {
      return showValue ? 'text' : 'password'
    } else {
      return type
    }
  }

  return (
    <div className={'flex flex-col ' + boxClass}>
      <label className="text-[0.85rem] mb-[0.25rem] text-stamind-grey-200">
        {label}
      </label>
      <div className="relative">
        <input
          type={inputType(type, showValue)}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full h-[3rem] p-[0.5rem] bg-stamind-black-850 border focus:border-stamind-primary-blue-800 focus:outline-none rounded-md text-sm text-stamind-grey-200 placeholder-stamind-grey-300
          ${
            hasError
              ? 'border-stamind-decoration-error-1'
              : 'border-stamind-grey-400'
          }`}
        />
        {(type === 'password' || type === 'confirmPassword') && (
          <VisibleIcon
            showValue={showValue}
            toggleShowValue={toggleShowValue}
          />
        )}
      </div>
      {hasError &&
        (type == 'password' ? (
          <ul className="mt-[0.6rem]">
            {errorMessage?.map((message, index) => (
              <li
                key={index}
                className="text-[0.7rem] ml-[1rem] list-disc text-stamind-grey-200"
              >
                {message}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-[0.7rem] mt-[0.6rem] text-stamind-decoration-error-1 text-xs">
            {errorMessage}
          </p>
        ))}
    </div>
  )
}

export default InputComponent
