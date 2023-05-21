'use client'

import React from 'react';
import { Lora } from 'next/font/google'

interface SectionTitleProps {
  children: React.ReactNode;
}

const font = Lora({ subsets: ['latin'] })

const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => {
  return (
    <div className="mb-8">
      <h3 className={"text-2xl font-bold " + font.className}>{children}</h3>
    </div>
  );
}

export default SectionTitle;