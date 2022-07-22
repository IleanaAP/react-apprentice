import "./App.css";
import "./Components/Base/AppBar/AppBar";
import AppBar from "./Components/Base/AppBar/AppBar";
import TimeBar from "./Components/Base/AppBar/TimeBar";

function App() {
  return (
    <div className="App">
      <AppBar
        //aqui le pasamos los props
        title="MI PRIMERA APP"
        subtitle="Ya funciona!"
        time = {<TimeBar />}
      />
      <AppBar
        title="MI SEGUNDA APP"
        subtitle="Ya funciona tambien!"
      />
    </div>
  );
}

export default App;
