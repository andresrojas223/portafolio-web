import React from 'react'



export const VisualizadorPdf = () => {

    componentDidMount() = () => {

        if (typeof window.orientation !== 'undefined' ) {
            
              document.getElementById('enlaceDescargarPdf').click();
              window.close()
    
    
        }
    
     } 
  return (
    <div  style={{position:'absolute', width:'100%', height:'100%'  }} >

        <object data={require('../../Archivos/mi_cv.pdf')} 
        
        type="application/pdf"
        width='100%'
        height='100%'
        
        
        >

           
       <a href={require('../../Archivos/mi_cv.pdf')}  download='mi_cv.pdf' id='enlaceDescargarPdf' >Tu dispositivo no puede visualizar el pdf, da click aqui para descargarlo</a>




        </object>
     



    </div>
  )
}
