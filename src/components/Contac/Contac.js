import { Formik } from 'formik'
import React, {useState, useRef} from 'react'
import emailjs from '@emailjs/browser';
import { FormattedMessage } from 'react-intl';




export const Contac = () => {

  const form = useRef();




  const [formularioEnviado, setformularioEnviado] = useState(false)
  return (
    <div id='contac' className='contac_content_father'>



        <div className="contac_content_child">

            <div className="contac_tittle">

            <h2><FormattedMessage  id='app.contac.title' defaultMessage="CONTAC ME"/></h2>

            </div>   


            <div className="contac_text">

            <p className='contac_p' >
            <FormattedMessage  id='app.contac.text' defaultMessage="I am interested in new opportunities, if you have any questions or concerns, feel free to use the form."/>
               <br /> <br />
                    
               <FormattedMessage  id='app.contac.text1' defaultMessage="My inbox will always be available: "/><a className='email' href="mailto:andres.business@outlook.es">andres.business@outlook.es</a>  
                <br /> <br />
                <FormattedMessage  id='app.contac.text2' defaultMessage="I will do my best to reply!"/> 
            </p>

            </div>   


             <div className="contac_form">
               
               <Formik   initialValues={{

                   nombre: '',
                   email: '',
                   area: ''

               }} 
               validate={(valores) => {
                       
                    let errores = {}

                    //validacion nombre

                    if (!valores.nombre) {
                    
                      errores.nombre ='Por Favor ingresar un nombre.'
                    
                    }else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)){
                      errores.nombre = 'El nombre solo puede contener letras y espacios.'
                    }
                    
                      //validacion email

                    if (!valores.email) {
                    
                      errores.email ='Por Favor ingresar un correo.'
                    
                    }else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)){
                      errores.email ='Por Favor ingrese un correo valido.'
                    }

                     

                    return errores

               }}
               onSubmit={(valores, {resetForm}) => {
                      

                emailjs.sendForm('service_wlu0ycg', 'template_8ifazd5', form.current, 'user_PQCIjF0TelRK4eAnZBiA1')
                  .then((result) => {
                      console.log(result.text);
                      console.log('formulario enviado');

                  }, (error) => {
                      console.log(error.text);
                  });

                    setformularioEnviado(true)

                     setTimeout(() =>  setformularioEnviado(true),5000 )
                    resetForm()
                    console.log('formulario enviado')
               }} >

                {({values,errors,  touched, handleSubmit, handleChange, handleBlur}) => (

                    <form ref={form} id='form' className='conatc_form'  onSubmit={handleSubmit}   action="#">


                    <input 
                    id='nombre' 
                    placeholder='Name' 
                    name='nombre' 
                    value={values.nombre}
                    type="name"
                    onChange={handleChange}
                    onBlur={handleBlur}  />    
                    {touched.nombre && errors.nombre && <div className="error">{errors.nombre}</div> } 

                    <input  
                    id='email'  
                    placeholder='Email' 
                    name='email' 
                    value={values.email}  
                    type="email" 
                    onChange={handleChange} 
                    onBlur={handleBlur}/>
                    {touched.email && errors.email && <div className="error_email">{errors.email}</div> }
                    <div className="contac_textarea">

                   <textarea 
                    id='area' 
                    className='contac_message'  
                    placeholder='Mensaje' 
                    name="area" rows="20" cols="76"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    ></textarea>

                  {touched.area && errors.area && <div className="error">{errors.area}</div> }



                    <div className="content_submit">
                    <button id='submit' className="contac_submit" type='submit'>Enviar</button>
                 
                  {formularioEnviado && <p className='true' >Formulario enviaod con exito!</p>} 
         
                    </div>


                    </div>


                                      

                    </form>

                    


                )}
             
               </Formik>

               <script type="text/javascript"
               src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>

                <script type="text/javascript">
                  emailjs.init('user_PQCIjF0TelRK4eAnZBiA1')
                </script>

                
             
             </div> 

        </div>




    </div>
  )
}
