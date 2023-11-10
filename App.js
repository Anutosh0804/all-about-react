import React from "react";
import ReactDOM from "react-dom/client";

//JSX =>Babel transpiles it to React.creatElement => React.creatElement (JS Obj) => HTML Element(Render)

//React Element
//const heading = <h1>Hello from JSX</h1>;

//React Component
const TitleComponent = () => {
    return <h1>React Component</h1>
}

const DescriptionComponent = () =>{
    return (
        //Composite Component
        <div>
            <TitleComponent />
            <p>This is React Component.</p>
        </div>
    )
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<DescriptionComponent />);