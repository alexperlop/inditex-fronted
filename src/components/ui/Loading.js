import React from "react"
import '../../styles/Loading.css'

const Loading = () => {
  return (
    <div className='loading'>
      <div className="custom-spinner">
        <div className="bounce1"></div>
        <div className="bounce2"></div>
        <div className="bounce3"></div>
      </div>
    </div>
  )
}

export default Loading