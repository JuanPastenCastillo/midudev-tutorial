import * as React from "react"
import {
  Routes,
  Route,
  // Link,
  NavLink,
  // Outlet,
  // useMatch,
  // useResolvedPath,
  useNavigate,
} from "react-router-dom"
import styled from "styled-components"
import Home from "./Home.js"
import Counter from "./counter/Counter.js"
import NoMatch404 from "./NoMatch404.js"
import TutorialHome from "./TutorialHome.js"
import TutorialUsers from "./TutorialUsers.js"
import Layout from "./Layout.js"
import TutorialUser from "./TutorialUser.js"
import SomeFile from "./counter/deeper/SomeFile.js"
import MoreDeeper from "./counter/deeper/evenDeeper/MoreDeeper.js"
import UserRoutes from "./user/UserRoutes.js"
import Profile from "./user/Profile.js"
import Account from "./user/Account.js"
import FetchingData from "./fetchingData/FetchingData.js"
import FetchAPI from "./fetchingData/FetchAPI.js"
import AsyncAwait from "./fetchingData/AsyncAwait.js"
import ListComponent from "./listComponent/ListComponent.js"
import GiftHome from "./giftApplication/GiftHome.js"

const MainWrapper = styled.div`
 /*  display: flex;
 justify-content: center;
 align-items: center;
 align-content: center;
 text-align: center;
 flex-direction: column; */
 //height: 100vh;
 margin-top: 20px;
`
// const StyledLink = styled(Link)`
//  padding: 1rem;
//  box-shadow: 2px 3px 8px -1px rgb(0, 0, 0, 0.5);
//  color: black;
//  margin: 1rem;
//  border-radius: 1rem;
//  -webkit-text-decoration: none;
//  text-decoration: none;
//  //background-color: tomato;

//  &.matched {
//   box-shadow: 2px 3px 8px -1px rgb(105, 65, 224, 0.6);
//   // background-color: rgb(105, 65, 224, 0.85);
//  }

//  &{
//   transition: box-shadow 0.8s;
//  }

//  &:hover{
//   box-shadow: 2px 3px 8px -1px rgb(105, 65, 224, 1);

//  }

// `

const AllProjects = styled.div`
 //border: 1px red solid;
 display: flex;
 justify-content: center;

 > * {
  margin: 10px;

  padding: 10px;
  // border-radius: 5px;
  // border: 1px solid black;
 }
`

// const StyledNavLink = styled(NavLink)`
//  padding:10px;
//  background:blue;
//  color:white;
//  border-radius:5px;

//  &{
//   transition: background 0.4s, color 0.4s;
//  }

//  &:hover{
//   background:yellow;
//   color:black;
//  }
// `

const CustomNavLink = ({ children, to, isActive, ...props }) => {
  const style = ({ isActive }) => ({
    background: isActive ? "black" : "royalblue",
    color: "white",
    padding: "10px",
    borderRadius: "5px",
  })

  return (
    <div>
      <NavLink to={to} style={style}>
        {children}
      </NavLink>
    </div>
  )
}
// const CustomLink = ({ children, to, ...props }) => {
//  let resolved = useResolvedPath(to)
//  let match = useMatch({ path: resolved.pathname, end: true })

//  return (
//   <div>
//    <StyledLink className={match ? "matched" : ""} to={to} {...props}>
//     {children}
//    </StyledLink>
//    {match && ""}
//   </div>
//  )
// }


function App() {
  const usersData = [
    { id: "1", fullName: "John Pasteur" },
    { id: "2", fullName: "Juan Pastén" },
  ]

  const navigate = useNavigate()

  const [users, setUsers] = React.useState([
    { id: "1", fullName: "John Pasteur" },
    { id: "2", fullName: "Juan Pastén" },
  ])

  const handleRemoveUser = (userId) => {
    setUsers((x) => x.filter((y) => y.id !== userId))
    navigate("/TutorialUsers")
  }

  return (
    <MainWrapper>
      <h1>
        You can see here all the{" "}
        <a
          href="https://www.youtube.com/watch?v=T_j60n1zgu0&list=PLV8x_i1fqBw0B008sQn79YxCjkHJU84pC"
          target="_blank"
        >
          midudev tutorial
        </a>{" "}
        from yotube
      </h1>

      <AllProjects>
        <CustomNavLink to="/">To Home</CustomNavLink>
        <CustomNavLink to="/counter/Counter">To Counter</CustomNavLink>
        <CustomNavLink to="/TutorialHome">Tutorial Home</CustomNavLink>
        <CustomNavLink to="/TutorialUsers">Tutorial Users</CustomNavLink>
        <CustomNavLink to="/user">Users Routes</CustomNavLink>
        <CustomNavLink to="/fetchingData">Fetching data</CustomNavLink>
        <CustomNavLink to="/listComponent">List Component</CustomNavLink>
        <CustomNavLink to="/giftApplication">Gift application</CustomNavLink>
      </AllProjects>


      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />

        <Route path="giftApplication" element={<GiftHome />}>
          <Route path="*" element={<NoMatch404 />} />

        </Route>




        <Route path="fetchingData" element={<FetchingData />}>
          <Route path="FetchAPI" element={<FetchAPI />} />
          <Route path="AsyncAwait" element={<AsyncAwait />} />
        </Route>

        <Route path="listComponent" element={< ListComponent />}>

        </Route>





        <Route path="user" element={<UserRoutes />}>
          <Route index element={<Profile />} />
          <Route path="Profile" element={<Profile />} />
          <Route path="Account" element={<Account />} />
          <Route path="*" element={<NoMatch404 />} />
        </Route>


        <Route element={<Layout />}>
          <Route path="tutorialHome" element={<TutorialHome />} />
          <Route
            path="tutorialUsers"
            element={<TutorialUsers usersData={usersData} />}
          >
            <Route
              path=":tutorialUsersId"
              element={<TutorialUser onRemoveUser={handleRemoveUser} />}
            />
          </Route>



        </Route>


        <Route path="counter/*" element={<Counter />} />
        <Route path="counter/deeper/*" element={<SomeFile />} />
        <Route path="counter/deeper/evenDeeper/*" element={<MoreDeeper />} />

        <Route path="*" element={<NoMatch404 />} />
      </Routes>
    </MainWrapper>
  )
}

export default App
