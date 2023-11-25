import { FloatingWhatsApp } from "react-floating-whatsapp";

export default function TestPage() {
  return (
    <div>
      <FloatingWhatsApp
        phoneNumber="+994507362188"
        accountName="Adınız"
        avatar="/images/avatar.jpg"
        statusMessage=""
        chatMessage="Komentiniz"
        allowEsc={true}
      />
    </div>
  );
}
