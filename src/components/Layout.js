import React from 'react'
import Router from './Router'
import Footer from './Footer'


export default function Layout({children}) {
  return (
    <div>
                 <Router/>
        
       
          <br/>
          <div>
          <br/>
      <br/>

                 {children}
                 <br/>
    
          </div>
             
        
                    

                <Footer/>
        
    </div>
                  
                
                


    
  )

}
