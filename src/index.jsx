require("file-loader?name=[name].[ext]!html-minify-loader!./index.html");

const React = require("react");
React.__spread = Object.assign;

const ReactDOM = require("react-dom");
const App = require("./components/app.jsx");

ReactDOM.render(<App />, document.getElementById("app"));