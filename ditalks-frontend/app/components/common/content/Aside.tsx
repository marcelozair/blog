'use client'

import React from 'react';

interface AsideProps {
  children: React.ReactNode;
}

const Aside: React.FC<AsideProps> = ({ children }) => {
  return (
    <aside className="w-[400px]">
      {children}
    </aside>
  );
}

export default Aside;