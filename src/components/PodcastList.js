// src/components/PodcastList.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';

const PodcastList = () => {
  const [podcasts, setPodcasts] = useState([]);

  // useEffect(() => {
  //   axios.get('/api/podcasts')
  //     .then(response => setPodcasts(response.data))
  //     .catch(error => console.error(error));
  // }, []);

  return (
    <div>
      <h2>Podcast List</h2>
      <ul>
        {podcasts.map(podcast => (
          <li key={podcast.id}>
            <Link to={`/podcast/${podcast.id}`}>{podcast.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PodcastList;
