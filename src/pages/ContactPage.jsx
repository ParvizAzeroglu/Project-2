import { Card, Container } from "react-bootstrap";
import CustomNavbar from "../components/CustomNavbar";
import CustomFooter from "../components/CustomFooter";

export default function ContactPage() {
  return (
    <>
      <CustomNavbar />
      <Container>
        <h2 className="m-4 text-center">Elaqe</h2>

        <Card className="p-4 mt-3">
          <Card.Title>Ünvan</Card.Title>
          <Card.Text>
            Binəqədi r, 6-cı mkr, İsrafil Həşimov küç, ev 1A (Nəsimi metrosunun
            çıxışı. 246 nömrəli məktəbin qarşısı) Nəsimi metrosunun çıxışı
          </Card.Text>
        </Card>

        <Card className="p-4 mt-3">
          <Card.Title>E-mail</Card.Title>
          <Card.Text>
            info@ulduz.edu.az <br /> ulduzkurslari@gmail.com
          </Card.Text>
        </Card>

        <Card className="p-4 mt-3">
          <Card.Title>Telefon</Card.Title>
          <Card.Text>
            +99412 431 10 30 <br /> Whatsapp 0507362188
          </Card.Text>
        </Card>
      </Container>
      <Container>Google Maps API</Container>
      <CustomFooter />
    </>
  );
}
