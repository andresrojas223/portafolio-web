import React from 'react'
import { FaLinkedinIn, FaGithub,FaEnvelope } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className='footer_content' >
    
    <hr />
    
    <div className="footer_icons">


              <a href="https://www.linkedin.com/in/andres-fernando-rojas-gonzalez-22ab76215/"  aria-label='Link de linkedin' rel="noopener noreferrer" target='_blank' ><FaLinkedinIn/></a>
              <a href="https://github.com/andresrojas223" target='_blank' aria-label='Link de GitHub' rel="noopener noreferrer" ><FaGithub/></a>
              <a href="mailto:andres.business@outlook.es" rel='andres.business@outlook.es' aria-label='Correo electronico'  ><FaEnvelope/></a>      
       
    </div>
    
    
    <div className="footer_text">

       <p>Developed and designed by Andres Rojas</p>
                 
       
    </div>
    
    

    
    
    </footer>
  )
}
