import { useEffect, useState, useCallback } from "react"
import axios from "axios"
import { CACHE_KEY, CACHE_TIME_KEY, ONE_DAY_IN_MS } from "../utils/constants.js"

export const useFecthPodcastList = () => {
  const [podcastList, setPodcastList] = useState([])
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const fecthPodcastList = useCallback(async () => {
    try {
      setIsLoading(true)
      const currentTime = new Date().getTime()
      const cachedData = localStorage.getItem(CACHE_KEY)
      const cachedTime = localStorage.getItem(CACHE_TIME_KEY)
      if (cachedData && +cachedTime && (currentTime - +cachedTime < ONE_DAY_IN_MS)) {
        const data = JSON.parse(cachedData)
        setPodcastList(data?.feed?.entry)
        setIsLoading(false)
        return
      } else {
        // Si no hay datos válidos en caché, realiza una solicitud a AllOrigins
        const response = await axios.get('https://api.allorigins.win/get', {
          params: {
            url: 'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json'
          }
        })
        const data = JSON.parse(response.data.contents)
        setPodcastList(data?.feed?.entry)
        // Almacena los datos y el tiempo en localStorage
        localStorage.setItem(CACHE_KEY, JSON.stringify(data))
        localStorage.setItem(CACHE_TIME_KEY, currentTime.toString())
      }
    } catch (error) {
      console.error("fecthPodcastList ~ error:", error)
      setError(error.message)
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    fecthPodcastList()
  }, [])


  return {
    podcastList,
    error,
    isLoading
  }
}
