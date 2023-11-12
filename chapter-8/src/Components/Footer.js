
// import { useContext } from "react";
// import UserContext from "../utils/UserContext";
// const Footer = () => {
//   const {user} = useContext(UserContext)
//   return <h4 className="p-4 m-4">This site is developed by {user.name} - {user.email}</h4>
// };
// export default Footer;
import { useContext } from "react";
import UserContext from "../utils/UserContext";
const Footer = () => {
  const { user} = useContext(UserContext);
  return(
  <h1 className="p-4 m-4">This site is developed by {user.name}-{user.email}</h1>
  )
  };
export default Footer;