import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  // how to read a dynamic URL params 
   const {resId} = useParams();
   // Use Proper names
   const[restaurant,setRestaurant] = useState(null); 


   useEffect(() => {
   getRestraurantInfo();
   }, []);

   async function getRestraurantInfo() {
    const data = await fetch("https://swiggyapiwrapper.dineshrout.repl.co/api/restaurants/221504" 
    );
    const json = await data.json();
    console.log(json);
    setRestaurant(json?.data?.cards[0]?.card?.card?.info);
   }
   if(!restaurant){
    return<Shimmer />;
   } 
  return (
    <div className="menu">
      <div>
      <h1>Restraunt id:{resId}</h1>
      <h1>{restaurant.name}</h1>
      <img src={IMG_CDN_URL + restaurant.cloudinaryImageId} />
      <h3>{restaurant.city}</h3>
      <h3>{restaurant.locality}</h3>
      <h3>{restaurant.cuisines  }</h3>
      
      </div>
      <div>
        {/* {console.log(restaurant.sla)};     */}
        <h1>Menu</h1>
        <ul>
          {/* USE MAP HERE  */}
          {Object.values(restaurant.sla).map((item) => (
            <li>{item.sla}</li>
          ))}
          <li>{restaurant.name}</li>
          <li>{restaurant.city}</li> 
          <li>{restaurant.id}</li>
          <li>{restaurant.locality}</li>
          </ul>
       
      </div>
    </div>
  )
}

export default RestaurantMenu;
