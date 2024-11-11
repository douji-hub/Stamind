type Errors = {
  length: boolean
  uppercase: boolean
  lowercase: boolean
  number: boolean
  specialChar: boolean
  match: boolean
  emptyEmail: boolean
  emptyUsername: boolean
}

// Email error msg
export const getEmailErrorMessages = (
  emptyEmail: boolean,
  hasTyped: boolean,
) => {
  return {
    hasError: hasTyped && emptyEmail,
    errorMessages: hasTyped && emptyEmail ? ['Email cannot be empty.'] : [],
  }
}

// Username error msg
export const getUsernameErrorMessages = (
  emptyUsername: boolean,
  hasTyped: boolean,
) => {
  return {
    hasError: hasTyped && emptyUsername,
    errorMessages:
      hasTyped && emptyUsername ? ['Username cannot be empty.'] : [],
  }
}

// Password error msg
export const getPasswordErrorMessages = (errors: Errors, hasTyped: boolean) => {
  if (!hasTyped) return { hasError: false, errorMessages: [] }

  const errorMessages = [
    !errors.length && 'Your password must be at least 8 characters long.',
    !errors.uppercase && 'It must include uppercase letters.',
    !errors.lowercase && 'It must include lowercase letters.',
    !errors.number && 'It must include numbers.',
    !errors.specialChar &&
      'It must include special characters (e.g., !, @, #, etc.).',
  ].filter(Boolean) as string[]

  return { hasError: errorMessages.length > 0, errorMessages }
}

// Confirm Password error msg
export const getConfirmPasswordErrorMessages = (
  match: boolean,
  hasTyped: boolean,
) => {
  return {
    hasError: hasTyped && !match,
    errorMessages:
      hasTyped && !match ? ['Passwords do not match. Please try again.'] : [],
  }
}
