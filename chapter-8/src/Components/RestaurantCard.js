import { IMG_CDN_URL } from "../constants";

// Restaurant card component: Image, name, cuisine
const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  areaName,
  sla,
  costForTwo,
  avgRatingString,
  user
}) => {
  return (
    <div className = "w-60 m-5 p-2 shadow-lg bg-yellow-100 min-height: 100vh; ">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h3 className="font-bold text-xl">{name}</h3>
      <h5>{cuisines.join(", ")}</h5>
      <h5>{areaName}</h5>
      <h5>{costForTwo}</h5>
      <h5>Rating:-  {avgRatingString}</h5>
      <h4>{user.name}</h4>
      


      
      <span>
        {/* <h4
          style={
            avgRatingString < 4
              ? { backgroundColor: "var(--light-red)" }
              : avgRatingString === "--"
                ? { backgroundColor: "white", color: "black" }
                : { color: "white" }
          }
        >
          <i className="fa-solid fa-star"></i>
          {avgRatingString}
        </h4> */}
        {/* <h4>•</h4>
        <h4>{sla?.lastMileTravelString ?? '2.0 km'}</h4>
        <h4>•</h4>
        <h4>{costForTwo ?? '₹200 for two'}</h4> */}
      </span>
    </div>
  );
};

export default RestaurantCard;
