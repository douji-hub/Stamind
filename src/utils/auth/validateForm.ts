export const validateEmail = (email: string): boolean => {
  return email.trim() !== ''
}

export const validateUsername = (username: string): boolean => {
  return username.trim() !== ''
}

export const validatePassword = (password: string) => ({
  length: password.length >= 8,
  uppercase: /[A-Z]/.test(password),
  lowercase: /[a-z]/.test(password),
  number: /\d/.test(password),
  specialChar: /[!@#$%^&*(),.?":{}|<>~`]/.test(password),
})
