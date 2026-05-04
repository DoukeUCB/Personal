import React from 'react';
import Topbar from '../components/topbar';
import Banner from '../components/banner';
import Panel from '../components/panel';
import Base from '../components/base';

const AboutUs = () => {
  return (
    <div>
      <Topbar />
      <Banner
        title="Sobre Nosotros" 
        description="Conoce más sobre EcoSite, nuestra misión y visión en el mundo digital."
      />
      <main className="wrap">
        <section className="panel-grid">
          <Panel
            title="Nuestra Misión"
            description="Proporcionar soluciones digitales innovadoras que ayuden a nuestros clientes a crecer y prosperar en el mundo digital."
          />
          <Panel
            title="Nuestra Visión"
            description="Ser líderes en el desarrollo de tecnologías verdes y sostenibles para un futuro digital responsable."
          />
          <Panel
            title="Valores"
            description="Compromiso, innovación y sostenibilidad son los pilares que guían todas nuestras acciones y decisiones."
          />
        </section>
      </main>
      <Base />
    </div>
  );
};

export default AboutUs;