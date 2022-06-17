import { Routes, Route, Link, Outlet, useMatch, useResolvedPath } from "react-router-dom"


const NoMatch404 = () => {
 return (
  <div>
   <h1>Nothing match with the url you search!</h1>
   <p>
    <Link to="/">Go to home   </Link>
   </p>
  </div>
 )
}

export default NoMatch404