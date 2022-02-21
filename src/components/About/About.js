import React from 'react';
import { FormattedMessage } from 'react-intl';
export const About = () => {
  return <div  id='acerca' className='about_content' >

   <div className="about_content_child">

    <div className="about_tittle">

     <h2><FormattedMessage  id='app.aboutme' defaultMessage="ABOUT ME" /></h2>

    </div>

     <div className="about_text_content">

       <div className="about_text">

        <p className='about_text_p'> <FormattedMessage  id='app.textAbout' defaultMessage="Hi!, I'm Andres Rojas, a Front-End Web Developer located in Bogotá, Colombia." /> <br />
         <br /><FormattedMessage  id='app.textAbout1' defaultMessage="I like to bring my creativity to the lines of code, I am passionate about combining the worlds of programming with digital art." /> <br />
         <br /><FormattedMessage  id='app.textAbout2' defaultMessage="In addition to programming, fond of everything related to technology, music and sports." /> <br />
         <br /><FormattedMessage  id='app.textAbout3' defaultMessage="Currently studying backend development." />   
        
        </p>

       </div>
      

     </div>

   </div>

  </div>;

};

