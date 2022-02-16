import React from 'react'
import { FaHtml5, FaCss3Alt, FaSass, FaJs, FaReact, FaAngular, FaTerminal, FaGithub, FaFigma } from "react-icons/fa";
import { DiJqueryLogo, DiResponsive, DiPhotoshop } from "react-icons/di";


export const Skills = () => {
  return (
    <div id='habilidades' className='skills_content'>

        
      <div className="skills_tittle">

      <h2>Habilidades</h2>

      </div>
 
     

        <div className="skills_child">

          <div className="html5_content">

          <FaHtml5 className='icons' />
           <h2>Html5</h2>
 
          </div>

          <div className="css3_content">

          <FaCss3Alt className='icons' />
           <h2>Css3</h2>
 
          </div>

          <div className="sass_content">

          <FaSass className='icons' />
          <h2>Sass</h2>
 
          </div>
 
          
          <div className="sass_content">

          <DiJqueryLogo className='icons'/>
          <h2>Jquery</h2>

          </div>
        
          
          <div className="javascript_content">

          <FaJs className='icons' />
          <h2>JavaScript</h2>

          </div>


          <div className="react_content">

          <FaReact className='icons' />
          <h2>React</h2>

          </div>
 
          <div className="Angular_content">

          <FaAngular className='icons' />
          <h2>Angular</h2>

          </div>


          <div className="terminal_content">

          <FaTerminal className='icons' />
          <h2>Terminal</h2>

          </div>

          <div className="github_content">

          <FaGithub className='icons' />
          <h2>Github</h2>

          </div>
  

          <div className="responsive_content">
          <DiResponsive  className='icons' />
          <h2>Responsive Design</h2>

          </div>

          <div className="figma_content">
          <FaFigma  className='icons' />
          <h2>Figma</h2>

          </div>

          <div className="photoshop_content">
          <DiPhotoshop  className='icons' />
          <h2>Photoshop</h2>

          </div>

        </div>

        



    </div>
  )
}
