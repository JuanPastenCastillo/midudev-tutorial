import {
 Routes,
 Route,
 Link,
 NavLink,
 Outlet,
 useMatch,
 useResolvedPath,
 useNavigate,
} from "react-router-dom"


const UserRoutes = () => {
 return (
  <>
   <h2>User component</h2>

   <nav>
    <Link to="Profile">Profile here</Link>
    <Link to="Account">Account here</Link>
   </nav>
   
   <Outlet />


  </>
 )
}

export default UserRoutes