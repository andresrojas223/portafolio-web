import React, {useContext} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleDown, } from '@fortawesome/free-solid-svg-icons'
import TypeWriter from 'typewriter-effect'
import Link from 'react-scroll/modules/components/Link';
import { BackToTop } from '../../BackTopBottom/BackToTop';
import { FormattedMessage } from 'react-intl';

import pdf from '../../../Archivos/mi_cv.pdf'
import { LangContext } from '../../context/langContext';

export const Banner = () => {

  const idioma = useContext(LangContext);

  return <div id='/' className='banner_content_father'>

 
   

<div className="banner_content_child">

    <div className="banner_child_flex">


        <div className="banner_child_flex_tittle">
            
            <h1 className='banner_child_tittle' ><FormattedMessage  id='app.tittle' defaultMessage="HI, I'M ANDRES ROJAS," /> <br/> <br/> 
            
            <TypeWriter  onInit={(typewriter) =>   {
             typewriter.typeString("WEB DEVELOPER").pauseFor(2000).deleteAll().typeString("FRONT-END").start()

            }}   /> </h1>
        
        </div>  

        <div className="lenguaje_content">
        <select name="select">
        <option name='English' onClick={() =>  idioma.establecerLenguaje('en-US') } defaultValue='English'>English</option>
        <option value="Spanish" onClick={() =>  idioma.establecerLenguaje('es-ES') }  >Spanish</option>
        </select>
         
         

        </div>

        <div className="banner_child_flex_button">
                           
         <a href={pdf} target='_blank'  rel="noopener noreferrer"><FormattedMessage  id='app.Curriculum' defaultMessage="view Resume" /></a>
         
         <a target='_blank'  href="https://github.com/andresrojas223"  rel="noopener noreferrer">GitHub</a>

        </div>  

        

    </div>        

</div>



<div className="icon_down">

<Link to='acerca'  activeClass="active"  spy={true} smooth={true} offset={50} duration={1200} ><FontAwesomeIcon className='icon_down_font'
  

 icon={faArrowCircleDown}
  

/>

</Link>

</div>


<BackToTop/>

  </div>;


};
