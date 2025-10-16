/**
 * 
 * 
 * <div id="parent">
 *         <div id="child">
 *              <h1>I'm h1 tag</h1>
 *              <h2>I'm h1 tag</h2>
 *          </div>
 * <div id="child2">
 *              <h1>I'm h1 tag</h1>
 *              <h2>I'm h1 tag</h2>
 *          </div>
 * </div>
 * 
 * 
 * 
 * 
 * 
 * 
 */

const parent = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child" }, [
        React.createElement("h1", { id: "heading" }, "I'm h1 tag!!"),
        React.createElement("h2", { id: "heading" }, "I'm an h2 tag!!")
    ]),
    React.createElement("div", { id: "child2" }, [
        React.createElement("h1", { id: "heading" }, "I'm h1 tag!!"),
        React.createElement("h2", { id: "heading" }, "I'm an h2 tag!!")
    ])
]);

const header = React.createElement("h1", { id: "heading" }, "Welcome to React!!");

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(parent);

root.render(parent);