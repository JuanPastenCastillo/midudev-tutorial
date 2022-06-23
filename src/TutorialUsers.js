import {
  Routes,
  Route,
  Outlet,
  Link,
  NavLink,
  useParams,
  useSearchParams,
} from "react-router-dom"

const TutorialUsers = ({ usersData }) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const searchTerm = searchParams.get("name") || ""

  const handleSearch = (event) => {
    const name = event.target.value
    if (name) {
      setSearchParams({ name: event.target.value })
    } else {
      setSearchParams({})
    }
  }

  return (
    <div>
      <h2>Tutorial users here</h2>
      <p>Search by input and get deeply information</p>
      <input type="text" value={searchTerm} onChange={handleSearch} />
      <ul>
        {usersData
          .filter((x) =>
            x.fullName.toLowerCase().includes(searchTerm.toLocaleLowerCase()),
          )
          .map((x) => (
            <li key={x.id}>
              <Link to={x.id}>{x.fullName}</Link>
            </li>
          ))}
      </ul>
      <div>
        <Outlet />
      </div>




      <Link to="/">Back to home </Link>
    </div>
  )
}

export default TutorialUsers
