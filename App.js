/**
 * 
 * <div id="parent">
 *      <div id="childOne">
 *          <h1>Hello</h1>
 *          <p>This is inside child one.</p>
 *      </div>
 *      <div id="childTwo">
 *          <h1>Hello Again</h1>
 *          <p>This is inside child two.</p>
 *      </div>
 * </div>
 * 
 */

const parent = React.createElement("div", { id: "parent" },
    [
        React.createElement("div", { id: "childOne" },
            [
                React.createElement("h1", {}, "Hello"),
                React.createElement("p", {}, "This is inside child one.")
            ]),
        React.createElement("div", { id: "childTwo" },
            [
                React.createElement("h1", {}, "Hello Again"),
                React.createElement("p", {}, "This is inside child two.")
            ])
    ]
);

const heading = React.createElement("h1", { id: "heading" }, "Hello from ReactJS");
console.log(heading) //JS Object
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);