import React, { useEffect, useState } from 'react';
import Scroll from './Scroll';
import { BiDownvote } from "react-icons/bi"; 

const Skills = () => {
   const [ scrollActive, setScrollActive ] = useState();
   const [ Active , setActive] = useState();
   const [ title, setTitle ] = useState( )
   useEffect(()=>{
      setTitle(Active == null ? "" : true)
   })
   console.log(Active)
   console.log(title)
   
   const toggleFn =(index) => {
      setActive(prevActiveItem => prevActiveItem === index ? null : index)
   } 

  
   return (
      <Scroll className={'Skills'} scrollActive={scrollActive} setScrollActive={setScrollActive}>
         <div className="container">
            <div className="Skills-box flex">
               <div className='scroll-icon'>
                  <span>Click!</span>
                  <i><BiDownvote /></i>
               </div>
               <div className={`skills-title ${ title && "title-active"}`}>
                  MY SKILL's
               </div>
               <div className={`skill-itemBox`}>
                  <div className={`skill-item  ${Active === 0 && 'clickclass clickclass-1'}`} onClick={() => toggleFn(0)}>
                     <div className={`skill-item-1-box ${Active ===0 && 'Active'}`}>
                        <div className={`skill-item-1 skill-item-1-0`}>
                           
                        </div>
                        <div className={`skill-item-1 skill-item-1-1-1 ${Active === 0 && 'skill-item-1-1'} `}>
                        <span className='skill-title'>Java Script</span>
                        </div>
                        <div className={`skill-item-1 skill-item-1-1-2 ${Active === 0 && 'skill-item-1-2'} `}>
                        <span className='skill-title'>HTML</span>
                        </div>
                        <div className={`skill-item-1 skill-item-1-1-3 ${Active === 0 && 'skill-item-1-3'} `}>
                        <span className='skill-title'>CSS</span>
                        </div>
                        <div className={`skill-item-1 skill-item-1-1-4 ${Active === 0 && 'skill-item-1-4'} `}>
                        <span className='skill-title'>SASS</span>
                        </div>
                        <div className={`skill-item-1 skill-item-1-1-5 ${Active === 0 && 'skill-item-1-5'} `}>
                        <span className='skill-title'>BOOT STRAP</span>
                        </div>
                     </div>
                  </div>
               </div>
               <div className={`skill-itemBox`}>
                  <div className={`skill-item  ${Active === 1 && 'clickclass clickclass-2'}`} onClick={() => toggleFn(1)}>
                     <div className={`skill-item-1-box ${Active ===1 && 'Active'}`}>
                        <div className={`skill-item-1 skill-item-1-0`}></div>
                        <div className={`skill-item-1 skill-item-1-2-1 ${Active === 1 && 'skill-item-1-1'} `}>
                           <span className='skill-title'>jQuery</span>
                        </div>
                        <div className={`skill-item-1 skill-item-1-2-2 ${Active === 1 && 'skill-item-1-2'} `}>
                           <span className='skill-title'>REACT.JS</span>
                        </div>
                        <div className={`skill-item-1 skill-item-1-2-3 ${Active === 1 && 'skill-item-1-3'} `}>
                           <span className='skill-title'>REDUX</span>
                        </div>
                        <div className={`skill-item-1 skill-item-1-2-4 ${Active === 1 && 'skill-item-1-4'} `}>
                            <span className='skill-title'>AXIOS</span>
                        </div>
                        <div className={`skill-item-1 skill-item-1-2-5 ${Active === 1 && 'skill-item-1-5'} `}>
                           <span className='skill-title'>NEXT.JS</span>
                        </div>
                     </div>
                  </div>
               </div>
               <div className={`skill-itemBox`}>
                  <div className={`skill-item  ${Active === 2 && 'clickclass clickclass-3'}`} onClick={() => toggleFn(2)}>
                  <div className={`skill-item-1-box ${Active ===2 && 'Active'}`}>
                        <div className={`skill-item-1 skill-item-1-0`}></div>
                        <div className={`skill-item-1 skill-item-1-3-1 ${Active === 2 && 'skill-item-1-1'} `}>
                           <span className='skill-title'>Visual Studio</span>
                        </div>
                        <div className={`skill-item-1 skill-item-1-3-2 ${Active === 2 && 'skill-item-1-2'} `}>
                           <span className='skill-title'>FIGMA</span>
                        </div>
                        <div className={`skill-item-1 skill-item-1-3-3 ${Active === 2 && 'skill-item-1-3'} `}>
                           <span className='skill-title'>Git</span>
                        </div>
                        <div className={`skill-item-1 skill-item-1-3-4 ${Active === 2 && 'skill-item-1-4'} `}>
                           <span className='skill-title'>Git hub</span>
                        </div>
                        <div className={`skill-item-1 skill-item-1-3-5 ${Active === 2 && 'skill-item-1-5'} `}>
                           <span className='skill-title'></span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </Scroll>
   );
};

export default Skills;