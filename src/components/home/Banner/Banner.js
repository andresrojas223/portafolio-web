import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleDown, } from '@fortawesome/free-solid-svg-icons'
import TypeWriter from 'typewriter-effect'
import Link from 'react-scroll/modules/components/Link';

export const Banner = () => {
  return <div id='/' className='banner_content_father'>

<div className="banner_content_child">

    <div className="banner_child_flex">


        <div className="banner_child_flex_tittle">
            
            <h1 className='banner_child_tittle' >HI, I'M ANDRES ROJAS, <br/> <br/> 
            
            <TypeWriter  onInit={(typewriter) =>   {
             typewriter.typeString("WEB DEVELOPER").pauseFor(2000).deleteAll().typeString("FRONT-END").start()

            }}   /> </h1>
        
        </div>  
        <div className="banner_child_flex_button">
                           
         <a href="#">Download CV</a>
         
         <a target='_blank' href="https://github.com/andresrojas223">GitHub</a>

        </div>  

        

    </div>        

</div>



<div className="icon_down">

<Link to='acerca'  activeClass="active"  spy={true} smooth={true} offset={50} duration={500} ><FontAwesomeIcon className='icon_down_font'
  

 icon={faArrowCircleDown}
  

/>

</Link>

</div>




  </div>;


};
