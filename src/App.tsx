import Alerts from "./components/Alerts";
import ListGroup from "./components/ListGroup";
import Button from "./components/button";

function App() {
  const item = ["Tokyo", "Beijing", "New York", "Washington", "San Francisco"];
  return (
    <div>
      <Alerts>
        Hello <span>World!</span>
      </Alerts>
      <Button onClick={() => console.log("Clicked")}></Button>
    </div>
  );
}

export default App;
