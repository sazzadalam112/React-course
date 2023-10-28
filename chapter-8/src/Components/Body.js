import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react"; /* This is named export */
import Shimmer from "./Shimmer"; /* This is default export */
import { swiggy_api_URL } from "../constants";
import { Link } from "react-router-dom";
import {filterData} from "../utils/helper";
import useOnline  from "../utils/useOnline";



const Body = () => {
 const[allResturants,setAllRestaurants] = useState([])
 const[searchText,setSearchText] = useState("");
 const [filteredRestaurants,setFilteredRestaurant] = useState([]);

 useEffect(() => {
getRestaurants();
 }, []);

 async function getRestaurants() {
  const data = await fetch(swiggy_api_URL );
  const json = await data.json();
  setAllRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle.restaurants);
  setFilteredRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle.restaurants);
 }

 const isOnline = useOnline();
 if(!isOnline){
  return <h1>🔴Offline, Please check your internet Connection</h1>
 }
if(!allResturants) return null;

return allResturants.length === 0 ? (
<Shimmer /> 
): (
      <>
     <div>
     <input className="search-container"
     type="text"
     placeholder="search"
     value={searchText}
     onChange={(e) => {
      setSearchText(e.target.value);
     }}
     />
     {/* <h1>{searchClicked}</h1> */}
     <button className="search-btn"  onClick={()=>{ 
      //  need to filter data 
     const data = filterData(allResturants,searchText);
    // update the restaurant detail
    setFilteredRestaurant(data);
     
    }}>
      Search</button>
     </div>

      <div className="restaurant-list">
          {/* You have to write logic for No Restrunt fount here  */}
          {filteredRestaurants.map((restaurant) => {
              return (
                <Link
                to={"/restaurant/" + restaurant?.info?.id}
                    key={restaurant?.info?.id}
                    >
                    <RestaurantCard {...restaurant?.info} />
                    </Link>
                    );
          })
          }
      
         
          

      </div></>
  )
}

export default Body;







