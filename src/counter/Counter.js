import {
 Routes,
 Route,
 Link,
 Outlet,
 useMatch,
 useResolvedPath,
} from "react-router-dom"
import styled from "styled-components"
import Functions from "./Functions.js"
import Classes from "./Classes.js"
import NoMatch404 from "../NoMatch404.js"


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

const WrapLinks = styled.div`
display:flex;
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

const Counter = () => {
 return (
  <div>
   <h2>Counter app</h2>
   <WrapLinks>
    <CustomLink to="./Functions">With functions</CustomLink>
    <CustomLink to="./Classes">With classes</CustomLink>
   </WrapLinks>

   <Routes>
    <Route path="/Functions/*" element={<Functions />} />
    <Route path="/Classes/*" element={<Classes />} />
   </Routes>

  </div>
 )
}

export default Counter