
import { restrautList } from "../config";
import RestaurantCard from "./RestaurantCard";
import {useEffect, useState} from "react"
import Shimmer from "./Shimmer";

function filterData(restaurants,searchText){
    const filterData = restaurants.filter((restaurant) => restaurant.info.name.includes(searchText)
    );
    return filterData
}


const Body = () => {
   const[searchText,setSearchText] = useState("");
   const [restaurants,setRestaurant] = useState([]);

   useEffect(() => {
  getRestaurants();
   }, []);

   async function getRestaurants() {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.5940947&lng=85.1375645&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    setRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle.restaurants);
   }

  console.log("render")

  //Conditional Rendering
  //if restraunt is empty => Shimmer Ui
  // if restraunt has data => actual data ui

 return (restaurants.length === 0) ? <Shimmer /> : (
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
       const data = filterData(restaurants,searchText);
      // update the restaurant detail
      setRestaurant(data);
       
      }}>
        Search</button>
       </div>

        <div className="restaurant-list">
            {
                restaurants.map((restaurant) => {
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






