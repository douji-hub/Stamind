import apiClient from './axiosConfig'
import { AxiosError } from 'axios'

/**
 * Sends a registration request to the API for creating a new user.
 *
 * @param email - The email address of the user.
 * @param password - The password chosen by the user.
 * @param username - The username chosen by the user.
 * @returns A Promise that resolves to the server response data.
 * @throws An Error with the server's error message if the request fails.
 */
export const register = async (
  email: string,
  password: string,
  username: string,
) => {
  try {
    const response = await apiClient.post('auth/users', {
      email,
      password,
      username,
    })

    return response.data
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      const errorMessage =
        error.response?.data?.message || 'Something went wrong'
      throw new Error(errorMessage)
    }

    throw new Error('An unexpected error occurred')
  }
}

/**
 * Sends a resend mail request to the API.
 *
 * @param email - The email address of the user.
 * @returns A Promise that resolves to the server response data.
 * @throws An Error with the server's error message if the request fails.
 */
export const resendEmail = async (email: string, emailType: string) => {
  try {
    await apiClient.post('auth/resend', { email, emailType })
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      const errorMessage =
        error.response?.data?.message || 'Something went wrong'
      throw new Error(errorMessage)
    }

    throw new Error('An unexpected error occurred')
  }
}

/**
 * Sends a forget password mail request to the API.
 *
 * @param email - The email address of the user.
 * @returns A Promise that resolves to the server response data.
 * @throws An Error with the server's error message if the request fails.
 */
export const sendResetPasswordMail = async (email: string) => {
  try {
    await apiClient.post('auth/password-resets', { email })
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      const errorMessage =
        error.response?.data?.message || 'Something went wrong'
      throw new Error(errorMessage)
    }

    throw new Error('An unexpected error occurred')
  }
}

/**
 * reset password request to the API.
 *
 * @param token - reset password token
 * @param newPassword - The new Password of the user.
 * @returns A Promise that resolves to the server response data.
 * @throws An Error with the server's error message if the request fails.
 */
export const sendResetPassword = async (token: string, newPassword: string) => {
  try {
    await apiClient.put('auth/password-resets', { token, newPassword })
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      const errorMessage =
        error.response?.data?.message || 'Something went wrong'
      throw new Error(errorMessage)
    }
    throw new Error('An unexpected error occurred')
  }
}

/**
 * login request to the API.
 *
 * @param email - user email
 * @param password - user password
 * @returns JWT token that success login to the server response.
 * @throws An Error with the server's error message if the request fails.
 */
export const login = async (email: string, password: string) => {
  try {
    const response = await apiClient.post('auth/sessions', { email, password })
    return { token: response.data.token, userId: response.data.userId }
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      const errorMessage =
        error.response?.data?.message || 'Something went wrong'
      throw new Error(errorMessage)
    }
    throw new Error('An unexpected error occurred')
  }
}
