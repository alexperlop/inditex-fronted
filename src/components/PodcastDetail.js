import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
// import axios from 'axios';

const PodcastDetail = () => {
  const { id } = useParams();
  const [podcast, setPodcast] = useState(null);

  // useEffect(() => {
  //   axios.get(`/api/podcasts/${id}`)
  //     .then(response => setPodcast(response.data))
  //     .catch(error => console.error(error));
  // }, [id]);

  if (!podcast) return <div>Loading...</div>;

  return (
    <div>
      <h2>{podcast.title}</h2>
      <p>{podcast.description}</p>
      <h3>Episodes</h3>
      <ul>
        {podcast.episodes.map(episode => (
          <li key={episode.id}>
            <Link to={`/episode/${episode.id}`}>{episode.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PodcastDetail;
