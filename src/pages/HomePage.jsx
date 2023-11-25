import CustomCardSlider from "../components/CustomCardSlider";
import CustomCarousel from "../components/CustomCarousel";
import CustomFooter from "../components/CustomFooter";
import CustomNavbar from "../components/CustomNavbar";
import { FloatingWhatsApp } from "react-floating-whatsapp";

export default function HomePage() {
  return (
    <>
      <CustomNavbar />
      <CustomCarousel />
      <CustomCardSlider />
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
