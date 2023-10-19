import { restrautList } from "../config";
import RestaurantCard from "./RestaurantCard";
import {useState} from "react";

const Body = () => {
    // const searchTxt = "KFC";
   const [searchInput, setSearchInput] = useState("KFC"); // returns =[variable nae,function update the variable]
   const [searchClicked,setSearchClicked] = useState("False")

    return (
        <>
        <div className="search-container"> 
        <input 
        type="text" 
        className="search-input"
        placeholder="Search"
        value = {searchInput}
        onChange={(e) => {
            // e.target.value what ever u write in input 
        setSearchInput(e.target.value);
        }}
        />
        <h1>{searchClicked}</h1>
        <button className="search-btn" onClick={() => {
            setSearchClicked("True")
        }}
        >
            Search</button>
        </div>
        <div className="restaurant-list">
            {
                restrautList.map((restaurant) => {
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
