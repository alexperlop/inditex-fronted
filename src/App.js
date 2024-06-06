import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/ui/Header.js'
import Loading from './components/ui/Loading.js'
const Home = React.lazy(() => import('./pages/Home.js'))
const PodcastDetailPage = React.lazy(() => import('./pages/PodcastDetailPage.js'))
const EpisodeDetailPage = React.lazy(() => import('./pages/EpisodeDetailPage.js'))



function App() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/podcast/:podcastId" element={<PodcastDetailPage />} />
          <Route path="/podcast/:podcastId/episode/:episodeId" element={<EpisodeDetailPage />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
