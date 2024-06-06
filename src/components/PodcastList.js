import React from 'react'
import PodcastItem from './PodcastItem.js'
import '../styles/PodcastList.css'


const PodcastList = ({ podcastList, visiblePodcasts }) => {
  return (
    <section>
      {podcastList?.length > 0 &&
        <>
          <ul className='podcast_list'>
            {visiblePodcasts?.map(podcast => {
              return (
                <PodcastItem
                  key={podcast?.id?.attributes?.['im:id']}
                  id={podcast?.id?.attributes?.['im:id']}
                  title={podcast?.title?.label}
                  img={podcast?.['im:image'][0]?.label}
                  author={podcast?.['im:artist']?.label}
                />)
            })}
          </ul>
        </>}
    </section>
  )
}

export default PodcastList
