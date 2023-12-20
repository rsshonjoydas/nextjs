import React from 'react';

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

const ProductIdLayout = ({ children }: { children: React.ReactNode }) => {
  const random = getRandomInt(2);

  if (random === 1) {
    throw new Error('Error loading review');
  }

  return (
    <div>
      {children}
      <h2>Features products</h2>
    </div>
  );
};

export default ProductIdLayout;
