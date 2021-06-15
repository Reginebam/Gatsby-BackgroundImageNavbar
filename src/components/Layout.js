import React from 'react'
import Router from './Router'
import Footer from './Footer'


export default function Layout({children}) {
  return (
    <div>
                 <Router/>
        
       
          <br/>
          <div>
                 {children}
          </div>
             
        
                    

                <Footer/>
        
    </div>
                  
                
                


    
  )

}
