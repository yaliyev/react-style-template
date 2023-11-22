import React from 'react'
import { useState } from 'react'
import Hero from './components/Hero'
import "../src/styles/reset.css"
import '../src/styles/buttons.css'
import SubHero from './components/SubHero'
import BlueLayout from './components/BlueLayout'
import ProjectCard from './components/ProjectCard'
import OfferButtonBox from './components/OfferButtonBox'
import Service from './components/Service'
import LocationMap from './components/LocationMap'
function App() {


  return (
    <>
      <Hero heroTitle={"Stylish Portfolio"} heroText={"A Free Bootstrap Theme by Start Bootstrap"} heroButtonText={"Find out more"} />
      <SubHero subHeroTitle={"Stylish Portfolio is the perfect theme for your next project!"} subHeroText={"This theme features a flexible, UX friendly sidebar menu and stock photos from our friends at Unsplash !"} >
        <OfferButtonBox subHeroButtonText="What we offer" />
      </SubHero>
      <BlueLayout blueLayoutSubtitle={"What we offer"}>
        <Service />
        <Service />
        <Service />
        <Service />
      </BlueLayout>
      <Hero heroMediumTitle={"Welcome to your next web site"} heroButtonText={"Download now"} />
      <SubHero subHeroMiniTitle={"PORTFOLIO"} subHeroTitle={"Recent Projects"}>
        <ProjectCard cardImage={"https://i.ibb.co/BzH2MN0/projectcard1.jpg"} cardName={"Stationary"} cardText={"A yellow pencil with envelopes on a clean,blue backdrop!"} />
        <ProjectCard cardImage={"https://i.ibb.co/52q65Y9/projectcard2.jpg"} cardName={"Stationary"} cardText={"A yellow pencil with envelopes on a clean,blue backdrop!"} />
        <ProjectCard cardImage={"https://i.ibb.co/N15wdSy/projectcard3.jpg"} cardName={"Stationary"} cardText={"A yellow pencil with envelopes on a clean,blue backdrop!"} />
        <ProjectCard cardImage={"https://i.ibb.co/BzH2MN0/projectcard1.jpg"} cardName={"Stationary"} cardText={"A yellow pencil with envelopes on a clean,blue backdrop!"} />
      </SubHero>
      <BlueLayout blueLayoutSubtitle={"Impossible to resist..."}>
         <button className='click-me-button'>Click me!</button>
         <button className='look-me-button'>Look at me!</button>
      </BlueLayout>
      <LocationMap/>
    </>
  )
}

export default App
