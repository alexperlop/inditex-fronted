import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
const Home = React.lazy(() => import('./pages/Home.js'));
const PodcastDetailPage = React.lazy(() => import('./pages/PodcastDetailPage.js'));
const EpisodeDetailPage = React.lazy(() => import('./pages/EpisodeDetailPage.js'));


// Si estás en modo de desarrollo, importa los assets sin minimizar
// if (process.env.REACT_APP_ENV === 'development') {
//   import('./styles/development.css');
// } else {
//   // Si estás en modo de producción, importa los assets concatenados y minimizados
//   import('./styles/production.min.css');
// }

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/podcast/:podcastId" element={<PodcastDetailPage />} />
          <Route path="/podcast/:podcastId}/episode/:episodeId:" element={<EpisodeDetailPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
