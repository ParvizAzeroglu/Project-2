import { Button, Card, ListGroup } from "react-bootstrap";

export default function CustomFooter() {
  return (
    <Card style={{ width: "100vw", marginTop: "50px" }}>
      <ListGroup variant="flush">
        <ListGroup.Item style={{ textAlign: "center" }}>
          Location: Binəqədi r, 6-cı mkr, İ.Həşimov küç, ev 1A
        </ListGroup.Item>

        <ListGroup.Item style={{ textAlign: "center" }}>
          <Instagram />
          <Whatsapp />
          <Facebook />
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

function Instagram() {
  return (
    <Button
      style={{
        background:
          "linear-gradient(45deg, hsl(37, 97%, 70%), hsl(329, 70%, 58%))",
        border: "none",
        margin: "0px 10px",
      }}
    >
      <a href="#" style={{ color: "white" }}>
        <i className="fa-brands fa-instagram"></i>
      </a>
    </Button>
  );
}

function Whatsapp() {
  return (
    <Button
      style={{
        backgroundColor: "#25D366",
        border: "none",
        margin: "0px 10px",
      }}
    >
      <a href="#" style={{ color: "white" }}>
        <i className="fa-brands fa-whatsapp"></i>
      </a>
    </Button>
  );
}

function Facebook() {
  return (
    <Button
      style={{
        backgroundColor: "#4267B2",
        border: "none",
        margin: "0px 10px",
      }}
    >
      <a href="#" style={{ color: "white" }}>
        <i className="fa-brands fa-facebook"></i>
      </a>
    </Button>
  );
}

// --instagram-1: hsl(37, 97%, 70%);
// --instagram-2: hsl(329, 70%, 58%);
