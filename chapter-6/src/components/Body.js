import { restrautList } from "../config";
import RestaurantCard from "./RestaurantCard";
import {useEffect, useState} from "react";

// filterData();
function filterData(searchText,restaurants){
   const filterData = restaurants.filter((restaurant) => 
    restaurant.data.name.includes(searchText));

    return filterData;

}

const Body = () => {
    // const searchTxt = "KFC";
   const [searchText, setSearchText] = useState(""); // returns =[variable nae,function update the variable]
   const [restaurants,setRestaurants] = useState(restrautList);
   
   useEffect(() => {
   getRestaurants();
   },[]);

   async function getRestaurants(){
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.5940947&lng=85.1375645&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    console.log(json);
    setRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        )
   }
    return (
        <>
        <div className="search-container"> 
        <input 
        type="text" 
        className="search-input"
        placeholder="Search"
        value = {searchText}
        onChange={(e) => {
            // e.target.value what ever u write in input 
        setSearchText(e.target.value);
        }}
        />
        
        <button className="search-btn" 
        onClick={() => {
           // need to filter data
           const data =  filterData(searchText,restaurants);
           // update the state - restaurant 
          setRestaurants(data);
         }}
        >
            Search</button>
        </div>
        <div className="restaurant-list">
            {
                restaurants.map((restaurant) => {
                    return(
                        <RestaurantCard
                          key={restaurant?.info?.id}
                          {...restaurant?.info}
                        />
                      ); 
                })
            }
            
        </div></>
    )
}

export default Body;
