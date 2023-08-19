import React from 'react'
import { MainHead } from '../components/MainHead'
import { Footer } from '../components/Footer'
import '../styles/components/HomePage.css'
import "../styles/components/mainHead.css";
import { useParams } from 'react-router-dom';


export const HomePage = () => {

  return (
    <>
      <MainHead />
      <Footer />
    </>
  )
}
