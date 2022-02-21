import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { useState} from 'react/cjs/react.development';
import Link from 'react-scroll/modules/components/Link';
import { FormattedMessage } from 'react-intl';


export const SideBar = () => {
const title = '{AR}'


const [showMenu, setshowMenu] = useState(false);
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





return <div id='home' className={color ? 'content_father logo_scroll header_bg' || 'logo_scroll'  : 'content_father   '}>

   {showMenu && (

     

<div className='menu_responsive'  >

<div className="btn_close">

< FontAwesomeIcon className='menu_close'
     
     icon={faTimes}

     onClick={ () => Close()}
     
   />

</div>

<div className='content_child_nav_responsive'>


  <ul className='menu' >

  <li><Link  onClick={() => Close() }  to='/'  activeClass="active"  spy={true} smooth={true} offset={-70} duration={1200} ><FormattedMessage  id='app.home' defaultMessage="Home" /></Link></li>
  <li><Link  onClick={() => Close() } to='acerca' activeClass="active"  spy={true} smooth={true} offset={-70} duration={1200} ><FormattedMessage  id='app.about' defaultMessage="About Me" /></Link></li>
  <li><Link  onClick={() => Close() } to='habilidades' activeClass="active"  spy={true} smooth={true} offset={-70} duration={1200}><FormattedMessage  id='app.skills' defaultMessage="Skills" /></Link></li>
  <li><Link  onClick={() => Close() } to='proyectos' activeClass="active"  spy={true} smooth={true} offset={-70} duration={1200}><FormattedMessage  id='app.projects' defaultMessage="Projects" /></Link></li>
  <li className='button_contac' ><Link  onClick={() => Close() } to='contac' activeClass="active"  spy={true} smooth={true} offset={-70} duration={1200}><FormattedMessage  id='app.contac' defaultMessage="Contac" /></Link></li> 
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

    <li><Link to='/' activeClass="active"  spy={true} smooth={true} offset={50} duration={1200} ><FormattedMessage  id='app.home' defaultMessage="Home" /></Link></li>
     <li><Link to='acerca' activeClass="active"  spy={true} smooth={true} offset={50} duration={1200} ><FormattedMessage  id='app.about' defaultMessage="About Me" /></Link></li>
     <li><Link to='habilidades' activeClass="active"  spy={true} smooth={true} offset={50} duration={1200}><FormattedMessage  id='app.skills' defaultMessage="Skills" /></Link></li>
     <li><Link to='proyectos' activeClass="active"  spy={true} smooth={true} offset={50} duration={1200}><FormattedMessage  id='app.projects' defaultMessage="Projects" /></Link></li>
     <li className='button_contac' ><Link  onClick={() => Close() } to='contac' activeClass="active"  spy={true} smooth={true} offset={50} duration={1200}><FormattedMessage  id='app.contac' defaultMessage="Contac" /></Link></li>

    </ul>

  </div>

   </div>

  </div>;

  

     


}

