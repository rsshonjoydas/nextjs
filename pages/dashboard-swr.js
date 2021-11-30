import useSWR from 'swr'

const fetcher = async () => {
  const response = await fetch('http://localhost:4000/dashboard')
  const data = await response.json()
  return data
}

const DashboardSWR = () => {
  const { data, error } = useSWR('dashboard', fetcher)

  if (error) return 'An error has occurred'
  if (!data) return 'Loading...'

  return (
    <div>
      <h2>Dashboard</h2>
      <h2>Posts - {data.posts}</h2>
      <h2>Posts - {data.likes}</h2>
      <h2>Posts - {data.followers}</h2>
      <h2>Posts - {data.following}</h2>
    </div>
  )
}

export default DashboardSWR
