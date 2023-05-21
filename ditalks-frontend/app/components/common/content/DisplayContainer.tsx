'use client'

import React from 'react';

interface DisplayContainerProps {
  children: React.ReactNode;
}

const DisplayContainer: React.FC<DisplayContainerProps> = ({ children }) => {
  return (
    <div className="flex gap-6">
      {children}
    </div>
  );
}

export default DisplayContainer;