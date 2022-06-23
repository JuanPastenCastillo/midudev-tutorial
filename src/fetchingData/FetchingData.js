import { Link, Outlet } from "react-router-dom"

const FetchingData = () => {

  return (
    <div>
      <h2>Fetching Data here</h2>
      <p>Differente ways to do it:</p>

      <Link to="FetchAPI">Fetch: then</Link>
      <br/>
      <Link to="AsyncAwait">Async await</Link>

      <Outlet />

    </div>
  )
}

export default FetchingData