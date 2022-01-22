import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './card.css'
import Tilt from 'react-parallax-tilt';
import photos1 from "./photos/dq.png";
import photos2 from "./photos/dq.png"
import photos4 from "./photos/dq.png";



export default function Card () {
    
    return(

<ul class="cards">
<Tilt>
  <li>
    <div class="card">
      <img src={photos1} class="card__image" alt="Ceo of World protocol : Joffrey" />
      <div class="card__overlay">
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                
          <div class="card__header-text">
            <h3 class="card__title">Weertz Joffrey</h3>
            <span class="card__status">FOUNDER & CEO</span>
          </div>          
        </div>
        <p class="card__description">Self taught Tech Visionary And Full-Stack developper  </p>
        <div class="card__footer">
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <GitHubIcon sx={{color:'black'}} />
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon sx={{color:'black'}} />
          </a>
        </div>
      </div>
    </div>
  </li>
  </Tilt> 

  <Tilt>
  <li>
    <div class="card">
      <img src={photos2} class="card__image" alt="Security advisor of world protocol : Samuel" />
      <div class="card__overlay">
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                 
          <div class="card__header-text">
            <h3 class="card__title">Samuel dhayeng</h3>
            <span class="card__status">HEAD OF TECHNOLOGY</span>
          </div>          
        </div>
        <p class="card__description">Tech Entrepreneur. Alibaba IA research enginer, Security advisor</p>
        <div class="card__footer">
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <GitHubIcon sx={{color:'black'}} />
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon sx={{color:'black'}} />
          </a>
        </div>
      </div>
    </div>
  </li>
  </Tilt> 


  <Tilt>
  <li>
    <div class="card">
      <img src={photos4} class="card__image" alt="Community manager of world protocol : Malima" />
      <div class="card__overlay">
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                 
          <div class="card__header-text">
            <h3 class="card__title">Anthony Malima</h3>
            <span class="card__status">Community manager</span>
          </div>          
        </div>
        <p class="card__description">Community manager, devOPS devlopper, SysAdmin  </p>
        <div class="card__footer">
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <GitHubIcon sx={{color:'black'}} />
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon sx={{color:'black'}} />
          </a>
        </div>
      </div>
    </div>
  </li>
  </Tilt>    
</ul>
    )
}