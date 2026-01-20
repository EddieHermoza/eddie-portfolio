import { HTTP_METHOD } from 'next/dist/server/web/http'
import { parseErrorHttpMessage } from '../lib/http/parse-error-http'
import { useState } from 'react'

export function useSendRequest(
  url: string,
  method: HTTP_METHOD,
  auth?: string,
  isFormData: boolean = false
) {
  const [loading, setLoading] = useState(false)

  const sendRequest = async (
    payload?: unknown | FormData
  ): Promise<{ data?: unknown; error?: string }> => {
    setLoading(true)

    try {
      const headers: HeadersInit = {
        ...(auth && { Authorization: `Bearer ${auth}` }),
      }

      if (!isFormData) {
        headers['Content-Type'] = 'application/json'
      }

      const res = await fetch(url, {
        method: method,
        headers,
        body: isFormData ? (payload as BodyInit) : JSON.stringify(payload),
      })

      const result = await res.json()

      if (!res.ok) {
        const message = parseErrorHttpMessage(result.message)
        return { error: message }
      }

      return { data: result }
    } catch (e: unknown) {
      const message = (e as Error).message || 'Error desconocido'
      return { error: message }
    } finally {
      setLoading(false)
    }
  }

  return { sendRequest, loading }
}
