/**
 * 
 * ReactElement(Object) => HTML(Browser Understand)
 */

const heading = React.createElement(
    "div",
    {id: "parent", className: "parent"},
        [
            React.createElement("h1",{className: "test"},"Hello world from react!"),
            React.createElement("h1",{className: "test"},"Hello world from sibling!")
        ]
    );
    console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);