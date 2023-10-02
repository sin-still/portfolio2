import React, { useState } from 'react';
import Scroll from './Scroll';


const About = () => {
   const [ scrollActive, setScrollActive ] = useState();

  
   return (
      <Scroll className={'About'} scrollActive={scrollActive} setScrollActive={setScrollActive}>
         <div className="container">
            <div className={`about-box flex ${scrollActive ? 'scrollActive' : ''}`} >
               <div className={`about-imgBox flex about-item `}>
                  <img className={``} src="/img/profile.jpg" alt="" />
               </div>
               <div className='about-textBox flex about-item'>
                  <h2>ABOUT ME</h2>
                  <p p className='about-text'>
                     <span className='about-text-style'>
                        안녕하세요! 프론트 지망생 이신철입니다. 
                     </span>
                     
                     <span className='about-text-style'>
                        코딩을 접하고 제가 짠 코드들로 다양한 UI를 만들고 로직을 구현하는 것에 재미를 느껴 프론트개발자를 지망하게되었습니다. 
                     </span>
                     <span className='about-text-style'>
                        다양한 기술과 방법으로 기능을 구현하고 조금 더 효율적인 코드를 짜기 위해 지식을 쌓고 노력해나가고 있습니다.
                     </span>
                        REACT 를 주로 사용하며, 최근에는 NEXT 와 typescript를 익히고 있습니다.
                  </p>
               </div>
            </div>
         </div>
      </Scroll>
   );
};

export default About;