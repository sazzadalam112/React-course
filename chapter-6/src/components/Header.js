import { useState } from "react";

// const loggedInUser = () => {
//     // Api call to check authentication 
//     return true;
// };

const Title = () => (
    <a href="/">
    <img 
    className="logo"
    alt="logo"
    src="https://1000logos.net/wp-content/uploads/2018/08/The-World%E2%80%99s-Top-20-Restaurant-Logos-768x432.jpg" />
</a>)

const Header = () => {
 const [isLoggedIn,setIsLoggedIn] = useState(true);
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

        {isLoggedIn ?  (<button onClick={() => setIsLoggedIn(false)}>Logout</button>  
        ): (
        <button onClick={() =>setIsLoggedIn(true)}>Login</button>
        )}
        </div>
    );
};

export default Header;
