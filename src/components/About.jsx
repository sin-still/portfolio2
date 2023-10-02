import React, { useState } from 'react';
import Scroll from './Scroll';


const About = () => {
   const [ scrollActive, setScrollActive ] = useState();
   const [clickClass, SetClickClass] = useState(false);

   const classFn = ( ) =>{
      SetClickClass(!clickClass)
   }

   return (
      <Scroll className={'About'} scrollActive={scrollActive} setScrollActive={setScrollActive}>
         <div className="container">
            <h2>ABOUT ME</h2>
            <div className="about-box flex">
               <div className={`about-imgBox flex about-item `}>
                  <img className={`${clickClass && 'clickclass' }`} onClick={classFn} src="/img/profile.jpg" alt="" />
               </div>
               <div className='about-textBox flex about-item'>
                  <p p className='about-text'>
                     안녕하세요! 프론트 지망생 이신철입니다. 
                     <br />
                     코딩을 접하고 제가 짠 코드들로 다양한 UI와 UX를 만들며 로직을 구성하는것에 재미를 느끼고 보람을 느낍니다 !
                  </p>
               </div>
               <div className='about-skill flex about-item'>
                  
               </div>
            </div>
         </div>
      </Scroll>
   );
};

export default About;