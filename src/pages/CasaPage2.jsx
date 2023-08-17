import React from 'react'
import { Reservar } from '../components/Reservar'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { casaTintaRoja2 } from "../helpers/lugaresInfo";


export const CasaPage2 = () => {
  return (
    <>
      <Header key={ casaTintaRoja2 } {...casaTintaRoja2}/>
      <Reservar/>
      <Footer />
      {/* <ElementoPrueba key={ departamento } {...departamento} /> */}
    </>
  )
}
