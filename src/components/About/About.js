import React from 'react';
import { FaChevronUp } from "react-icons/fa";


export const About = () => {
  return <div  id='acerca' className='about_content' >

   <div className="about_content_child">

    <div className="about_tittle">

     <h2>ABOUT ME</h2>

    </div>

     <div className="about_text_content">

       <div className="about_text">

        <p className='about_text_p'>¡Hola!, soy Andres Rojas, un Front-End Web Developer ubicado en Bogotá, Colombia. <br />
         <br /> Me gusta llevar mi creatividad a las líneas de código, me apasiona combinar los mundos de la programación con el arte digital. <br />
         <br /> Además de programar, aficionado de todo lo relacionado con la tecnología, música y de los deportes.<br />
         <br /> Actualmente estudiando desarrollo de backend.  
        </p>

       </div>
      

     </div>

   </div>

   <FaChevronUp className='swipe_up' />
  </div>;

};

