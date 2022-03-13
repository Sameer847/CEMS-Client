import React, { useState } from 'react'
import './home.scss';
import {
  useWindowHeight,
} from '@react-hook/window-size/throttled'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const windowHeight = useWindowHeight();
  const [currentYear] = useState(new Date().getFullYear());
  const navigate = useNavigate();

  return (
    <div>
      <div className="hero-section d-flex align-items-center justify-content-center flex-column" style={{ height: `${windowHeight - 75}px` }}>
        <div className="container text-light d-flex flex-column align-items-center">
          <h1 className="display-2 mb-4 fw-bold">
            Welcome to <span className="font-pacifico fw-normal">Happenings</span> {currentYear}.
          </h1>
          <h1 className='font-pacifico mb-4'>Take a Leap, Now it's your time to participate.</h1>
          <div className="action-btns mt-4 d-flex">
            <button className="btn btn-primary d-flex align-items-center rounded-pill px-4 py-2 me-4 bg-gradient" onClick={() => navigate('/events')}>
              <i className="material-icons me-2">event</i>
              Find Events
            </button>
            <button className="btn btn-secondary d-flex align-items-center text-light bg-gradient rounded-pill px-4 py-2" onClick={() => navigate('/about-us')}>
              <i className="material-icons me-2">business</i>
              About us
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home