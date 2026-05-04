import React from 'react';
import Topbar from '../components/topbar';
import Banner from '../components/banner';
import Panel from '../components/panel';
import Base from '../components/base';

function Products(): JSX.Element {
  return (
    <div>
      <Topbar />
      <Banner
        title="Productos"
        description="Descubre nuestros productos diseñados para ayudarte a alcanzar tus objetivos."
      />
      <main className="wrap">
        <section className="panel-grid">
          <Panel
            title="Limpiador Ecológico"
            description="Hecho con ingredientes naturales, nuestro limpiador ecológico es seguro para tu hogar y el medio ambiente."
          />
        </section>
      </main>
      <Base />
    </div>
  );
}

export default Products;