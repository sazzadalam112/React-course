import React from "react";
import  ReactDOM  from "react-dom/client";

const Title = () => (
    <a href="/">
    <img
    className="logo" 
    alt="logo"
    src="https://1000logos.net/wp-content/uploads/2018/08/The-World%E2%80%99s-Top-20-Restaurant-Logos-768x432.jpg"
    />
    </a>
);

const Header = () => {
    return(
        <div className="header">
            <Title />
           <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
           </div>
        </div>
       
    )
};
BiryaniKing = {
    name: "Ram Babu Restaurant",
    image : "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/mq1vlwbzjanzdeukja3d",
    cusines : ["Chinese","North Indian Biryani"],
    address: "Kankarbagh",
    star: "4.5"
}
const RestaurantCard = () => {
    return(
        <div className="card"> 
            <h4>{BiryaniKing.name}</h4>
            <img src = {BiryaniKing.image}/>
            <h4>{BiryaniKing.cusines.join(",")}</h4>
            <h4>{BiryaniKing.address}</h4>
            <h4>{BiryaniKing.star}</h4>

        </div>
    )
}
const Body = () => {
    return (
        <div className="Restaurant-body">
       <RestaurantCard />
       <RestaurantCard />
       <RestaurantCard />
       <RestaurantCard />
       <RestaurantCard />
       <RestaurantCard />
       <RestaurantCard />
       <RestaurantCard />
       <RestaurantCard />
       <RestaurantCard />
       <RestaurantCard />
       <RestaurantCard />
       </div>
    )
}
const Footer = () => {
    return (
        <h4>Footer</h4>
    )
}
const AppLayout = () => {
    return(
        <>
        <Header />
        <Body />
        <Footer />
        </>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>)