import React from 'react'
import { useEffect,useState } from 'react'
import { FaAngleUp } from "react-icons/fa";

export const BackToTop = () => {
  
  const [backToTopButton, setbackToTopButton] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {

      if (window.scrollY > 600) {
          setbackToTopButton(true)
      }else{

        setbackToTopButton(false)

      }


    })

    }, [])
  

    const scrollup = () => {

      window.scrollTo({

         top: 0,
         behavior: "smooth"

      })
  

    }

   
  
  
    return (
     <div>

           {backToTopButton && (

           <FaAngleUp style={{
                    
                position: 'fixed',
                 bottom: '8%',
                 right: '9%',
                 height: '5vh',
                 width: '5vh',
                 fontSize: '2vh',
                 color: 'rgba(0, 0, 0, 0.596)',
                 backgroundColor: 'rgba(255, 255, 255, 0.377)',
                 borderRadius: '50%',
                 cursor: 'pointer',
                 zIndex: '99'                 
                 
              }} onClick={scrollup}  />

           )}





     </div>
  )
}
