'use client';

import React from 'react';
import { useParams } from 'next/navigation';

// Show your profie
// get blogs you posted

const page = () => {
  const params = useParams();
  return <div>{params.user}</div>;
};

export default page;
