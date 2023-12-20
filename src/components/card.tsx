import React from 'react';

export const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex justify-center items-center border shadow-md m-2 p-24'>
      {children}
    </div>
  );
};
