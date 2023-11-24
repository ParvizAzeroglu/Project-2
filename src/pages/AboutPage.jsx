import CustomNavbar from "../components/CustomNavbar";
import CustomFooter from "../components/CustomFooter";
import { Card, Container } from "react-bootstrap";
import ReactMarkdown from "react-markdown";

const markdownText = `

Ulduz Hazırlıq Mərkəzi 2014-cü ildə Bakı şəhəri Nəsimi rayonunda fəaliyyətə başlamışdır.

Hazırlıq Mərkəzinin məqsədi müxtəlif istiqamətlər üzrə hazırlıq keçmək istəyənlərə keyfiyyətli tədris vermək, onları düzgün istiqamətləndirməkdir!

- Abituriyent kursları (IX,X,XI sinif şagirdləri və məzunlar üçün) 
- Təkmilləşdirmə kursları (V,VI,VII,VIII sinif şagirdləri üçün) 
- Fənlər üzrə hazırlıq kursları (V, VI, VII, VIII sinif şagirdləri üçün) 
`;

export default function AboutPage() {
  return (
    <>
      <CustomNavbar />
      <Container>
        <Card>
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
