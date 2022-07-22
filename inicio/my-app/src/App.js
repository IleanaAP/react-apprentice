import "./App.css";
import "./Components/Base/AppBar/AppBar";
import AppBar from "./Components/Base/AppBar/AppBar";
//import TimeBar from "./Components/Base/AppBar/TimeBar";

function App() {

  const alerta = () => {
    alert("Esta es una alerta");
  }
  return (
    <div className="App">
      <AppBar
      title="MI PRIMER APP"
      subtitle="Si funciona!"
      myAlert={alerta}
      />
    </div>
  );
}

export default App;