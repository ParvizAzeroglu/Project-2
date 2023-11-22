import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./CustomCardSlider.module.css";
import { Button, Card } from "react-bootstrap";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 800 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 800, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function CustomCardSlider(props) {
  return (
    <div className={styles.container}>
      <h1 style={{ padding: "30px 0px" }}>Lorem Ipsum</h1>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={6000}
      >
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
      </Carousel>
    </div>
  );
}

function CustomCard() {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <Card className="mx-auto" style={{ width: "18rem" }}>
        <Card.Img variant="top" src="https://placehold.co/600x400" />
        <Card.Body>
          <Card.Title>Lorem ipsum</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente,
            inventore.
          </Card.Text>
          <Button variant="primary">Lorem</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

// function CustomCard() {
//   return (
//     <div className={styles["profile-card"]}>
//       <div className="image">
//         <img
//           src="https://placehold.co/150x150"
//           alt=""
//           className="profile-img"
//         />
//       </div>

//       <div className={styles["text-data"]}>
//         <span className={styles["name"]}>CodingLab</span>
//         <span className={styles["job"]}>Youtuber & Blogger</span>
//       </div>

//       <div className="media-buttons">
//         <a href="#" style={{ backgroundColor: "#4267b2" }} className="link">
//           <i className="bx bxl-facebook"></i>
//         </a>
//         <a href="#" style={{ backgroundColor: "#1da1f2" }} className="link">
//           <i className="bx bxl-twitter"></i>
//         </a>
//         <a href="#" style={{ backgroundColor: "#d62976" }} className="link">
//           <i className="bx bxl-instagram"></i>
//         </a>
//         <a href="#" style={{ backgroundColor: "#ff0000" }} className="link">
//           <i className="bx bxl-youtube"></i>
//         </a>
//       </div>

//       <div className="buttons">
//         <button className="button">Subscribe</button>
//         <button className="button">Message</button>
//       </div>

//       <div className="analytics">
//         <div className="data">
//           <i className="bx bx-heart"></i>
//           <span className="number">60k</span>
//         </div>
//         <div className="data">
//           <i className="bx bx-message-square"></i>
//           <span className="number">20k</span>
//         </div>
//         <div className="data">
//           <i className="bx bx-share"></i>
//           <span className="number">12k</span>
//         </div>
//       </div>
//     </div>
//   );
// }
