import { useParams, Link } from "react-router-dom"

const TutorialUser = ({ onRemoveUser }) => {
 const { tutorialUsersId } = useParams()

 return (
  <>
   <h2>Number user: {tutorialUsersId}</h2>
   
   <button type="button" onClick={() => onRemoveUser(tutorialUsersId)} >Remove!</button>

   <Link to="/TutorialUsers"> Back to Users</Link>
  </>
 )
}

export default TutorialUser
