
import { restrautList } from "../config";
import RestaurantCard from "./RestaurantCard";
import {useEffect, useState} from "react"
import Shimmer from "./Shimmer";

function filterData(restaurants,searchText){
    const filterData = restaurants.filter((restaurant) => restaurant.info.name.toLowerCase().includes(searchText)
    );
    return filterData
}


const Body = () => {
   const[allResturants,setAllRestaurants] = useState([])
   const[searchText,setSearchText] = useState("");
   const [filteredRestaurants,setFilteredRestaurant] = useState([]);

   useEffect(() => {
  getRestaurants();
   }, []);

   async function getRestaurants() {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.5940947&lng=85.1375645&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    setAllRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle.restaurants);
    setFilteredRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle.restaurants);
   }

  console.log("render")

  //Conditional Rendering
  //if restraunt is empty => Shimmer Ui
  // if restraunt has data => actual data ui

// not rendered components(Early return) 
  if(!allResturants) return null;
 
  if(filteredRestaurants?.length === 0) 
  return <h1>No Resurent match your Filter !!</h1>

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
                    return <RestaurantCard
                    key={restaurant?.info?.h1}
                    {...restaurant?.info}
                    /> 
                    

                    
                })
            }
        
           
            

        </div></>
    )
}

export default Body;






