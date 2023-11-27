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
              <img src="/images/logo.png" alt="" width="50px" />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link>
                <NavLink className="nav-link" to="/">
                  Ana Səhifə
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink className="nav-link" to="/contact">
                  Əlaqə
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink className="nav-link" to="/about">
                  Haqqımızda
                </NavLink>
              </Nav.Link>
              <NavDropdown title="Kurslar" id="nav-dropdown" className="m-2">
                <NavDropdown.Item>
                  <NavLink className="nav-link" to="/course/abituriyent">
                    Abituriyent
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink className="nav-link" to="/course/tekmillesdirme">
                    Təkmilləşdirmə
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item disabled>
                  <NavLink className="nav-link" to="/course/ibtidai-sinif">
                    İbtidai sinif
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item disabled>
                  <NavLink className="nav-link" to="/course/mektebeqeder">
                    Məktəbəqədər
                  </NavLink>
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link disabled className="disabled">
                <NavLink className="nav-link disabled" to="/">
                  Digər Linklər
                </NavLink>
              </Nav.Link>
              <Nav.Link disabled>
                <NavLink className="nav-link disabled" to="/">
                  Digər Linklər
                </NavLink>
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
