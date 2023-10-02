import React, { useState } from 'react';
import Scroll from './Scroll';

const Skills = () => {
   const [ scrollActive, setScrollActive ] = useState();
   const [ Active , setActive] = useState();
   
   const toggleFn =(index) => {
      setActive(prevActiveItem => prevActiveItem === index ? null : index)
   } 

  
   return (
      <Scroll className={'Skills'} scrollActive={scrollActive} setScrollActive={setScrollActive}>
         <div className="container">
            <div className="about-box flex">
               <div className={`skill-itemBox`}>
                  <div className={`skill-item  ${Active === 0 && 'clickclass clickclass-1'}`} onClick={() => toggleFn(0)}>
                     <div className={`skill-item-1-box ${Active ===0 && 'Active'}`}>
                        <div className={`skill-item-1 skill-item-1-0`}></div>
                        <div className={`skill-item-1 ${Active === 0 && 'skill-item-1-1'} `}></div>
                        <div className={`skill-item-1 ${Active === 0 && 'skill-item-1-2'} `}></div>
                        <div className={`skill-item-1 ${Active === 0 && 'skill-item-1-3'} `}></div>
                        <div className={`skill-item-1 ${Active === 0 && 'skill-item-1-4'} `}></div>
                        <div className={`skill-item-1 ${Active === 0 && 'skill-item-1-5'} `}></div>
                     </div>
                  </div>
                  
                        
               </div>
               <div className={`skill-itemBox`}>
                  <div className={`skill-item  ${Active === 1 && 'clickclass clickclass-2'}`} onClick={() => toggleFn(1)}>
                     <div className={`skill-item-1-box ${Active ===1 && 'Active'}`}>
                        <div className={`skill-item-1 skill-item-1-0`}></div>
                        <div className={`skill-item-1 ${Active === 1 && 'skill-item-1-1'} `}></div>
                        <div className={`skill-item-1 ${Active === 1 && 'skill-item-1-2'} `}></div>
                        <div className={`skill-item-1 ${Active === 1 && 'skill-item-1-3'} `}></div>
                        <div className={`skill-item-1 ${Active === 1 && 'skill-item-1-4'} `}></div>
                        <div className={`skill-item-1 ${Active === 1 && 'skill-item-1-5'} `}></div>
                     </div>
                  </div>
               </div>
               <div className={`skill-itemBox`}>
                  <div className={`skill-item  ${Active === 2 && 'clickclass clickclass-3'}`} onClick={() => toggleFn(2)}>
                  <div className={`skill-item-1-box ${Active ===2 && 'Active'}`}>
                        <div className={`skill-item-1 skill-item-1-0`}></div>
                        <div className={`skill-item-1 ${Active === 2 && 'skill-item-1-1'} `}></div>
                        <div className={`skill-item-1 ${Active === 2 && 'skill-item-1-2'} `}></div>
                        <div className={`skill-item-1 ${Active === 2 && 'skill-item-1-3'} `}></div>
                        <div className={`skill-item-1 ${Active === 2 && 'skill-item-1-4'} `}></div>
                        <div className={`skill-item-1 ${Active === 2 && 'skill-item-1-5'} `}></div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </Scroll>
   );
};

export default Skills;