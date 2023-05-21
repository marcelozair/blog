'use client'

import Image from 'next/image';
import React from 'react';

const Logo = () => {
  return (
    <a href="/" className="cursor-pointer">
      <img
        className="w-32"
        alt="DiTalks"
        src="/images/logo.svg"    
      />
    </a>
  );
}

export default Logo;