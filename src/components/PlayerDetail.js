import React, { useState, useEffect } from 'react'

const PlayerDetail = (props) => {
  const [data, setData] = useState([])

  const getData = async () => {
    const response = await fetch(
      'https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?p=' +
        encodeURIComponent(props.name)
    )
    const data = await response.json()
    setData(data)
  }

  useEffect(() => {
    getData()
  }, [])

  if (data.player) {
    setData(data.player[0])
  }

  const instaLink = 'https://www.' + data.strInstagram
  const fbLink = 'https://www.' + data.strFacebook
  const twtLink = 'https://www.' + data.strTwitter

  return (
    <article>
      <div className='db1 content'>
        <div className='db1-semi content '>
          <div className='dates content '>
            <div className='box content player-detail-item'>
              <p className='item-head'>Date Born: </p>
              <p className='item-value'> {data.dateBorn}</p>
            </div>
            <div className='box content player-detail-item'>
              <p className='item-head'>Date Signed: </p>
              <p className='item-value'> {data.dateSigned}</p>
            </div>
          </div>
          <div className='dates content '>
            <div className='location player-detail-item box content'>
              <p className='item-head'>Birth Location: </p>
              <p className='item-value'> {data.strBirthLocation}</p>
            </div>
          </div>
          <div className='dates content '>
            <div className='box content player-detail-item'>
              <p className='item-head'>Nationality: </p>
              <p className='item-value'> {data.strNationality}</p>
            </div>
          </div>
          <div className='dates content '>
            <div className='box content player-detail-item'>
              <p className='item-head'>Team: </p>
              <p className='item-value'> {data.strTeam}</p>
            </div>
          </div>
          <div className='dates content '>
            <div className='box content player-detail-item'>
              <p className='item-head'>Agent Name: </p>
              <p className='item-value'> {data.strAgent}</p>
            </div>
          </div>
          <div className='dates content '>
            <div className='position box content player-detail-item'>
              <p className='item-head'>Position: </p>
              <p className='item-value'> {data.strPosition}</p>
            </div>
          </div>
        </div>
        <div className='pic box content'>
          <div className='cutout content '>
            <img src={data.strCutout} />
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
          </div>
        </div>
      </div>

      <div className='db2 content '>
        <div className='rw content'>
          <div className='height box content player-detail-item'>
            <p className='item-head'>Height: </p>
            <p className='item-value'> {data.strHeight}</p>
          </div>
          <div className='weight box content player-detail-item'>
            <p className='item-head'>Weight: </p>
            <p className='item-value'> {data.strWeight}</p>
          </div>
        </div>

        <div className='rw content'>
          <div className='box content player-detail-item'>
            <p className='item-head'> Wage: </p>
            <p className='item-value'> {data.strWage}</p>
          </div>
          <div className='box content player-detail-item'>
            <p className='item-head'>Kit: </p>
            <p className='item-value'> {data.strKit}</p>
          </div>
        </div>
      </div>

      <div className='box content player-detail-description'>
        <p className='item-value'> {data.strDescriptionEN}</p>
      </div>
    </article>
  )
}

export default PlayerDetail
