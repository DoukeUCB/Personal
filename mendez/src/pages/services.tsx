import React from 'react';
import Topbar from '../components/topbar';
import Banner from '../components/banner';
import Panel from '../components/panel';
import Base from '../components/base';

function Services(): JSX.Element {
  return (
    <div>
      <Topbar />
      <Banner
        title="Servicios"
        description="Descubre los servicios que ofrecemos para ayudarte a alcanzar tus objetivos digitales."
      />
      <main className="wrap">
        <section className="panel-grid">
          <Panel
            title="Consultoría Digital"
            description="Asesoramiento especializado para impulsar tu presencia en el mundo digital."
          />
          <Panel
            title="Desarrollo de Software"
            description="Creación de soluciones tecnológicas personalizadas para tu negocio."
          />
          <Panel
            title="Marketing en Línea"
            description="Estrategias efectivas para aumentar tu visibilidad y atraer clientes en internet."
          />
        </section>
      </main>
      <Base />
    </div>
  );
}

export default Services;