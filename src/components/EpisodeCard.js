import React from 'react'
import Divider from './ui/Divider.js'
import '../styles/PodcastDetail.css'

const EpisodeCard = ({ podcastDetail }) => {
  return (
    <div className='podcast_detail-info'>
      <figure>
        <img src={podcastDetail[0].artworkUrl100} alt={podcastDetail.collectionName} />
      </figure>
      <Divider />
      <h2>{podcastDetail[0].collectionName}</h2>
      <p>by {podcastDetail[0].artistName}</p>
      <Divider />
      <p className='bold'>Description:</p>
      <p>{podcastDetail[1].shortDescription}</p>
    </div>
  )
}

export default EpisodeCard