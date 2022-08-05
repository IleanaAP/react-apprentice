import "./App.css";
import "./Components/Base/AppBar/AppBar";
import AppBar from "./Components/Base/AppBar/AppBar";
//import TimeBar from "./Components/Base/AppBar/TimeBar";

import { BrowserRouter as Router, Switch, Route, Link, NavLink, Redirect } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        {/* routes go here, as children */}
        <Route exact path="/" render={() => <Home />} /> {/* propiedad exact se asegura de que el enrutado coincida exactamente con la ruta '/' */}
        <Route path="/about" component={About} />
        <Route path="/know"> <Know /> </Route> {/* you can use them without render o component */}
        <Route path="*" component={NotFound} /> {/* el asterisco marca una ruta 404, no existente */}

        <PrivateRoute path="/hidden" component={Hidden} /> {/* aqui tenemos un componente de ruta privada */}
      </Switch>
    </Router>
  );
}

function PrivateRoute({ component: Component, ...rest}) {
  //useAuth es un hook personalizado para obtener el estado de autenticación del usuario actual
  const isAuth = useAuth();

  return (
    <Route 
      {...rest}
      render={(props) =>
        isAuth ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
}

function Hidden() {
  return <>hidden</>;
}

function NotFound() {
  return <>Ha llegado a una página que no existe</>
}

function Navbar() {
  //visible on every page
  return (
    <nav>
      {/* ejemplo de NavLink component */}
      <NavLink activeStyle={{fontWeight: "bold", color: "red"}} to="/">
        Home
      </NavLink>
      <NavLink activeClassName="active" to="/about">
        About
      </NavLink>

      {/* ejemplo de Link component */}
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
  )
}

function Know() {
  return <>Know</>;
}

function Home() {
  return <>Home</>;
}

function About() {
  return <>about</>;
}

/*
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

export default App;*/