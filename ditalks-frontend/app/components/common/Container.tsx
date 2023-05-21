'use client'

import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="xl:w-container-max lg:w-[90%] w-[95%] mx-auto">
      {children}
    </div>
  );
}

export default Container;