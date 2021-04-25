import React from 'react'
import {Link} from 'react-router-dom'
import WorksData from './WorksData.json'

const WorksButtonGroup = ({token}) => {
  return (
    <div className="btnGroupWrapper">
      <div className="row">
      {
        WorksData.buttonGroupp.map((btn, index) => (
          <div className="col-lg-3 col-md-6">
            <Link to={btn.path} key={index} className={`${token === btn.isActive && "active"}`}>{btn.title}</Link>
          </div>
        ))
      }
    </div>
    </div>
  )
}

export default WorksButtonGroup
