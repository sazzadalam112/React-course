
const heading = React.createElement("h1",{},"Heading");
const heading1 = React.createElement("h1",{},"Heading1");
const Container = React.createElement("div",{id:"container"}, [heading,heading1])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(Container);