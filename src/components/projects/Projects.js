import React from 'react'
import 'animate.css';

import gifBatman from '../../images/gifs_heroes_app.gif';
import gifApp from '../../images/gifs_app.gif'
import paisesApp from '../../images/paises_app.gif'
import { FormattedMessage } from 'react-intl';


const Projects = () => {
  return (
    <div  id='proyectos' className='projects_content'>

    <div className="projects_content_child">
        

    <div className="projects_tittle">

    <h2><FormattedMessage  id='app.project_tittle' defaultMessage="PROJECTS" /></h2>

    </div>   






   {/*Efecto Flip*/}


     <div className="content_cards">
       
       
       <div className="card">

          <div className="front">

           
           <img  className='front_gif' src={gifBatman} alt="" />
             
   
          </div>

          <div className="back">
            
            <h2 className='back_tittle'>Heroes-App</h2>

            <p className='back_p'><FormattedMessage  id='app.project.heroes' defaultMessage="A single page application using React js where we can see a list of Marvel and DC Comics Superheroes, we can see their information and search for a specific one through the search section." /></p>


          <div className="botones">
            <a href="https://jovial-wilson-2d03bf.netlify.app/" target='_blank' rel="noopener noreferrer" className='back_boton' >live site</a>

            <a href="https://github.com/andresrojas223/07-HeroesApp-Final" rel="noopener noreferrer"  aria-label='Link de repositorio' target='_blank' className='back_boton' >GitHub</a>

            </div>
          </div>

       </div>
       



       <div className="card">

          <div className="front">

          <img  className='front_gif' src={gifApp} alt="" />

          </div>

          <div className="back">

          <h2 className='back_tittle'>Gifs-App</h2>

            <p className='back_p'><FormattedMessage  id='app.project.gifs' defaultMessage="An application to search for gifs through an Api, created with Angular."/></p>

            <div className="botones">
            <a href="https://andresrojas223.github.io/react-gifexpertapp/" rel="noopener noreferrer" target='_blank' className='back_boton' >live site</a>

            <a href="https://github.com/andresrojas223/react-gifexpertapp" rel="noopener noreferrer" target='_blank' className='back_boton' >GitHub</a>
            </div> 
          </div>

       </div> 

 
       <div className="card">

            <div className="front">

            <img  className='front_gif' src={paisesApp} alt="" />

            </div>

            <div className="back">

            <h2 className='back_tittle'>Paises-App</h2>

              <p className='back_p'> <FormattedMessage  id='app.project.paises' defaultMessage="An application using Angular where we can search for countries by their name or by their capital, we can also see their respective information." /></p>

              <div className="botones"> 
              <a href="https://competent-hopper-42c664.netlify.app/" rel="noopener noreferrer" target='_blank' className='back_boton' >live site</a>

              <a href="https://github.com/andresrojas223/03-paisesApp" rel="noopener noreferrer" target='_blank' className='back_boton' >GitHub</a>
              </div>
            </div>

        </div> 



        <div className="card">

            <div className="front">


            <img  className='front_gif' src={'https://media3.giphy.com/media/du3J3cXyzhj75IOgvA/giphy.gif?cid=ecf05e47c1wkctrve0g0c44hqslocf7yclko5d8s5wgczacl&rid=giphy.gif&ct=g'} alt="" />

            </div>

            <div className="back">

            <h2 className='back_tittle'>GitHub</h2>

            

              <a href="https://github.com/andresrojas223?tab=repositories" rel="noopener noreferrer" target='_blank' ><p className='back_git'><FormattedMessage  id='app.project.gitHub' defaultMessage="See more projects on GitHub" /></p></a>


            </div>

        </div> 
















     
     </div> 

        
        
    </div>    

    

    </div>
  )
}

export default Projects