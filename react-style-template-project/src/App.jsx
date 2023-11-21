import React from 'react'
import { useState } from 'react'
import Hero from './components/Hero'
import "../src/styles/reset.css"
import SubHero from './components/SubHero'

function App() {
  

  return (
    <>
      <Hero heroTitle={"Stylish Portfolio"} heroText={"A Free Bootstrap Theme by Start Bootstrap"} heroButtonText={"Find out more"} />
      <SubHero subHeroTitle={"Stylish Portfolio is the perfect theme for your next project!"} subHeroText={"This theme features a flexible, UX friendly sidebar menu and stock photos from our friends at Unsplash !"}  subHeroButtonText="What we offer" />
    </>
  )
}

export default App
