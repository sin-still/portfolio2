import React, { useState } from 'react';
import Scroll from './Scroll';
import ContactForm from './ContactMail';
import Modal from './Modal';

const Contact = () => {
   const [ scrollActive, setScrollActive ] = useState();
   const [isModalOpen, setIsModalOpen] = useState(false);

   const handleOpenModal = () => {
     setIsModalOpen(true);
   };
 
   const handleCloseModal = () => {
     setIsModalOpen(false);
   };
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
            <div className="contact-box flex">
               <div className="contact-info flex">
                  <div className="contact-info-title">&lt; Phone &#47; &gt;</div>
                     <div className="contact-info-item">
                        <address className='phone-address'  onClick={handleOpenModal}> CLICK !</address>
                     </div>
                  <Modal isOpen={isModalOpen} onClose={handleCloseModal} content={
                     <div className='phone-img-box flex'>
                        <img className='phone-img phone-img1' src="img/phone2.png" alt="" />
                        <img className='phone-img phone-img2' src="/img/kakao.png" alt="" />
                     </div>
                  } />
                  <div className="contact-info-title">&lt; Mail &#47; &gt;</div>
                  <address className="contact-info-item">chuli9608@gmail.com</address>
                  <div className="contact-info-title">&lt; Git hube &#47; &gt;</div>
                  <address className="contact-info-item"><a target='_blank' href="https://github.com/sin-still">https://github.com/sin-still</a></address>
               </div>
               <ContactForm></ContactForm>
               
            </div>
         </div>
      </Scroll>
   );
};

export default Contact;