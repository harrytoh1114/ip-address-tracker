import { useSelector } from "react-redux";
import "./App.scss";
import Location from "./components/Location/Location";
import Search from "./components/Search/Search";

function App() {
  const result = useSelector((state) => state.result.r);
  return (
    <div className="App">
      <header className="header">
        <Search />
      </header>
      {result.coor ? <Location /> : ""}
    </div>
  );
}

export default App;
