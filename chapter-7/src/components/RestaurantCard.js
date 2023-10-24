import { IMG_CDN_URL } from "../config";
const RestaurantCard = ({
    name,
    cuisines, 
    cloudinaryImageId,
    avgRating,
    costForTwo,
}) => {
  
  return (
    <div className="card">
    <img src={ IMG_CDN_URL + cloudinaryImageId} />
    <h2>{name}</h2>
    <h2>AvgRating :{avgRating}</h2>
    <h3>CostForTwo: {costForTwo}</h3>
    <h3>{cuisines.join(", ")}</h3>
    </div>
  )
}
export default RestaurantCard;