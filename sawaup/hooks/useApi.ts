import { useState, useEffect, useCallback } from 'react'
import type { HttpRequest } from '../types/http-request'

function useApi<T>(request: HttpRequest): [boolean, T] {
  const [loading, setLoading] = useState<boolean>(true)
  const [data, setData] = useState<T | any>(null)

  const fetchApi = () => {
    fetch(`http://127.0.0.1:8080/api${request.route}`)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setLoading(false);
        setData(json);
      });
  }

  useEffect(() => {
    fetchApi()
  }, [])

  return [loading, data]
}

export default useApi
