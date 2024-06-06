import React from "react"
import '../../styles/Error.css'

const Error = ({ error }) => {
  return (
    <div className="error" data-testid='error'>
      <h3>ERROR:</h3>
      <p>{error}</p>
    </div>
  )
}

export default Error