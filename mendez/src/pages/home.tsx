import React from 'react';
import Topbar from '../components/topbar';
import Banner from '../components/banner';
import Wrap from '../components/wrap';
import Base from '../components/base';

const Home = () => {
  return (
    <div>
      <Topbar />
      <Banner
        title="Crecemos contigo"
        description="Soluciones digitales con enfoque moderno, diseño elegante y presencia profesional para tu marca."
      />
      <Wrap />
      <Base />
    </div>
  );
};

export default Home;