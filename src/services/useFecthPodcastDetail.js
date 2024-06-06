import axios from "axios"
import { useCallback, useEffect, useState } from "react"
import { CACHE_DETAIL_KEY, CACHE_DETAIL_TIME_KEY, ONE_DAY_IN_MS } from "../utils/constants.js"

export const useFecthPodcastDetail = ({ podcastId }) => {
  const [podcastDetail, setPodcastDetail] = useState(null)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const fecthPodcastDetail = useCallback(async () => {
    try {
      setIsLoading(true)
      const currentTime = new Date().getTime()
      const cachedData = localStorage.getItem(CACHE_DETAIL_KEY)
      const cachedTime = localStorage.getItem(CACHE_DETAIL_TIME_KEY)
      const idCacheResult = JSON.parse(cachedData)?.results[0]?.collectionId
      if (cachedData && +podcastId === idCacheResult && + cachedTime && (currentTime - +cachedTime < ONE_DAY_IN_MS)) {
        const data = JSON.parse(cachedData)
        setPodcastDetail(data?.results)
        setIsLoading(false)
        return
      } else {
        // Si no hay datos válidos en caché, realiza una solicitud a AllOrigins
        const response = await axios.get('https://api.allorigins.win/get', {
          params: {
            url: `https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=20`
          }
        })
        const data = JSON.parse(response?.data?.contents)
        setPodcastDetail(data?.results)
        // Almacena los datos y el tiempo en localStorage
        localStorage.setItem(CACHE_DETAIL_KEY, JSON.stringify(data))
        localStorage.setItem(CACHE_DETAIL_TIME_KEY, currentTime.toString())
      }
    } catch (error) {
      console.error("fecthPodcastDetail ~ error:", error)
      setError(error.message)
    } finally {
      setIsLoading(false)
    }
  }, [podcastId])

  useEffect(() => {
    fecthPodcastDetail()
  }, [fecthPodcastDetail, podcastId])

  return {
    podcastDetail,
    error,
    isLoading
  }
}
