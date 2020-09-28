import React from 'react'

const Titles = (props) => {
  console.log(props.titlesData)
  const titles = props.titlesData.map((titlenames, index) => {
    return (
      <p key={index}>{titlenames.title}</p>
    )
  })
  return (
    <div>
      {titles}
    </div>
  )
}

export default Titles