import React from 'react'
import EpisodeCard from './EpisodeCard.js';
import '../styles/EpisodeDetail.css'

const EpisodeDetail = ({ podcastDetail, episode }) => {
  return (
    <section className='section_episode' data-testid='section_episode'>
      <EpisodeCard podcastDetail={podcastDetail} />
      <div className='episode-card'>
        <h3>{episode.trackName}</h3>
        <p dangerouslySetInnerHTML={{ __html: episode.description }} />
        <audio controls>
          <source src={episode.episodeUrl} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </section>
  );
};

export default EpisodeDetail;
