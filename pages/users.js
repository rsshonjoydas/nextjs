const UserList = ({ users }) => {
  return (
    <>
      <h1>List of Users</h1>
      {users.map(user => {
        return (
          <div key={user.id}>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <hr />
          </div>
        )
      })}
    </>
  )
}

export default UserList

export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await response.json()
  console.log(data)

  return {
    props: {
      users: data
    }
  }
}