import {
 Routes,
 Route,
 Link,
 Outlet,
 useMatch,
 useResolvedPath,
 useParams,
} from "react-router-dom"
// import MoreDeeper from "./evenDeeper/MoreDeeper.js"


import styled from "styled-components"


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


const SomeFile = () => {
 return (
  <div>
   <h3>This is some file, deeper!</h3>
   <p>Correct</p>
   
   <h3>Even more deep!</h3>
   <WrapLinks>
    <CustomLink to="/counter/deeper/evenDeeper/MoreDeeper">Go deeper</CustomLink>
   </WrapLinks>

   {/* <Routes>
    <Route path="/Deeper/*" element={<MoreDeeper />} />
   </Routes> */}
   
   
  </div>
 )
}

export default SomeFile