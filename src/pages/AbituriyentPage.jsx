import ReactMarkdown from "react-markdown";
import CustomNavbar from "../components/CustomNavbar";
import CustomFooter from "../components/CustomFooter";
import { Card, CardBody, Container } from "react-bootstrap";
import { Helmet } from "react-helmet";

export default function AbituriyentPage() {
  function isMobileDevice() {
    return window.innerWidth <= 768;
  }
  const markdownText = `
Növbəti tədris ilində 9, 10 və 11-ci siniflərdə təhsil alacaq şagirdlərin və onların valideynlərinin nəzərinə!

- DİM-in qəbul proqramı əsasında tədris sistemi
- Elektron lövhələrdə interaktiv dərs
- Peşəkar pedaqoji kollektiv
- Səhər və günorta növbələri
- Yeni qəbul qaydalarına uyğun aylıq sınaq imtahanları
    `;
  return (
    <>
      <Helmet>
        <title>Abituriyent</title>
        <meta name="description" content="kurs " />
        <meta name="robots" content="index, follow" />
        <meta charSet="UTF-8" />
      </Helmet>
      <CustomNavbar />
      <Container className="d-flex align-items-center justify-content-center flex-column">
        <h1 className="text-center m-4">Abituriyent</h1>
        <Card className={isMobileDevice() ? "w-100" : "w-75"}>
          <Card.Img variant="top" src="/images/abituriyent.jpeg" />
          <CardBody>
            <Card.Text>
              <ReactMarkdown>{markdownText}</ReactMarkdown>
            </Card.Text>
          </CardBody>
        </Card>
      </Container>

      <CustomFooter />
    </>
  );
}
