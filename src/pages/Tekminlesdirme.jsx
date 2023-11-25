import ReactMarkdown from "react-markdown";
import CustomNavbar from "../components/CustomNavbar";
import CustomFooter from "../components/CustomFooter";
import { Card, CardBody, Container } from "react-bootstrap";

export default function Tekminlesdirme() {
  function isMobileDevice() {
    return window.innerWidth <= 768;
  }
  const markdownText = `
Növbəti tədris ilində 5, 6, 7 və 8-ci siniflərdə təhsil alacaq şagirdlərin və onların valideynlərinin nəzərinə!
  
- 5, 6 və 7-ci siniflərdə Azərbaycan dili, İngilis dili, Riyaziyyat və Məntiq fənləri üzrə həftə ərzində 6 saat dərs
- 8-ci siniflərdə seçdiyiniz hazırlıq istiqaməti (Humanitar və ya Texniki) üzrə 6 fəndən həftədə 8 saat dərs

**Humanitar istiqamət** (Azərbaycan dili, Riyaziyyat, İngilis dili, Tarix, Coğrafiya, Ədəbiyyat)

**Texniki istiqamət**  (Azərbaycan dili, Riyaziyyat, İngilis dili, Kimya, Fizika, Biologiya)

8 ve 9-cu siniflər üçün Buraxılış fənlərindən
- (Ana dili, Riyaziyyat, İngilis dili) hazırlaşmaq imkanı
- İngilis dilində ünsiyyətin inkişafı
- Həftəlik qiymətləndirmə testləri
- Aylıq sınaq imtahanları
      `;
  return (
    <>
      <CustomNavbar />
      <Container className="d-flex align-items-center justify-content-center flex-column">
        <h1 className="text-center m-4">Təkmilləşdirmə</h1>
        <Card className={isMobileDevice() ? "w-100" : "w-75"}>
          <Card.Img variant="top" src="/images/tekminlesdirme.jpg" />
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
