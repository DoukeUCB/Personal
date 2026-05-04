import React from 'react';
import Panel from './panel';

const Wrap = () => {
  return (
    <main className="wrap">
      <section className="panel-grid">
        <Panel
          title="Desarrollo Web"
          description="Sitios rápidos, modernos y adaptables para empresas, profesionales y emprendimientos."
        />
        <Panel
          title="Automatización"
          description="Sistemas administrativos y herramientas digitales para mejorar procesos internos."
        />
        <Panel
          title="Asesoría Técnica"
          description="Soporte, mantenimiento y acompañamiento tecnológico para impulsar tu negocio."
        />
      </section>
    </main>
  );
};

export default Wrap;