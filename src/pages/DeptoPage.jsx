import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { departamento } from "../helpers/lugaresInfo";
import '../styles/components/CasaPage.css'

export const DeptoPage = () => {
  return (
    <>
      <Header key={ departamento } { ...departamento } />
      <Footer />
    </>
  );
};
