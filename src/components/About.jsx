import React, { useState } from 'react';
import Scroll from './Scroll';


const About = () => {
   const [ scrollActive, setScrollActive ] = useState();
   const [ abuotActive, setAboutActive ] = useState();

   const clickFn = () =>{
      setAboutActive(!abuotActive)
   }
  
   return (
      <Scroll className={'About'} scrollActive={scrollActive} setScrollActive={setScrollActive}>
         <div className="container">
            <div className={`about-box flex ${scrollActive ? 'scrollActive' : ''} ${abuotActive && 'abuotActive'}` } >
               <div className={`about-box-item-box flex ${abuotActive && 'abuotActive'}`}>
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
               <div className={`about-box-item-box about-box-item-box1 flex ${abuotActive && 'abuotActive1' }`}>
                  <div className="about-box-item">
                     <div className="about-box-item-title flex"> 이름 </div>
                     <div className="about-box-item-content">
                        이신철
                     </div>
                  </div>
                  <div className="about-box-item">
                     <div className="about-box-item-title flex"> 생일 </div>
                     <div className="about-box-item-content">
                        <address>1996.08.16(만 27세)</address>
                     </div>
                  </div>
                  <div className="about-box-item">
                     <div className="about-box-item-title flex"> 교육 </div>
                     <div className="about-box-item-content">
                        더휴먼컴퓨터아카데미 (산대특) REACT,Vue + 프레임워크 기반 프론트엔드 개발 양성 지원과정
                     </div>
                  </div>
                  <div className="about-box-item">
                     <div className="about-box-item-title flex"> 학력 </div>
                     <div className="about-box-item-content">
                        용인예술과학대학교 ( 前 용인송담대 ) 건축에너지학과
                     </div>
                  </div>
                  <div className="about-box-item">
                     <div className="about-box-item-title flex"> 주소 </div>
                     <div className="about-box-item-content">
                        경기도 수원시 권선구 거주
                     </div>
                  </div>
               </div>
               <div className="about-hover-box flex " onClick={()=>{clickFn()}}>
                  <div className={`about-hover-text ${ abuotActive && 'abuotActive-text' }`}>
                     {
                        abuotActive ? '되돌아가기' : '자세히보기'
                     }
                  </div>
               </div>
            </div>
         </div>
      </Scroll>
   );
};

export default About;