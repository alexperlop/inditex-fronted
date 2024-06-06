import React, { useEffect, useState } from 'react'
import EpisodeDetail from '../components/EpisodeDetail.js'
import GoBackBtn from '../components/ui/GoBackBtn.js'
import { useParams } from 'react-router-dom'
import { CACHE_DETAIL_KEY } from '../utils/constants.js'
import Loading from '../components/ui/Loading.js'

const EpisodeDetailPage = () => {
  const { episodeId } = useParams()
  const [episode, setEpisode] = useState(null)
  const [podcastDetail, setPodcastDetail] = useState(null)

  useEffect(() => {
    const cacheData = localStorage.getItem(CACHE_DETAIL_KEY)
    if (cacheData) {
      const data = JSON.parse(cacheData)
      const episodes = data?.results
      setPodcastDetail(data?.results)
      const episodeMatch = episodes.find((episode) => +episode.trackId === +episodeId)
      if (episodeMatch) {
        setEpisode(episodeMatch)
        return
      }
    }
    return () => {
      setEpisode(null)
    }
  }, [episodeId])


  if (!episode) return <Loading />

  return (
    <>
      <GoBackBtn />
      <EpisodeDetail podcastDetail={podcastDetail} episode={episode} />
    </>
  )
}

export default EpisodeDetailPage
