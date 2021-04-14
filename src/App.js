import "./styles.css";

let curDate = new Date();
curDate = curDate.getHours();
let greeting = "";
const cssStyle = {};

if (curDate >= 1 && curDate < 12) {
  greeting = "Good Morning";
  cssStyle.color = "green";
} else if (curDate >= 12 && curDate < 16) {
  greeting = "Good Afternoon";
  cssStyle.color = "orange";
} else {
  greeting = "Good Evening";
  cssStyle.color = "black";
}

export default function App() {
  return (
    <>
      <div id="heading">
        <h2>Simple Greeting Wishes</h2>
      </div>
      <div className="App">
        <h1>
          Hello Sir, <span style={cssStyle}> {greeting} </span>{" "}
        </h1>
      </div>
    </>
  );
}
