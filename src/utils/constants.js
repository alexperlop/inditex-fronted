export const ITEMS_PER_PAGE = 30

export const HEADER_ITEMS = [
  {
    id: crypto.randomUUID(),
    title: 'Podcaster',
    path: '/'
  }
]

export const CACHE_KEY = 'PODCAST_CACHE'
export const CACHE_TIME_KEY = 'PODCAST_CACHE_TIME'
export const CACHE_DETAIL_KEY = 'PODCAST_DETAIL_CACHE'
export const CACHE_DETAIL_TIME_KEY = 'PODCAST_DETAIL_CACHE_TIME'
export const ONE_DAY_IN_MS = 24 * 60 * 60 * 1000