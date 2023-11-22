import React from 'react'
import { useState } from 'react'
import Hero from './components/Hero'
import "../src/styles/reset.css"
import SubHero from './components/SubHero'
import BlueLayout from './components/BlueLayout'
import ProjectCard from './components/ProjectCard'

function App() {
  

  return (
    <>
      <Hero heroTitle={"Stylish Portfolio"} heroText={"A Free Bootstrap Theme by Start Bootstrap"} heroButtonText={"Find out more"} />
      <SubHero subHeroTitle={"Stylish Portfolio is the perfect theme for your next project!"} subHeroText={"This theme features a flexible, UX friendly sidebar menu and stock photos from our friends at Unsplash !"}  subHeroButtonText="What we offer" />
      <BlueLayout/>
      <Hero heroMediumTitle={"Welcome to your next web site"} heroButtonText={"Download now"}/>
      <SubHero subHeroMiniTitle={"PORTFOLIO"} subHeroTitle={"Recent Projects"}>
        <ProjectCard cardImage={"projectcard1.jpg"} cardName={"Stationary"}  cardText={"A yellow pencil with envelopes on a clean,blue backdrop!"}/>
        <ProjectCard cardImage={"projectcard2.jpg"} cardName={"Stationary"}  cardText={"A yellow pencil with envelopes on a clean,blue backdrop!"}/>
        <ProjectCard cardImage={"projectcard3.jpg"} cardName={"Stationary"}  cardText={"A yellow pencil with envelopes on a clean,blue backdrop!"}/>
        <ProjectCard cardImage={"projectcard1.jpg"} cardName={"Stationary"}  cardText={"A yellow pencil with envelopes on a clean,blue backdrop!"}/>
       </SubHero>  
    </>
  )
}

export default App
