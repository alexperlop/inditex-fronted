import React from 'react'
import '../../styles/Table.css'
import { formatDate, formatTime } from '../../utils/common.js'
import { Link, useParams } from 'react-router-dom'

const Table = ({ columns, data }) => {
  const { podcastId } = useParams()
  return (
    <section className='table-container'>
      <table>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((episode) => (
            <tr key={episode.trackId}>
              <td>
                <Link to={`/podcast/${podcastId}/episode/${episode.trackId}`}>{episode.trackName}</Link>
              </td>
              <td>{formatDate(episode.releaseDate)}</td>
              <td>{formatTime(episode.trackTimeMillis)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}

export default Table