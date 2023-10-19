import { restrautList } from "../config";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
    return (
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
           
            

        </div>
    )
}

export default Body;
