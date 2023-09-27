import React from 'react'

const Footer = () => {
  return (
    <>
    
       <footer className="bg-footer-background bg-no-repeat text-white sm:footer-background lg:w-[1871px] lg:h-[722px] flex justify-center items-center sm:flex-col sm:mt-64">
       <div className='lg:ml-[-35rem]   sm:ml-[25rem] '>
        <img src="Ellipse 10.png"/>
    </div>
       <div className='lg:ml-[-38rem]   sm:ml-[22rem] '>
        <img src="Ellipse 9.png"/>
    </div>
       <div className='lg:ml-[-47rem] mb-80 sm:ml-[19rem]  '>
        <img src="Ellipse 8.png"/>
    </div>
   
         <div className=" sm:text-left mt-10 text-center">
           <p className="text-3xl text-center font-bold">Set the foundation for an <br/> aggressive growth</p>
           <button className="mt-4 bg-white text-black w-35 p-4 h-7 mx-32 flex items-center justify-center rounded-md">
       hop on a call
     </button>
     </div>
     <div className='flex justify-between w-3/4 mt-4 '>
         <div className='flex flex-col '>
             <div className='text-bold text-2xl'>
             our Fixes
             </div>
             <div className='mt-2'>
                 Team
             </div>
             <div>
                 Expert
             </div>
             <div>
                 Content
             </div>
     
     
         </div>
         <div className='flex flex-col '>
         <div className='text-bold text-2xl'>
                 Community
             </div>
             <div className='mt-2'>
                 About Us
             </div>
             <div>
                 Contact Us
             </div>
             <div>
                 Privacy
             </div>
             <div>
                 Terms
             </div>
     
     
         </div>
         <div className='flex flex-col'>
         <div className='text-bold text-2xl'>
             Resources
             </div>
             <div className='mt-2'>
                 Eye Openers
             </div>
             <div>
                 Buzz
             </div>
            
     
     
         </div>
         <div className='flex flex-col'>
             <div className='text-bold text-2xl'>
             Social
             </div>
             <div className='mt-2'>
                 LinkedIn
             </div>
             <div>
                 Twitter
             </div>
             <div>
                 Facebook
             </div>
             <div>
                 Instagram
             </div>
     
     
         </div>
     
     </div>
     
         
       </footer>
    </>
 
  
  )
}

export default Footer