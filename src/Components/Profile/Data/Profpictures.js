import React from 'react'

const Profpictures = (props) => {
  const pictures = props.profilePictures.map((picture, index) => {
    return (
      <img key={index} src={picture.image} alt={picture.image} />
      //state.image
    )
  })
  return (
    <div>
      {/* {props.state} */}
      {pictures}
    </div>
  )
}
export default Profpictures