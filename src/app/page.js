'use client'

import React from "react";
import ServiciosHome from "./components/Home/servicios/servicios";
import Working from "./components/Home/working/working";
import Jobs from "./components/Home/jobs/jobs";
import ContactForm from "./components/Home/contact/contact";
import SubscribeSection from "./components/Home/suscribe/suscribe";
import Portfolio from "./components/Home/portfolio/portfolio";


const Home = () => {
  return (
   <section id='home' className='relative bg-white'>
   
   <ServiciosHome></ServiciosHome>
   <Working></Working>
   <Portfolio/>
   <ContactForm></ContactForm>
   <SubscribeSection></SubscribeSection>

   </section>
  );
}

export default Home;
