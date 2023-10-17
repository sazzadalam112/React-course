import React from "react";
import  ReactDOM  from "react-dom/client";

const Title = () => (
    <h1 id="title key=h2">
        Namaste Sazzad
    </h1>
);
const HeaderComponents = () => {
    return(
        <div>
           <Title/> 
           <h2>Namaste Sazzad</h2>
           <h2>How are you</h2>
        </div>
        
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponents />)