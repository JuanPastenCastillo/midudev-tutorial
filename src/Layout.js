import { Routes, Route, Outlet, Link, NavLink } from "react-router-dom"

const Layout = () => {

 return (
  <div>
   <h2>React router tutorial here</h2>
   <h3>
    <Outlet />
   </h3>
  </div>
 )
}

export default Layout
