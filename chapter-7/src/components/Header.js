import { useState } from "react";
import Logo from "../assets/food-villa.png";
import {Link} from "react-router-dom"; 
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
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/">Cart</Link></li>
        </ul>
 </div>

{isLogin ? <button onClick={() => setIsLogin(false)}>Logout</button>:
<button onClick={() => setIsLogin(true)}>Login</button>}
 
 
    </div>
  )
}
export default Header;