import React from 'react'

const UserItem = (props) => (
  <div className="card" onClick={()=>{props.onClick && props.onClick(props.user)}}>
    <div className="card-body">
      <h5 className="card-title">{props.user.name}</h5>
      <p className="card-text">{props.user.email}</p>
      <p className="card-text">{props.user.address.city}</p>
      <p>{props.user.phone}</p>
      <p>{props.user.website}</p>
      <p>{props.user.company.name}</p>

      {/*<a href="#" className="btn btn-primary" onClick={() => {props.onEditClick && props.onEditClick(props.user)}}>Edit</a>*/}
    </div>
  </div>
)

export default UserItem
