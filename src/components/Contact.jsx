import React, { useState } from 'react';
import Scroll from './Scroll';

const Contact = () => {
   const [ scrollActive, setScrollActive ] = useState();
   return (
      <Scroll className={'Contact'} scrollActive={scrollActive} setScrollActive={setScrollActive}>
         <div className="container flex">
            <div className="contact-banner">
               <div className={`contact-banner-subText ${ scrollActive && 'bannerAnimation contact-banner-text1' } contact-banner-text1`}>Thank you!</div>
               <div className={`contact-banner-text ${ scrollActive && 'bannerAnimation contact-banner-text1' } contact-banner-text1`}>C</div>
               <div className={`contact-banner-text ${ scrollActive && 'bannerAnimation contact-banner-text2' } contact-banner-text2`}>O</div>
               <div className={`contact-banner-text ${ scrollActive && 'bannerAnimation contact-banner-text3' } contact-banner-text3`}>N</div>
               <div className={`contact-banner-text ${ scrollActive && 'bannerAnimation contact-banner-text4' } contact-banner-text4`}>T</div>
               <div className={`contact-banner-text ${ scrollActive && 'bannerAnimation contact-banner-text5' } contact-banner-text5`}>A</div>
               <div className={`contact-banner-text ${ scrollActive && 'bannerAnimation contact-banner-text6' } contact-banner-text6`}>C</div>
               <div className={`contact-banner-text ${ scrollActive && 'bannerAnimation contact-banner-text7' } contact-banner-text7`}>T&nbsp;</div>
               <div className={`contact-banner-text ${ scrollActive && 'bannerAnimation contact-banner-text8' } contact-banner-text8`}>M</div>
               <div className={`contact-banner-text ${ scrollActive && 'bannerAnimation contact-banner-text9' } contact-banner-text9`}>E</div>
               <div className={`contact-banner-text ${ scrollActive && 'bannerAnimation contact-banner-text10' } contact-banner-text1`}>?</div>
            </div>
            <div className="contact-box">

            </div>
         </div>
      </Scroll>
   );
};

export default Contact;