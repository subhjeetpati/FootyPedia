import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const TeamDetail = (props) => {
  const [data, setData] = useState([])

  const getData = async () => {
    const response = await fetch(
      'https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=' +
        encodeURIComponent(props.name)
    )
    const data = await response.json()
    setData(data)
  }

  useEffect(() => {
    getData()
  }, [])

  if (data.teams) {
    setData(data.teams[0])
    console.log(data)
  }

  const instaLink = 'https://www.' + data.strInstagram
  const fbLink = 'https://www.' + data.strFacebook
  const twtLink = 'https://www.' + data.strTwitter
  const ytLink = 'https://www.' + data.strYoutube
  console.log(instaLink)

  return (
    <>
      <article>
        <div className='db1 content'>
          <div className='db1-semi content '>
            <div className='dates content '>
              <div className='box content player-detail-item'>
                <p className='item-head'>Year Formed: </p>
                <p className='item-value'> {data.intFormedYear}</p>
              </div>
              <div className='box content player-detail-item'>
                <p className='item-head'>Country: </p>
                <p className='item-value'> {data.strCountry}</p>
              </div>
            </div>
            <div className='dates content '>
              <div className='location player-detail-item box content'>
                <p className='item-head'>League: </p>
                <p className='item-value'> {data.strLeague}</p>
              </div>
            </div>

            <div className='dates content '>
              <div className='box content player-detail-item'>
                <p className='item-head'>Stadium: </p>
                <p className='item-value'> {data.strStadium}</p>
              </div>
            </div>
            <div className='dates content '>
              <div className='box content player-detail-item'>
                <p className='item-head'>Location: </p>
                <p className='item-value'> {data.strStadiumLocation}</p>
              </div>
            </div>
            <div className='dates content '>
              <div className='position box content player-detail-item'>
                <p className='item-head'>Capacity: </p>
                <p className='item-value'> {data.intStadiumCapacity}</p>
              </div>
            </div>
          </div>
          <div className='pic box content'>
            <div className='cutout content '>
              <img src={data.strTeamBadge} />
            </div>
            <div className='social  content player-detail-item'>
              <span className='icon'>
                <a href={fbLink}>
                  <i className='fa fa-facebook fa-2x'></i>
                </a>
              </span>
              <span className='icon '>
                <a href={twtLink}>
                  <i className='fa fa-twitter fa-2x'></i>
                </a>
              </span>
              <span className='icon'>
                <a href={instaLink}>
                  <i className='fa fa-instagram fa-2x'></i>
                </a>
              </span>
              <span className='icon'>
                <a href={ytLink}>
                  <i className='fa fa-youtube fa-2x'></i>
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className='box content player-detail-description'>
          <p className='item-value'> {data.strDescriptionEN}</p>
        </div>

        <div className='box content player-detail-description'>
          <p className='item-value'> {data.strStadiumDescription}</p>
        </div>
      </article>
    </>
  )
}

export default TeamDetail
