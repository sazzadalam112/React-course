import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react"; /* This is named export */
import Shimmer from "./Shimmer"; /* This is default export */
import { swiggy_api_URL } from "../constants";
import { Link } from "react-router-dom";
import {filterData} from "../utils/helper";
import useOnline  from "../utils/useOnline";



const Body = ({user}) => {
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

//  const isOnline = useOnline();
//  if(!isOnline){
//   return <h1>🔴Offline, Please check your internet Connection</h1>
//  }
 const isOnline = useOnline();
 if(!isOnline){
  return<h1>🔴 offline,Please check your internet Connection</h1>
 }

if(!allResturants) return null;


return allResturants?.length === 0 ? (
<Shimmer /> 
): (
      <>
     <div className="p-5 bg-gray-400 m-5" >
     <input className="focus:bg-red-200 p-2 m-2"
     type="text"
     placeholder="search"
     value={searchText}
     onChange={(e) => {
      setSearchText(e.target.value);
     }}
     />
     {/* <h1>{searchClicked}</h1> */}
     <button className="ml-20 px-10 rounded-full bg-orange-600 hover:bg-sky-100 ..."
     onClick={()=>{ 
      //  need to filter data 
     const data = filterData(allResturants,searchText);
    // update the restaurant detail
    setFilteredRestaurant(data);
     
    }}>
      Search</button>
     </div>

      <div className="flex flex-wrap bg-slate-200">
          {/* You have to write logic for No Restrunt fount here  */}
          {filteredRestaurants.map((restaurant) => {
              return (
                <Link
                to={"/restaurant/" + restaurant?.info?.id}
                    key={restaurant?.info?.id}
                    >
                    <RestaurantCard {...restaurant?.info} user = {user} />
                    </Link>
                    );
          })
          }
      
         
          

      </div></>
  )
}

export default Body;







