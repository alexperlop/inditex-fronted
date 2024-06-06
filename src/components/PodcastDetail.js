import React from 'react'
import '../styles/PodcastDetail.css'
import Table from './ui/Table.js'
import EpisodeCard from './EpisodeCard.js'

const PodcastDetail = ({ podcastDetail }) => {

  return (
    <section className='podcast_detail-section'>
      <EpisodeCard podcastDetail={podcastDetail} />
      <div className='podcast_detail-episodes'>
        <h3>Episodes:{podcastDetail.length}</h3>
        <Table columns={['Title', 'Date', 'Duration']} data={podcastDetail.slice(1)} />
      </div>
    </section>
  )
}

export default PodcastDetail
