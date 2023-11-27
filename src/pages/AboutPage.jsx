import CustomNavbar from "../components/CustomNavbar";
import CustomFooter from "../components/CustomFooter";
import { Card, Container } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import { Helmet } from "react-helmet";

const markdownText = `

Hazırlıq Mərkəzinin məqsədi müxtəlif istiqamətlər üzrə hazırlıq keçmək istəyənlərə keyfiyyətli tədris vermək, onları düzgün istiqamətləndirməkdir!

- Abituriyent kursları (IX,X,XI sinif şagirdləri və məzunlar üçün) 
- Təkmilləşdirmə kursları (V,VI,VII,VIII sinif şagirdləri üçün) 
- Fənlər üzrə hazırlıq kursları (V, VI, VII, VIII sinif şagirdləri üçün) 
`;

export default function AboutPage() {
  function isMobileDevice() {
    return window.innerWidth <= 768;
  }

  return (
    <>
      <Helmet>
        <title>Haqqımızda</title>
        <meta name="description" content="kurs " />
        <meta name="robots" content="index, follow" />
        <meta charSet="UTF-8" />
      </Helmet>
      <CustomNavbar />
      <Container
        className="d-flex align-items-center justify-content-center flex-column
      "
      >
        <h2 className="m-4 text-center">Haqqımızda</h2>
        <Card className={isMobileDevice() ? "w-100" : "w-75"}>
          <Card.Img variant="top" src="imageAbout.jpg" />
          <Card.Body>
            <Card.Text>
              <ReactMarkdown>{markdownText}</ReactMarkdown>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
      <CustomFooter />
    </>
  );
}
