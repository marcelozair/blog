'use client'

import React from 'react';
import { Lora } from 'next/font/google'

interface ModalTitleProps {
  children: React.ReactNode;
}

const font = Lora({ subsets: ['latin'] })

const ModalTitle: React.FC<ModalTitleProps> = ({ children }) => {
  return (
    <div className="mb-8">
      <h3 className={"text-xl font-bold text-black text-center " + font.className}>{children}</h3>
    </div>
  );
}

export default ModalTitle;