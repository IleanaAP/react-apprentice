import React from "react";
import PropTypes from "prop-types";
import Boton from "../Boton/Boton";

//import TimeBar from "./TimeBar";
//react imports
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
//local css imports
import "./AppBar.css";


AppBar.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  myAlert: PropTypes.func,
};

//props lista por default que tienen los componentes
//los tres puntos le dice que jale todos los props que tienen los componentes por default (los va a tener disponibles pero no guardados)
//con los {} se dice que se le pasa un objeto
function AppBar({
  title = "TITULO",
  subtitle = "Subtitulo",
  myAlert,
  ...props
}) {
  const miFuncionPropia = () => {
    console.log("Esto ejecutando mi funcion propia");
    myAlert();
  };

  return (
    <Navbar bg="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home" className="titulo-app-bar">
          {title}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link id="home" href="#home">
              Home
            </Nav.Link>
            <Nav.Link id="link" href="#" onClick={myAlert}>
              Link
            </Nav.Link>
            <Boton title="Mi Boton NIETO" action={miFuncionPropia} />

            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Dropdown Button
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppBar;
