import React from 'react'
import 'animate.css';

import gifBatman from '../../images/gifs_heroes_app.gif';
import gifApp from '../../images/gifs_app.gif'
import paisesApp from '../../images/paises_app.gif'


const Projects = () => {
  return (
    <div  id='proyectos' className='projects_content'>

    <div className="projects_content_child">
        

    <div className="projects_tittle">

    <h2>MY PROYECTS</h2>

    </div>   






   {/*Efecto Flip*/}


     <div className="content_cards">
       
       
       <div className="card">

          <div className="front">

           
           <img  className='front_gif' src={gifBatman} alt="" />
             
   
          </div>

          <div className="back">
            
            <h2 className='back_tittle'>Heroes-App</h2>

            <p className='back_p'>Una single page application utilizando React js donde podemos ver un listado de Superhéroes de Marvel y Dc comics, podemos ver la informacion de ellos y buscar uno en especifico mediante el apartado search.</p>


          <div className="botones">
            <a href="https://jovial-wilson-2d03bf.netlify.app/" target='_blank' className='back_boton' >live site</a>

            <a href="https://github.com/andresrojas223/07-HeroesApp-Final" target='_blank' className='back_boton' >GitHub</a>

            </div>
          </div>

       </div>
       



       <div className="card">

          <div className="front">

          <img  className='front_gif' src={gifApp} alt="" />

          </div>

          <div className="back">

          <h2 className='back_tittle'>Gifs-App</h2>

            <p className='back_p'>una aplicación para buscar gifs mediante una Api, creada con Angular.</p>

            <div className="botones">
            <a href="https://andresrojas223.github.io/react-gifexpertapp/" target='_blank' className='back_boton' >live site</a>

            <a href="https://github.com/andresrojas223/react-gifexpertapp" target='_blank' className='back_boton' >GitHub</a>
            </div> 
          </div>

       </div> 

 
       <div className="card">

            <div className="front">

            <img  className='front_gif' src={paisesApp} alt="" />

            </div>

            <div className="back">

            <h2 className='back_tittle'>Paises-App</h2>

              <p className='back_p'>Una aplicacion utilizando Angular donde podemos buscar paises por su nombre o por su capital, podemos tambien ver su respectiva informacion.</p>

              <div className="botones"> 
              <a href="https://competent-hopper-42c664.netlify.app/" target='_blank' className='back_boton' >live site</a>

              <a href="https://github.com/andresrojas223/03-paisesApp" target='_blank' className='back_boton' >GitHub</a>
              </div>
            </div>

        </div> 



        <div className="card">

            <div className="front">


            <img  className='front_gif' src={'https://media3.giphy.com/media/du3J3cXyzhj75IOgvA/giphy.gif?cid=ecf05e47c1wkctrve0g0c44hqslocf7yclko5d8s5wgczacl&rid=giphy.gif&ct=g'} alt="" />

            </div>

            <div className="back">

            <h2 className='back_tittle'>GitHub</h2>

            

              <a href="https://github.com/andresrojas223?tab=repositories" target={'_blank'} ><p className='back_git'>Ver mas proyectos en GitHub</p></a>


            </div>

        </div> 
















     
     </div> 

        
        
    </div>    

    

    </div>
  )
}

export default Projects