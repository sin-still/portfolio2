import React from 'react';
import { Link } from 'react-router-dom';

const header = () => {
   const logo = () =>{
      window.scrollTo({ top: 0, behavior: 'smooth'});
   }
   return (
      <div className='header flex'>
         <div className="container flex">
            <div className='flex'>
               <h2><Link onClick={ logo }>Sinchul's Portfolio</Link></h2>
            </div>
            <div className='flex'>
               <p>
                  chuli9608@gmail.com
               </p>
            </div>
            <div className='flex'>
               <h3 className='header-item3'>
                  Front-End Developer
               </h3>
            </div>
         </div>
      </div>
   );
};

export default header;