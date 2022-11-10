import React from "react";
import "./App.css";
import {
  Nav,
  Button,
  Form,
  NavDropdown,
  Navbar,
  Container,
} from "react-bootstrap";
import { Carousel } from "react-bootstrap";
function App() {
  return (
    <div className="App">
      {/* navbar  */}
      <div>
        <Navbar bg="light" expand="lg">
          <Container fluid>
            <Navbar.Brand href="#">Carthage Guide</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">About us</Nav.Link>
                <NavDropdown title="Activities" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Mountain</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Sahara</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">Beach</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      {/* Welcome  */}
      <div>
        <h1 id="welcome">Welcome in Tunsisa paradise </h1>
      </div>
      {/* courselle */}
      <div className="photos">
        <Carousel>
          <Carousel.Item>
            <img
              style={{ width: "20px", height: "400px" }}
              className="d-block w-100 phot1"
              src="https://images.unsplash.com/photo-1568387380357-ba90334a6541?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Sahara Tozeur</h3>
              <p>Visit Touzeur and discover it's beautiful Sahara.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ width: "20px", height: "400px" }}
              className="d-block w-100 phot1"
              src="https://images.unsplash.com/photo-1653173449794-09b4ec96a17f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Beach Hammamet</h3>
              <p>Visit Hammamet and discover it's beautiful Beach..</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ width: "20px", height: "400px" }}
              className="d-block w-100 phot1"
              src="https://images.unsplash.com/photo-1634487227007-762b517f4518?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Ain-Drahem Mountain</h3>
              <p>Visit Ain-Drahem and discover it's beautiful Mountain.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      {/* Who is Tunisia  */}
      <div className="Tunisia ">
        <h1 id="welcome">Who is Tunisia </h1>
        <p className="Description">
          Tunisia is a North African country which belongs to the Maghreb. It is
          bordered on the North and the East by the Mediterranean. Its western
          border opens on Algeria (965 km) and its South-eastern border on Libya
          (459 km). Its name is derived from that of its capital, Tunis, located
          in the north of the country.
        </p>
        <div className="Galerie">
          <img
            className="tof"
            style={{ width: "500px", height: "500px" }}
            src="https://images.unsplash.com/photo-1593777002842-9313f0601263?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="tof"
          />
          <img
            className="tof"
            style={{ width: "500px", height: "500px" }}
            src="https://images.unsplash.com/photo-1556901600-3e1be0aa443e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1052&q=80"
            alt="tof"
          />
          <img
            className="tof"
            style={{ width: "500px", height: "500px" }}
            src="https://images.unsplash.com/photo-1607869861980-da5f9b8b4969?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="tof"
          />
          <img
            className="tof"
            style={{ width: "500px", height: "500px" }}
            src="https://images.unsplash.com/photo-1556901599-6cd86f3da8b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1199&q=80"
            alt="tof"
          />
        </div>
      </div>
      {/* How to contact us  */}
      <div className="contact">
        <h1 id="welcome">How to contact us </h1>
        <form>
          <label>Name</label>
          <input type="text" placeholder="enter your name" />
          <br />
          <label>Email</label>
          <input type="email" placeholder="enter your email" />
          <br />
          <label>Birth Date</label>
          <input type="date" placeholder="enter your date" />
          <br />
          <select>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <br />
          <textarea name="message" cols="30" rows="5">
            put here your message
          </textarea>
          <br />
          <button>Submit</button>
        </form>
      </div>

      <div className="footer">
        <p>Copyright @ 2022</p>
      </div>
    </div>
  );
}

export default App;
