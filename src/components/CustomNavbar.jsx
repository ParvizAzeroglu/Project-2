import {
  Container,
  Nav,
  NavDropdown,
  Navbar,
  Offcanvas,
} from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const expand = "sm";

export default function CustomNavbar() {
  return (
    <Navbar
      key={expand}
      expand={expand}
      className="bg-body-tertiary mb-3 shadow-sm"
    >
      <Container fluid style={{ padding: "0rem 2rem" }}>
        <Navbar.Brand href="/">
          <img src="/images/logo.png" alt="" width="40px" />
        </Navbar.Brand>
        {/* <img src="/images/logo.png" alt="" width="40px" loading="lazy" /> */}
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
              <img src="logo.png" alt="" width="50px" />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link>
                <NavLink to="/">Homepage</NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to="/contact">contact</NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to="/about">about</NavLink>
              </Nav.Link>
              <NavDropdown title="Kurslar" id="nav-dropdown">
                <NavDropdown.Item>
                  <NavLink to="/course/abituriyent">Abituriyent</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink to="/course/tekmillesdirme">Təkmilləşdirmə</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item disabled>
                  <NavLink to="/course/ibtidai-sinif">İbtidai sinif</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item disabled>
                  <NavLink to="/course/mektebeqeder">Məktəbəqədər</NavLink>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
