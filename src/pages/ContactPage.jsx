import { Card, Container } from "react-bootstrap";
import CustomNavbar from "../components/CustomNavbar";
import CustomFooter from "../components/CustomFooter";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import { Helmet } from "react-helmet";

export default function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Əlaqə</title>
        <meta name="description" content="kurs " />
        <meta name="robots" content="index, follow" />
        <meta charSet="UTF-8" />
      </Helmet>
      <CustomNavbar />
      <Container>
        <h2 className="m-4 text-center">Əlaqə</h2>

        <Card className="p-4 mt-3">
          <Card.Title>Ünvan</Card.Title>
          <Card.Text>
            Ünvan: Bakı, x-cı mkr, x küç, ev x (x metrosunun çıxışı. ) x
            metrosunun çıxışı
          </Card.Text>
        </Card>

        <Card className="p-4 mt-3">
          <Card.Title>E-mail</Card.Title>
          <Card.Text>
            Filankəs@gmail.com <br /> info@gmail.com
          </Card.Text>
        </Card>

        <Card className="p-4 mt-3">
          <Card.Title>Telefon</Card.Title>
          <Card.Text>
            +994 50 736 21 88 <br />{" "}
            <a
              href="https://wa.me/+994507362188"
              target="_blank"
              rel="noopener noreferrer"
              className="text-success"
            >
              Whatsapp
            </a>
          </Card.Text>
        </Card>
      </Container>

      <Container>Google Maps API</Container>
      <CustomFooter />
      <FloatingWhatsApp
        phoneNumber="+994507362188"
        accountName="Adınız"
        avatar="/images/avatar.jpg"
        statusMessage=""
        chatMessage="Komentiniz"
        allowEsc={true}
      />
    </>
  );
}
