import { useState , useContext } from "react";
import FoodFireLogo from "../Images/Food Fire Logo.png";
import { Link } from "react-router-dom"; // imported Link for client side routing
import { useNavigate } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";

// Title component for display logo
const Title = () => (
  <a href="/">
    <img
      className="h-40 pl-5 "
      src={FoodFireLogo}
      alt="Food Fire Logo"
      title="Food Fire Logo"
    />
  </a>
);

// Header component for header section: Logo, Nav Items
const Header = () => {
  // use useState for user logged in or logged out
  const [isLoggedin, setIsLoggedin] = useState(true);
  const navigate = useNavigate();

  const isOnline = useOnline();

  const {user} = useContext(UserContext);
  return (
    <div className="bg-slate-100 border-4 border-indigo-200 border-y-indigo-500 m-5 flex justify-between sm:bg-red-900 md:bg-blue-900">
      <Title />
      <div className="nav-itmes">
        <ul className="flex py-16" > 
          <li className="px-10">
            <Link to="/">Home</Link>
          </li>
          <li className="px-10">
            <Link to="/about">About</Link>
          </li>

          <li className="px-10">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-10">
            <Link >Cart</Link>
          </li>
          <li className="px-10">
            <Link to="/instamart">Instamart</Link>
          </li>
          {/* <li>
            <i className="fa-solid fa-cart-shopping"></i>
          </li> */}
          <li>
            {/* use conditional rendering for login and logout */}
           
          </li>
        </ul>
      </div>
      <h1>{isOnline? '✅': '🔴'}</h1>
      <h1 className="p-10 font-bold text-red-500 text-2xl">{user.name}</h1>
      {isLoggedin ? (
              <button
                className="logout-btn"
                onClick={() => setIsLoggedin(false)}
              >
                Logout
              </button>
            ) : (
            <button className="login-btn" onClick={() => navigate("/login")}>
                Login
              </button>
            )}
    </div>
  );
};

export default Header;
