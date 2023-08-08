import axios from 'axios'
import { AxiosError, AxiosResponse } from 'axios'
import { Session } from 'next-auth'

import { API_URL } from '../utils/constants'

type Callbacks<T = any> = {
    success?: (value?: T) => void
    error?: (value?: T) => void
    finally?: () => void
  }

type CallsProps = {
    endpoint: string
    withToken?: boolean
    body?: unknown
    callbacks?: Callbacks
    headers?: Record<string, string>
  }

type PostProps = CallsProps

interface AuthProviderProps {
    session: Session | null
  }

const instance = axios.create({
    baseURL: API_URL,
    headers: {
      'Content-Type': 'application/json'
    }
  })

export const manageResponse = (
    response: AxiosResponse<any>,
    callbacks?: Callbacks
  ) => {
    if (response.status >= 200 && response.status < 400) {
      if (callbacks?.success != null) callbacks.success(response.data ?? response)
    } else {
      throw Error(response.data)
    }
    return response.data
  }

export const manageError = (error: any, callbacks?: Callbacks) => {
    const { response } = error as AxiosError<any>

    if (callbacks?.error) {
      if (response?.data) {
        callbacks?.error(response.data)
      }
    } else throw error
  }

export const ApiProvider = (param: AuthProviderProps) => {
    const setHeaders = (withToken: boolean, headers?: Record<string, string>) => {
        return {
          headers: {
            ...(withToken && param.session
              ? {
                  client: param.session.user?.client,
                  uid: param.session.user?.uid,
                  'access-token': param.session.user?.accessToken,
                  ...headers
                }
              : {
                  ...headers
                })
          }
        }
      }
    
    const doPost = async function <T>({
        endpoint,
        body,
        callbacks,
        headers = {},
        withToken = true
      }: PostProps) {
        try {
          const result = await instance
            .post(endpoint, body, setHeaders(withToken, headers))
            .then(response => manageResponse(response, callbacks))
    
          return result as T
        } catch (error) {
          manageError(error, callbacks)
        } finally {
          if (callbacks?.finally != null) callbacks.finally()
        }
      }

      return {
        doPost
      }
    }

export const useApi = (props: AuthProviderProps) => ApiProvider(props)
