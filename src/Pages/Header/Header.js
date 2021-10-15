import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import useAuth from "../../Hooks/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand href="#home" className="text-uppercase">
          Car repaire
        </Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav.Link as={HashLink} to="/home#home">
            Home
          </Nav.Link>
          <Nav.Link as={HashLink} to="/home#services">
            Services
          </Nav.Link>
          <Nav.Link as={HashLink} to="/home#experts">
            Experts
          </Nav.Link>
          <Nav.Link as={Link} to="/login">
            Login
          </Nav.Link>
          {user.email && (
            <div>
              <Navbar.Text className="mx-2">
                Signed in as: <a href="#login">{user.displayName}</a>
              </Navbar.Text>
              <button onClick={logOut} className="btn btn-warning mx-2">
                Logout
              </button>
            </div>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
