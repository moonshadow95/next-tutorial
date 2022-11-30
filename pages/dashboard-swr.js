import useSWR from 'swr'
import React from "react";

const fetcher = async () => {
  const data = await (await fetch('http://localhost:4000/dashboard')).json()
  return data
}
const DashboardSWR = (props) => {
  const {data, error} = useSWR('dashboard', fetcher)

  if (error) return 'An error has occurred'
  if (!data) return 'Loading...'
  return (
    <div>
      <h2>Dashboard</h2>
      <h2>Posts - {data.posts}</h2>
      <h2>Likes - {data.likes}</h2>
      <h2>Followers - {data.followers}</h2>
      <h2>Following - {data.following}</h2>
    </div>
  )
}

export default DashboardSWR;
