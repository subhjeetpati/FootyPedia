import React, { useState, useEffect } from 'react'

const PlayerDetail = (props) => {
  const [data, setData] = useState([])
  console.log(props)

  const getData = async () => {
    const response = await fetch(
      `https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?p=${props.firstName}%20${props.secondName}`
    )
    const data = await response.json()
    setData(data)
    console.log(data)
  }

  useEffect(() => {
    getData()
  }, [])

  if (data.player) {
    console.log(data.player[0].dateBorn)
  }

  return (
    <div>
      <h5>{props.firstName}</h5>
      <h5> {props.secondName}</h5>
    </div>
  )
}

export default PlayerDetail
