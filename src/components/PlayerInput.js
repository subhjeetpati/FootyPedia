import React, { useState } from 'react'
import PlayerDetail from './PlayerDetail'

const PlayerInput = () => {
  const [firstName, setFirstName] = useState('')
  const [secondName, setSecondName] = useState('')
  const [canSearch, setCanSearch] = useState(false)

  const handlesubmit = (e) => {
    e.preventDefault()
    setCanSearch(true)
  }

  if (canSearch) {
    return (
      <>
        <form className='player-form' onSubmit={handlesubmit}>
          <div className='form-control'>
            <input
              type='text'
              id='FirstName'
              name='FirstName'
              placeholder='Enter Firstname'
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value)
                setCanSearch(false)
              }}
              required
            />
          </div>
          <div className='form-control'>
            <input
              type='text'
              id='SecondtName'
              name='SecondName'
              placeholder='Enter Second Name'
              value={secondName}
              onChange={(e) => {
                setSecondName(e.target.value)
                setCanSearch(false)
              }}
              required
            />
          </div>
          <button type='submit' onClick={handlesubmit}>
            Search
          </button>
        </form>
        <PlayerDetail firstName={firstName} secondName={secondName} />
      </>
    )
  }

  return (
    <>
      <form className='player-form' onSubmit={handlesubmit}>
        <div className='form-control'>
          <input
            type='text'
            id='FirstName'
            name='FirstName'
            placeholder='Enter Firstname'
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value)
              setCanSearch(false)
            }}
            required
          />
        </div>
        <div className='form-control'>
          <input
            type='text'
            id='SecondtName'
            name='SecondName'
            placeholder='Enter Second Name'
            value={secondName}
            onChange={(e) => {
              setSecondName(e.target.value)
              setCanSearch(false)
            }}
            required
          />
        </div>
        <button type='submit' onClick={handlesubmit}>
          Search
        </button>
      </form>
    </>
  )
}

export default PlayerInput
