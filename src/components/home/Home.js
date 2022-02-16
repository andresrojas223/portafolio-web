import React from 'react';
import { About } from '../About/About';
import { Contac } from '../Contac/Contac';
import Projects from '../projects/Projects';
import { SideBar } from '../sidebar/SideBar';
import { Skills } from '../Skills/Skills';
import { Banner } from './Banner/Banner';


export const Home = () => {
  return <div>

   <SideBar/>
    <Banner/>
    <About/>
    <Skills/>
    <Projects/>
    <Contac/>




  </div>;
};
