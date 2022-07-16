import "./App.css";
import "./Components/Base/AppBar/AppBar";
import AppBar from "./Components/Base/AppBar/AppBar";

function App() {
  return (
    <div className="App">
      <AppBar
        //aqui le pasamos los props
        title="MI PRIMERA APP"
        subtitle="Ya funciona!"
      />
      <AppBar
        title="MI SEGUNDA APP"
        subtitle="Ya funciona tambien!"
      />
    </div>
  );
}

export default App;
