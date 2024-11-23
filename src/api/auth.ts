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
export const register = async (email: string, password: string, username: string) => {
    try {
        const response = await apiClient.post('/auth/register', {
            email,
            password,
            username,
        })

        return response.data
    } catch (error: unknown) {
        if (error instanceof AxiosError) {
            const errorMessage = error.response?.data?.message || 'Something went wrong'
            throw new Error(errorMessage)
        }

        throw new Error('An unexpected error occurred')
    }
}
