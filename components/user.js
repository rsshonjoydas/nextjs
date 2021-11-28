import React from 'react'

const User = ({ user }) => {
  return (
    <>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <hr />
    </>
  )
}

export default User
