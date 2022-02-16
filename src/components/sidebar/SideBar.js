import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react/cjs/react.development';
import Link from 'react-scroll/modules/components/Link';


export const SideBar = () => {
const title = '{AR}'


const [showMenu, setshowMenu] = useState(true);
const [color, setcolor] = useState(false)
const changeColor = () => {

  if(window.scrollY >= 100){

   setcolor(true)


  }else{

     setcolor(false) 
  }
}



window.addEventListener('scroll', changeColor)

const Mostrar = () => {


   setshowMenu(!showMenu)

}


const Close = () => {

  setshowMenu(false)

}





return<div className={color ? 'content_father logo_scroll header_bg' || 'logo_scroll'  : 'content_father   '}>

   {showMenu && (

     

<div className='menu_responsive'  >

<div className="btn_close">

< FontAwesomeIcon className='menu_close'
     
     icon={faTimes}

     onClick={ () => Close()}
     
   />

</div>

<div className="content_child_nav_responsive">


  <ul className='menu' >

  <li><Link  onClick={() => Close() }  to='/'  activeClass="active"  spy={true} smooth={true} offset={50} duration={500} >Home</Link></li>
  <li><Link  onClick={() => Close() } to='acerca' activeClass="active"  spy={true} smooth={true} offset={50} duration={500} >About</Link></li>
  <li><Link  onClick={() => Close() } to='habilidades' activeClass="active"  spy={true} smooth={true} offset={50} duration={500}>Skills</Link></li>
  <li><Link  onClick={() => Close() } to='proyectos' activeClass="active"  spy={true} smooth={true} offset={50} duration={500}>My projects</Link></li>
  <li  className='margin_top' ><a className='button_contac' href="#">Contac</a></li>
  </ul>

</div>


</div>


   )}
  
        


   <div className='content_child'>

   <div className="content_child_logo">

    <a href="#Home"><h1 className='logo'>{title}</h1></a>

   </div>


   <div className="content_child_nav">

     <div className="menu_nav">
 
     < FontAwesomeIcon className='menu_bar'
     
       icon={faBars}

       onClick={() => Mostrar()}
     />


    </div>

    <ul  >

     <li><a className='list_active' href="#">Home</a></li>
     <li><Link to='acerca' activeClass="active"  spy={true} smooth={true} offset={50} duration={500} >About</Link></li>
     <li><Link to='habilidades' activeClass="active"  spy={true} smooth={true} offset={50} duration={500}>Skills</Link></li>
     <li><Link to='proyectos' activeClass="active"  spy={true} smooth={true} offset={50} duration={500}>My projects</Link></li>
     <li className='margin_top'><a className='button_contac' href="#">Contac</a></li>


    </ul>

  </div>

   </div>

  </div>;
};
