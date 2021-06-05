import React, { useState } from 'react'
import TeamDetail from './TeamDetail'

const TeamInput = () => {
  const [name, setName] = useState('')
  const [canSearch, setCanSearch] = useState(false)

  const handlesubmit = (e) => {
    e.preventDefault()
    setCanSearch(true)
  }

  if (canSearch) {
    return (
      <>
        <div className='full-window'>
          <form className='player-form' onSubmit={handlesubmit}>
            <div className='form-control'>
              <input
                className='input-form input is-info is-medium is-rounded'
                type='text'
                id='Name'
                name='Name'
                placeholder='Enter Team Name'
                value={name}
                onChange={(e) => {
                  setName(e.target.value)
                  setCanSearch(false)
                }}
                required
              />
            </div>
            <button
              type='submit'
              className='btn-form button is-danger is-medium is-rounded'
              onClick={handlesubmit}
            >
              Search
            </button>
          </form>
          <TeamDetail name={name} />
        </div>
      </>
    )
  }

  return (
    <>
      <div className='full-window'>
        <form className='player-form' onSubmit={handlesubmit}>
          <div className='form-control'>
            <input
              className='input-form input is-info is-medium is-rounded'
              type='text'
              id='Name'
              name='Name'
              placeholder='Enter Team Name'
              value={name}
              onChange={(e) => {
                setName(e.target.value)
                setCanSearch(false)
              }}
              required
            />
          </div>
          <button
            type='submit'
            className='btn-form button is-danger is-medium is-rounded'
            onClick={handlesubmit}
          >
            Search
          </button>
        </form>
      </div>
    </>
  )
}

export default TeamInput
