import './App.css';
import  headerLogo from './asserts/LOGO.png'
import cart from './asserts/cart.png'
import phone from './asserts/phone.png'
import card from './asserts/card.png'
import oneImg from './asserts/1.png'
import twoImg from './asserts/2.png'
import threeImg from './asserts/3.png'
import pizza from './asserts/pizza.png'
import hamburger from './asserts/hamburger.png'
import people from './asserts/people.png'
import ten from './asserts/10.png'
import twenty from './asserts/20.png'
import therty from './asserts/30.png'
import forty from './asserts/40.png'
import fifty from './asserts/50.png'
import sixty from './asserts/60.png'
import burgerBgImg from './asserts/burgerBgImg.png'
// import group from './asserts/Group.png'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import { useState } from 'react';


function App() {

  const [nav, setNav] = useState(false);

  // const styleChange = () => {

  //   if (menuActive === 'disp'){
  //     return setMenuActive('disp1')
  //   }
  //   else {
  //     return setMenuActive('disp')
  //   }
  // }


  return (
    <div className='Main'>
      <div className="header">
        <div className='container'>

          <div className='headerLine'>
            <div className='headerLogo'>
              <img src={headerLogo} alt=''/>
            </div>

            <div className={nav ? ['nav', 'active'].join(' ') : 'nav'}>
              <a className='navItem' href='#top'>Главная</a>
              <a className='navItem' href='#top'>Меню</a>
              <a className='navItem' href='#top'>О нас</a>
              <a className='navItem' href='#top'>Бронь</a>
            </div>

            <div className='cart'>
              <a href='#top'>
                <img className='cartImg' src={cart} alt=''/>
              </a>
            </div>

            <div className='phone'>
              <div className='phoneAndNumber'>
                <div className='phoneImage'>
                  <img src={phone} alt=''/>
                </div>

                <div className='number'>
                  <a className='num' href='#top'>+7-909-308-88-55</a>
                </div>
              </div>

              <div className='phoneText'>
                Свяжитеесь с нами для<br/> бронирования
              </div>

            </div>

            <div className='btn'>
              <a href='#top' className='button'>ЗАКАЗ СТОЛИКА</a>
            </div>

            <div onClick={ () => setNav(!nav)} className='burgerMenu'>
              {nav ? <AiOutlineClose color='blue' size={25}/> : <AiOutlineMenu color='blue' size={25}/>}
            </div>

          </div>

          <div className='headerDown'>
            <div className='headerTitle'>Добро пожаловать в
              <div className='headerSubTitle'>
                Наш ресторан
                </div>
              <div className='headerSupTitle'>
                ДОМ ЛУЧШЕЙ ЕДЫ
              </div>
              <div className='headerBtn'>
                <a href='#top' className='headerButton'>VIEW MENU</a>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className='cards'>
        <div className='container'>

          <div className='cardHolder'>
          
            <div className='card'>
              <div className='cardImage'>
                <img className='cardImg' alt='' src={card}/>
              </div>

              <div className='cardTitle'>
                Магическая <span> Атмосфера</span>
              </div>

              <div className='cardDesc'>
                В нашем заведении царит магическая атмосфера наполненная вкусными ароматами
              </div>
            
            </div>

            <div className='card'>
              <div className='cardImage'>
                <img className='cardImg' alt='' src={card}/>
              </div>

              <div className='cardTitle'>
                Лучшее качество <span> Еды</span>
              </div>

              <div className='cardDesc'>
              Качество нашей Еды - отменное!
              </div>
            
            </div>

            <div className='card'>
              <div className='cardImage'>
                <img className='cardImg' alt='' src={card}/>
              </div>

              <div className='cardTitle'>
                Недорогая <span> Еда</span>
              </div>

              <div className='cardDesc'>
              Стоимость нашей Еды зависит только от ее количества. Качество всегда на высоте!
              </div>
            
            </div>

          </div>
        </div>
      </div>

      <div className='history'>
        <div className='container'>

          <div className='historyHolder'>

            <div className='historyInfo'>

              <div className='historyTitle'>
                Наша <span> История</span>
              </div>
              
              <div className='historyDesc'>
                Как и у любого другого самобытного места, у нас есть своя, особая история. Идея ресторана пришла основателям неожиданно. Во время прогулки по лесу создатель нашего ресторана застрял в сотнях километров от ближайшего населенного пункта. Вдали от цивилизации и связи им пришлось навремя обустровать себе нехитрый быт, добывать и готовить себе еду.
              </div>

              <div className='historyNumber'>

                <div className='numberItem'>
                  93 <span>Напитки</span>
                </div>

                <div className='numberItem'>
                  206 <span>Еда</span>
                </div>

                <div className='numberItem'>
                  71 <span>Закуски</span>
                </div>
              </div>

            </div>

            <div className='historyImages'>
              <img className='images1' src={oneImg} alt=''/>
              <img className='images2' src={twoImg} alt=''/>
              <img className='images3' src={threeImg} alt=''/>
            </div>

          </div>
        </div>
      </div>

      <div className='blackBlock'>

        <div className='container'>
          <div  className='blockHolder'>

            <div className='left'>

              <div className='leftTitle'>
                Отпразднуйте в одном из<br/>
                самых лучших ресторанов.
              </div>

              <div className='leftText'>
                Только в этом месяце бизнес-ланч от 250 ₽
              </div>

            </div>

            <div className='right'>

              <div className='rightButton'>
                <a href='#top' className='rightBtn'>ЗАКАЗ СТОЛИКА</a>
              </div>

            </div>
          </div>
        </div>

      </div>

      <div className='dishes'>

        <div className='container'>

          <div className='dishesTitle'>
            Наши <span>Блюда</span>
          </div>

          <div className='burgers'>
            
            <div className='burgersImage'>
              <img src={pizza} alt='' className='pizza'/>
            </div>

            <div className='burgersItems'>
              <div className='burgerItem'>
                <img src={hamburger} alt='' className='burger'/>
                <div className='burgerText'>
                  Гамбургер мини -------------- 220Р
                </div>
              </div>

              <div className='burgerItem'>
                <img src={hamburger} alt='' className='burger'/>
                <div className='burgerText'>
                  Гамбургер мини -------------- 220Р
                </div>
              </div>

              <div className='burgerItem'>
                <img src={hamburger} alt='' className='burger'/>
                <div className='burgerText'>
                  Гамбургер мини -------------- 220Р
                </div>
              </div>

            </div>            

          </div>

        </div>

      </div>

      <div className='menu'>

        <div className='container'>

          <div className='menuTitle'>
            Наше меню
            </div>

          <div className='menuItems'>
             
            <div className='menuItem'>
              
              <div className='menuImage'>
                <img src={burgerBgImg} alt='' className='menuImg'/>
              </div>

              <div className='menuText'>
                Гамбургер макси
              </div>

              <div className='menuSubText'>
                Максимально толстый<br/>слой мяса
              </div>

              <div className='menuButton'>
                <a href='#top' className='menuBtn'>ЗАКАЗАТЬ</a>
              </div>

            </div>

            <div className='menuItem'>
              
              <div className='menuImage'>
                <img src={burgerBgImg} alt='' className='menuImg'/>
              </div>

              <div className='menuText'>
                Гамбургер макси
              </div>

              <div className='menuSubText'>
                Максимально толстый<br/>слой мяса
              </div>

              <div className='menuButton'>
                <a href='#top' className='menuBtn'>ЗАКАЗАТЬ</a>
              </div>

            </div>

            <div className='menuItem'>
              
              <div className='menuImage'>
                <img src={burgerBgImg} alt='' className='menuImg'/>
              </div>

              <div className='menuText'>
                Гамбургер макси
              </div>

              <div className='menuSubText'>
                Максимально толстый<br/>слой мяса
              </div>

              <div className='menuButton'>
                <a href='#top' className='menuBtn'>ЗАКАЗАТЬ</a>
              </div>

            </div>

          </div>
        </div>
      </div>

      <div className='coment'>

        <div className='container'>
          
          <div className='commentText'>
            Я надолго запомню мой День рождения, проведённый в этом ресторане! Кусочек родной Армении!!! Отдельное спасибо за комплепент в виде фруктовой тарелки. Будем рекомендовать этот ресторан своим друзьям и родственникам также за рубежом, путешествующих в Санкт-Петербург!!!
          </div>

          <div className='commentImg'>
            <img className='peoplePhoto' src={people} alt=''/>
          </div>

          <div className='commentType'>
            Посетитель
          </div>

          <div className='commentName'>
            Николай
          </div>

        </div>
      </div>

      <div className='galery'>

        <div className='container'>

          <div className='galeryTitle'>
            Галерея <span>Блюд</span>
          </div>

          <div className='galeryContent'>
            <div className='galeryLeft'>

              <div className='galeryUp'>
                <img src={ten} alt='' className='imgGal high'/>
              </div>

              <div className='galeryDown'>
                <img src={twenty} alt='' className='imgGal'/>
                <img src={therty} alt='' className='imgGal'/>
              </div>
            </div>

            <div className='galeryRight'>

              <div className='galeryUp'>
                <img src={twenty} alt='' className='imgGal'/>
                <img src={therty} alt='' className='imgGal'/>
              </div>

              <div className='galeryDown'>
                <img src={ten} alt='' className='imgGal high'/>
              </div>
              
            </div>
          </div>
        </div>
      </div>

      <div className='cook'>

        <div className='container'>

          <div className='cookTitle'>
            Наши <span>Повара</span>
          </div>

          <div className='cookContent'>
            <img src={forty} alt=''/>
            <img src={fifty} alt=''/>
            <img src={sixty} alt=''/>
          </div>
        </div>
      </div>

      <div className='footer'>
        Coopyright 2022
      </div>
    </div>
  );
}

export default App;
