import { useState } from "react";
import Logo from "../assets/food-villa.png"

const authenticate = () => {
  return true ;
}

const Title = () => (
    <a href="/">
    <img 
    className="logo"
    alt="logo"
    src={Logo}
    />
    </a>
)
const Header = () => {
  const[isLogin,setIsLogin] = useState(true);
  return(
    <div className="header">
      <Title />
      
    <div className="nav-items">
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
        </ul>
 </div>

{isLogin ? <button onClick={() => setIsLogin(false)}>Logout</button>:
<button onClick={() => setIsLogin(true)}>Login</button>}
 
 
    </div>
  )
}
export default Header;