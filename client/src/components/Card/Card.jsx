
import './card.css'
import Tilt from 'react-parallax-tilt';
import photos1 from "./photos/dq.png";
import photos2 from "./photos/dq.png"
import photos3 from "./photos/dq.png"
import photos4 from "./photos/dq.png";


export default function Card () {
    
    return(
<ul class="cards">
<Tilt>
  <li>
    <a href="" class="card">
      <img src={photos1} class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                
          <div class="card__header-text">
            <h3 class="card__title">Weertz Joffrey</h3>
            <span class="card__status">CEO of World protocol</span>
          </div>          
        </div>
        <p class="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
      </div>
    </a>
  </li>
  </Tilt> 

  <Tilt>
  <li>
    <a href="" class="card">
      <img src={photos2} class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                 
          <div class="card__header-text">
            <h3 class="card__title">Samuel dhayeng</h3>
            <span class="card__status">Smart-contract devlopper</span>
          </div>          
        </div>
        <p class="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
      </div>
    </a>
  </li>
  </Tilt> 

  <Tilt>
  <li>
  
    <a href="" class="card">
      <img src={photos3} class="card__image" alt="" />
      <div class="card__overlay">        
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                 
          <div class="card__header-text">
            <h3 class="card__title">Hector ruiz</h3>
            <span class="card__status">Front-end Developer</span>
          </div>
        </div>
        <p class="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
      </div>
    </a>
    
  </li>
  </Tilt>

  <Tilt>
  <li>
    <a href="" class="card">
      <img src={photos4} class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                 
          <div class="card__header-text">
            <h3 class="card__title">Anthony Malima</h3>
            <span class="card__status">Community manager</span>
          </div>          
        </div>
        <p class="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
      </div>
    </a>
  </li>
  </Tilt>    
</ul>
    )
}