import React from 'react'

import {Button} from "@material-tailwind/react"

type ButtonComponentProps = {
  label: string;
  variant?: "filled" | "gradient" | "outlined" | "text";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  customClass?: string;
}

const ButtonComponent = (props: ButtonComponentProps) => {
  const {
    label,
    variant = "filled",
    onClick,
    disabled = false,
    customClass = "",
  } = props

  return (
    <Button
      variant={variant}
      className={`text-center text-sm text-nowrap normal-case ${customClass}`}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </Button>
  )
}

export default ButtonComponent