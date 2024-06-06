import React from 'react'
import '../../styles/FilterInput.css'

const FilterInput = ({ podcastList, visiblePodcasts, onFilter }) => {
  return (
    <form className='podcast_form-filter'>
      <span className='podcast_filter-popover'>
        {visiblePodcasts.length >= 0 && visiblePodcasts.length !== 30 ? visiblePodcasts.length : podcastList.length}
      </span>
      <input
        type="text"
        placeholder="Search podcasts"
        className='podcast_input-filter'
        onChange={(e) => onFilter(e.target.value)}
      />
    </form>
  )
}

export default FilterInput