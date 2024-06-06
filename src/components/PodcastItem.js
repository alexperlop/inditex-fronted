import React from "react"
import { Link } from "react-router-dom"
import "../styles/PodcastItem.css"

const PodcastItem = ({ id, title, img, author }) => {
  return (
    <li key={id} className='podcast_list_item'>
      <Link to={`/podcast/${id}`}>
        <figure>
          <img src={img} alt={title} className='podcast_img' />
          <figcaption className="podcast_list-title">{title}</figcaption>
        </figure>
        <p>{author}</p>
      </Link>
    </li>
  )
}

export default PodcastItem
