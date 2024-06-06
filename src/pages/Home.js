import React, { useState, useEffect, useCallback } from 'react'
import PodcastList from '../components/PodcastList.js'
import { useFecthPodcastList } from '../services/useFecthPodcastList.js'
import { ITEMS_PER_PAGE } from '../utils/constants.js'
import FilterInput from '../components/ui/FilterInput.js'
import Loading from '../components/ui/Loading.js'
import Error from '../components/ui/Error.js'

const Home = () => {
  const { podcastList, error, isLoading } = useFecthPodcastList()
  const [visiblePodcasts, setVisiblePodcasts] = useState([])
  const [hasMore, setHasMore] = useState(true)

  useEffect(() => {
    if (podcastList?.length > 0) {
      setVisiblePodcasts(podcastList?.slice(0, ITEMS_PER_PAGE))
      setHasMore(podcastList?.length > ITEMS_PER_PAGE)
    }
  }, [podcastList])

  const loadMore = useCallback(() => {
    if (!visiblePodcasts.length) return
    const nextPageStartIndex = visiblePodcasts.length
    const nextPageEndIndex = nextPageStartIndex + ITEMS_PER_PAGE
    const nextPage = podcastList.slice(nextPageStartIndex, nextPageEndIndex)
    setVisiblePodcasts((prevVisiblePodcasts) => [...prevVisiblePodcasts, ...nextPage])
    setHasMore(nextPageEndIndex < podcastList.length)
  }, [podcastList, visiblePodcasts])



  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset
      if (position + window.innerHeight >= document.documentElement.scrollHeight - 100 && hasMore && !isLoading) {
        loadMore()
      } else {
        setHasMore(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [visiblePodcasts])


  const handleInputChange = (e) => {
    const filteredPodcasts = podcastList.filter((podcast) => {
      return (podcast?.title?.label?.toLowerCase().includes(e.toLowerCase())
        ||
        podcast?.['im:artist']?.label?.toLowerCase().includes(e.toLowerCase()))
    })
    setHasMore(false)
    setVisiblePodcasts(filteredPodcasts)
  }

  if (isLoading && !error) return <Loading />

  if (error) return <Error error={error} />

  return (
    <main>
      <FilterInput
        podcastList={podcastList}
        visiblePodcasts={visiblePodcasts}
        onFilter={handleInputChange}
      />
      {!isLoading && <PodcastList
        podcastList={podcastList}
        visiblePodcasts={visiblePodcasts}
        error={error}
      />}
    </main>
  )
}

export default Home
