import { IMG_CGN_URL } from "../config";

const RestaurantCard = ({
    name,
    // cuisines,
    avgRating,
    cloudinaryImageId,
    costForTwo,
}) => {

    return (
        <div className="card">
            <img src={IMG_CGN_URL + cloudinaryImageId} />
            <h1>{name}</h1>
            {/* <h2>{cuisines.join(" , ")}</h2> */}
            <h2>AvgRating :{avgRating}</h2>
            <h2>CostForTwo: {costForTwo}</h2>
        </div>
    )
}
export default RestaurantCard;
