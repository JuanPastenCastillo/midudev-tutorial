import {
 Routes,
 Route,
 Link,
 Outlet,
 useMatch,
 useResolvedPath,
} from "react-router-dom"
import styled from "styled-components"
import Classes from "./Classes.js"
import Functions from "./Functions.js"
import Home from "./Home.js"
import NoMatch404 from "./NoMatch404.js"

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
const StyledLink = styled(Link)`
 padding: 1rem;
 box-shadow: 2px 3px 8px -1px rgb(0, 0, 0, 0.5);
 color: black;
 margin: 1rem;
 border-radius: 1rem;
 -webkit-text-decoration: none;
 text-decoration: none;
 //background-color: tomato;

 &.matched {
  box-shadow: 2px 3px 8px -1px rgb(105, 65, 224, 0.6);
  // background-color: rgb(105, 65, 224, 0.85);
 }
 
 &{
  transition: box-shadow 0.8s;
 }
 
 &:hover{
  box-shadow: 2px 3px 8px -1px rgb(105, 65, 224, 1);

 }
 
`

const Header = styled.div`
 //border: 1px red solid;
 padding: 10px;
 display: flex;
 justify-content: center;
`

const CustomLink = ({ children, to, ...props }) => {
 let resolved = useResolvedPath(to)
 let match = useMatch({ path: resolved.pathname, end: true })

 return (
  <div>
   <StyledLink className={match ? "matched" : ""} to={to} {...props}>
    {children}
   </StyledLink>
   {match && ""}
  </div>
 )
}

function App() {
 return (
  <MainWrapper>
   <Header>
    <CustomLink to="/">To Home</CustomLink>
    <CustomLink to="/classes">To Classes</CustomLink>
    <CustomLink to="/functions">To Functions</CustomLink>
    < Outlet/>
   </Header>
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="classes" element={<Classes />} />
    <Route path="functions" element={<Functions />} />
    <Route path="*" element={<NoMatch404 />} />
   </Routes>
  </MainWrapper>
 )
}

export default App
