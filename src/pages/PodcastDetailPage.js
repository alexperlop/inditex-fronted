import React from 'react';
import PodcastDetail from '../components/PodcastDetail.js';
import GoBackBtn from '../components/ui/GoBackBtn.js';
import Loading from '../components/ui/Loading.js';
import { useFecthPodcastDetail } from '../services/useFecthPodcastDetail.js';
import { useParams } from 'react-router-dom';
import Error from '../components/ui/Error.js';

const PodcastDetailPage = () => {
  const { podcastId } = useParams()
  const { podcastDetail, error } = useFecthPodcastDetail({ podcastId })

  if (!podcastDetail && !error) return <Loading />

  if (error) return <Error error={error} />

  return (
    <>
      <GoBackBtn />
      <PodcastDetail podcastDetail={podcastDetail} />
    </>
  )
}

export default PodcastDetailPage;
