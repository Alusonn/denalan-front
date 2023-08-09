import { FirstSection } from "../components/FirstSection";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import '../styles/components/CasaPage.css'

export const CasaPage = () => {
  return (
    <>
      <Header key={ 'departamento' }/>
      <FirstSection />
      <Footer />
    </>
  );
};
