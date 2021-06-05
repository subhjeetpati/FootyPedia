import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <main className='home-body'>
      <div className='home-text'>
        <h1 className='title home-title'>FootyPedia</h1>
        <h className='subtitle home-subtitle'>
          Wikipedia for football players.
        </h>
      </div>
      <div className='home-buttons'>
        <Link to='/playerInput'>
          <button className='button is-primary home-btn'>Search Player</button>
        </Link>
        <Link to='/teamInput'>
          <button className='button is-primary home-btn'>Search Team</button>
        </Link>
      </div>
    </main>
  )
}

export default Home
