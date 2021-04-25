import React from 'react'

const OurReferences = ({referance}) => {
  return (
    <div className="col-lg-2 col-md-4">
      <img src={`/images/referanslar/${referance.image}.webp`} alt=""/>
    </div>
  )
}

export default OurReferences
 