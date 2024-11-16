import { Button } from '@material-tailwind/react'
import React from 'react'

const GoogleSignInComponent = () => {
  return (
    <Button
      size="lg"
      variant="filled"
      className="w-full flex justify-center items-center gap-3 text-gray-900 bg-stamind-white-000"
    >
      <img
        src="https://docs.material-tailwind.com/icons/google.svg"
        alt="metamask"
        className="h-6 w-6"
      />
      Continue with Google
    </Button>
  )
}

export default GoogleSignInComponent
