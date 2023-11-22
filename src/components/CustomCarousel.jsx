import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";

function CustomCarousel() {
  return (
    <Container>
      <Carousel data-bs-theme="dark" className="mx-auto mt-4">
        <Carousel.Item>
          <img
            className="d-block w-100 rounded-2"
            src="image2.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 rounded-2"
            src="image3.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 rounded-2"
            src="image2.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default CustomCarousel;
