import { useEffect, useState } from "react";
import { restaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";


function filterData(restaurants,searchtext){
const filterData = restaurants.filter((restaurant) =>
 restaurant.info.name.toLowerCase().includes(searchtext.toLowerCase()));
 
 return filterData;
}


const Body = () => {
    const[allResturants,setAllRestaurants] = useState([])
    const[searchtext,setSearchtext] = useState("")
    const[filteredRestaurants,setFilteredRestaurants] = useState([]);

    useEffect(() => {
    getRestaurants();
    },[])

    async function getRestaurants() {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.5940947&lng=85.1375645&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
      const json = await data.json();
      setAllRestaurants (json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilteredRestaurants (json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    //not render components
    if(!allResturants) return null;
   
    return allResturants.length === 0 ? (
    <Shimmer />
    ) :(
     <>

     <div className="search-container">
     <input 
     type="text"
     className="search-input"
     placeholder="Search"
     value={searchtext}
     onChange={(e) => {
     setSearchtext(e.target.value);
     }}
     />

     {/* <h1>{clickedBtn}</h1> */}
     <button className="search-btn" 
     onClick={() =>{
       const data = filterData(allResturants,searchtext);

      setFilteredRestaurants(data);
       }}
     
     >Search
     </button>

     </div>
       
        <div className="restaurant-list">
      {
        filteredRestaurants.map((restaurant) => {
          return(
            <Link 
            to={"/restaurant" + restaurant?.info?.id} 
            key={restaurant?.info?.id}
            >
              <RestaurantCard{...restaurant?.info}
               /> </Link>
          )
        })
      }
      </div>
      </>
     )
  }
  export default Body;