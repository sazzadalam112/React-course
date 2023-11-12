import food from "../Images/burger-image.png";
import {Outlet} from "react-router-dom";
import Profile from "./Profile";
import UserContext from "../utils/UserContext";
// import Profile from "./ProfileClass"; 



const About = () => {
  return (
    <div >
      <div >
        <h1>
          Welcome to <br /> The world of <br /> <span>Tasty & Fresh Food</span>
        </h1>
        <h4>
          "Better you will feel if you eat a Food<span>Fire</span> healthy meal"
        </h4>
        <Profile />
      </div>
      <div >
        <img src={food} alt="Food Image" />
      </div>
    </div>
  );np
};

export default About;
