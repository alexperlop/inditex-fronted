import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import axios from 'axios';

const EpisodeDetail = () => {
  const { id } = useParams();
  const [episode, setEpisode] = useState(null);

  // useEffect(() => {
  //   axios.get(`/api/episodes/${id}`)
  //     .then(response => setEpisode(response.data))
  //     .catch(error => console.error(error));
  // }, [id]);

  if (!episode) return <div>Loading...</div>;

  return (
    <div>
      <h2>{episode.title}</h2>
      <p>{episode.description}</p>
    </div>
  );
};

export default EpisodeDetail;
