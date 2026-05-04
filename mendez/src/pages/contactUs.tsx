import React from 'react';
import Topbar from '../components/topbar';
import Banner from '../components/banner';
import Panel from '../components/panel';
import Base from '../components/base';

const ContactUs = () => {
  return (
    <div>
      <Topbar />
      <Banner
        title="Contáctanos"
        description="Estamos aquí para ayudarte. Ponte en contacto con nosotros para discutir tus proyectos y necesidades."
      />
      <main className="wrap">
        <section className="panel-grid">
          <Panel
            title="Email"
            description="contacto@ecosite.com"
          />
          <Panel
            title="Teléfono"
            description="+1 (555) 123-4567"
          />
          <Panel
            title="Dirección"
            description="Calle Verde 123, Ciudad Sostenible"
          />
        </section>
      </main>
      <Base />
    </div>
  );
};

export default ContactUs;