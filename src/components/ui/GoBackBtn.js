import React from "react"
import { useNavigate } from "react-router-dom"
import '../../styles/GoBackBtn.css'

const GoBackBtn = () => {
  const navigate = useNavigate()
  return (
    <div className="goBack-container" data-testid='go-back-btn'>
      <button onClick={() => navigate(-1)} className="">Go Back</button>
    </div>
  )
}

export default GoBackBtn