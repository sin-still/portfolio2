import { BiDownvote } from "react-icons/bi"; 


const MainPage = () => {
   
   return (
      <div className='mainPage flex '>
         <div className="container">
            <div className='main-textBox flex'>
               <h1 className='mainText mainText1'>SINCHUL</h1>
               <h1 className='mainText mainText2'>SINCHUL</h1>
               <h2 className="subText">
                  프론트엔드 개발자를 꿈꾸며<br />
                  하루하루 성장하는 이신철입니다. <br />
                  <span>저의 개발자로서의 첫 발걸음, 포트폴리오에 방문해주셔서 감사합니다. </span>
               </h2>   
            </div>
            <div className="scroll-icon flex ">
               <span>Scroll Down!</span>
               <i><BiDownvote /></i>
            </div>
         </div>
      </div>
   );
};

export default MainPage;