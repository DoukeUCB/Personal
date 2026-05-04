import React from 'react';

interface BannerProps {
  title: string;
  description: string;
}

const Banner: React.FC<BannerProps> = ({ title, description }) => {
  return (
    <section className="banner">
      <h1>{title}</h1>
      <p>{description}</p>
    </section>
  );
};

export default Banner;