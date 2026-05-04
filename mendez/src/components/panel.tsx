import React from 'react';

interface PanelProps {
  title: string;
  description: string;
}

const Panel: React.FC<PanelProps> = ({ title, description }) => {
  return (
    <article className="panel">
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
};

export default Panel;