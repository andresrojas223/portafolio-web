import React from 'react';
import { LangProvider } from './components/context/langContext';
import { Home } from './components/home/Home';
export const Portafolio = () => {
  return <div>
      
  <LangProvider> 

   <Home/>

  </LangProvider>
  </div>;
};
