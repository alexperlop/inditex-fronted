import React, { useEffect, useState } from "react"
import { HEADER_ITEMS } from "../../utils/constants.js"
import { Link, useLocation } from "react-router-dom"
import "../../styles/Header.css"

const IconLoading = () => {
  return <span className="podcast_icon-loading" />
}

const Header = () => {
  const [showLoadingIndicator, setShowLoadingIndicator] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setShowLoadingIndicator(true);

    const timeoutId = setTimeout(() => {
      setShowLoadingIndicator(false);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [location]);

  return (
    <header className="podcast_header">
      <nav>
        <ul className="podcast_nav-list">
          {HEADER_ITEMS?.map(item => (
            <li key={item?.id}>
              <Link to={item?.path}>
                {item?.title}
              </Link>
            </li>
          ))}
        </ul>
        {showLoadingIndicator && <IconLoading />}
      </nav>
    </header>
  )
}

export default Header