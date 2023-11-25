import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import AbituriyentPage from "./pages/AbituriyentPage";
import Tekminlesdirme from "./pages/Tekminlesdirme";
import Ibtidaisinif from "./pages/Ibtidaisinif";
import Mektebeqeder from "./pages/Mektebeqeder";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/course">
          <Route path="abituriyent" element={<AbituriyentPage />} />
          <Route path="tekmillesdirme" element={<Tekminlesdirme />} />
          <Route path="ibtidai-sinif" element={<Ibtidaisinif />} />
          <Route path="mektebeqeder" element={<Mektebeqeder />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// <HomePage />
