import { restrautList } from "../config";
import RestaurantCard from "./RestaurantCard";
import {useState} from "react";

// filterData();
function filterData(searchText,restaurants){
   const filterData = restaurants.filter((restaurant) => 
    restaurant.data.name.includes(searchText));

    return filterData;

}

const Body = () => {
    // const searchTxt = "KFC";
   const [searchText, setSearchText] = useState(" "); // returns =[variable nae,function update the variable]
   const [restaurants,setRestaurants] = useState(restrautList);

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
                    return <RestaurantCard {...restaurant.data } key={restaurant.data.id}/>;
                })
            }
            {/* < RestaurantCard {...restrautList[0].data} />
            < RestaurantCard {...restrautList[1].data} />
            < RestaurantCard {...restrautList[2].data} />
            < RestaurantCard {...restrautList[3].data} />
            < RestaurantCard {...restrautList[4].data} />
            < RestaurantCard {...restrautList[5].data} /> */}

            {/* < RestaurantCard restaurant={restrautList[1]}/>
            < RestaurantCard restaurant={restrautList[2]}/>
            < RestaurantCard restaurant={restrautList[3]}/>
            < RestaurantCard restaurant={restrautList[4]}/>
            < RestaurantCard restaurant={restrautList[5]}/> */}
           
            

        </div></>
    )
}

export default Body;
