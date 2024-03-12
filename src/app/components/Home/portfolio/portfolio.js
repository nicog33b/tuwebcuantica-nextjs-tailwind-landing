import React, { useState } from "react";
import PortfolioCard from './cardPortfolio';
import SectionTitle from "../sectionTitle";

const Portfolio = () => {
  const [showCard, setShowCard] = useState("all");

  return (
    <>
      <section id='galeria' className="pt-12 pb-2 lg:pt-[100px] lg:pb-[40px]"> {/* Reduced bottom padding */}
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              {/* SECTION TITLE */}
              <SectionTitle
                textColorClass="text-gray-800"
                titulo="Creamos sitios web profesionales, personalizados y optimizados para convertir visitantes en clientes."
              />
            </div>
          </div>

          {/* Portfolio Cards */}
          <div className="flex flex-wrap -mx-4">
            {/* Display all cards unconditionally */}
            <PortfolioCard
              ImageHref="/portfolio/solesdesign6.png"
              title="Solesdesign - Prendas únicas."
              button="Ir"
              buttonHref="#"
            />
            <PortfolioCard
              ImageHref="/portfolio/inmobiliaria3.png"
              title="Inmobiliaria"
              button="Web inmobiliaria"
              buttonHref="#"
            />
            <PortfolioCard
              ImageHref="/portfolio/controlstock2.png"
              title="Districam Bebidas Stock "
              button="Más información"
              buttonHref="#"
            />
          </div>

          {/* Call to Action Button */}
          <div className="text-center mt-10">  {/* Added margin-top for spacing */}
            <a
              href="#"
              className="inline-block bg-[#040d3e] text-[#ffeb3b] hover:text-[#faf8c8] font-semibold py-3 px-6 rounded-md transition-all"
            >
              ¡Comienza tu proyecto hoy!
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

// Removed PortfolioCard component as it's unchanged

export default Portfolio;
