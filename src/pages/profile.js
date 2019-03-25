import React, { Component } from 'react'
import headshot from './images/headshot.jpg';
import { Layout } from "../components";
import Mountain from "./images/Mountain.png"
import Average from "./images/Average.png"
import Grade from "./images/Grade.png"
import Ranking from "./images/Ranking.png"
import Time from "./images/Time.png"
import Counting from "./images/Counting.png"


class IndexPage extends Component {
  render() {
    return (
      <Layout isLoggedon="true" >
        <div className="profil">
        <div className="user">

<div className="headshot">
<img src={headshot} alt="headshot"/>
</div>
<h2>Matko Zlatko</h2>
<p className="mail">matko.zlatko@fesb.hr<br/>
MALE</p>

<div className="podaci">
      <div>
        <p> Age</p>
        <p className="bold"> 25 years</p>
      </div>
        
      <div>
        <p> Class</p>
        <p className="bold"> Amateur</p>
      </div>

      <div>
        <p> Country</p>
        <p className="bold"> Croatia</p>
      </div>
</div>

<div className="titula">
<p> Highest grade climbed</p>
<div className="sedmica">7c+</div>
</div>

</div>
            <div className="tabs">
 
 
 <input type="radio" id="tab1" name="tab-control" defaultChecked/>
 
<input type="radio" id="tab2" name="tab-control"/>
 
<input type="radio" id="tab3" name="tab-control"/>  

<ul>
 
 <li title="Features"><label htmlFor="tab1" role="button"><svg viewBox="0 0 24 24">
<path d="M14,2A8,8 0 0,0 6,10A8,8 0 0,0 14,18A8,8 0 0,0 22,10H20C20,13.32 17.32,16 14,16A6,6 0 0,1 8,10A6,6 0 0,1 14,4C14.43,4 14.86,4.05 15.27,4.14L16.88,2.54C15.96,2.18 15,2 14,2M20.59,3.58L14,10.17L11.62,7.79L10.21,9.21L14,13L22,5M4.93,5.82C3.08,7.34 2,9.61 2,12A8,8 0 0,0 10,20C10.64,20 11.27,19.92 11.88,19.77C10.12,19.38 8.5,18.5 7.17,17.29C5.22,16.25 4,14.21 4,12C4,11.7 4.03,11.41 4.07,11.11C4.03,10.74 4,10.37 4,10C4,8.56 4.32,7.13 4.93,5.82Z"/>
</svg><br/><span>Achivements</span></label></li>

  <li title="Delivery Contents"><label htmlFor="tab2" role="button"><svg viewBox="0 0 20 20">
  <path d="M18.303,4.742l-1.454-1.455c-0.171-0.171-0.475-0.171-0.646,0l-3.061,3.064H2.019c-0.251,0-0.457,0.205-0.457,0.456v9.578c0,0.251,0.206,0.456,0.457,0.456h13.683c0.252,0,0.457-0.205,0.457-0.456V7.533l2.144-2.146C18.481,5.208,18.483,4.917,18.303,4.742 M15.258,15.929H2.476V7.263h9.754L9.695,9.792c-0.057,0.057-0.101,0.13-0.119,0.212L9.18,11.36h-3.98c-0.251,0-0.457,0.205-0.457,0.456c0,0.253,0.205,0.456,0.457,0.456h4.336c0.023,0,0.899,0.02,1.498-0.127c0.312-0.077,0.55-0.137,0.55-0.137c0.08-0.018,0.155-0.059,0.212-0.118l3.463-3.443V15.929z M11.241,11.156l-1.078,0.267l0.267-1.076l6.097-6.091l0.808,0.808L11.241,11.156z"/>		
 </svg><br/><span>Goals</span></label></li>

  <li title="Shipping"><label htmlFor="tab3" role="button"><svg viewBox="0 0 20 20">
  <path d="M17.431,2.156h-3.715c-0.228,0-0.413,0.186-0.413,0.413v6.973h-2.89V6.687c0-0.229-0.186-0.413-0.413-0.413H6.285c-0.228,0-0.413,0.184-0.413,0.413v6.388H2.569c-0.227,0-0.413,0.187-0.413,0.413v3.942c0,0.228,0.186,0.413,0.413,0.413h14.862c0.228,0,0.413-0.186,0.413-0.413V2.569C17.844,2.342,17.658,2.156,17.431,2.156 M5.872,17.019h-2.89v-3.117h2.89V17.019zM9.587,17.019h-2.89V7.1h2.89V17.019z M13.303,17.019h-2.89v-6.651h2.89V17.019z M17.019,17.019h-2.891V2.982h2.891V17.019z"/>
  </svg><br/><span>Statistics</span></label></li>  

 </ul>
 
 <div className="slider"><div className="indicator"></div></div>
 <div className="content">
   <section>
     <h2>Achivements</h2>
     
     <table class="tg">
  <tr>
    <th class="tg-0lax">Where</th>
    <th class="tg-0lax">Name</th>
    <th class="tg-0lax">Grade</th>
    <th class="tg-0lax">Length</th>
    <th class="tg-0lax">Date</th>
    <th class="tg-0lax">Tries<br/></th>
  </tr>
  <tr>
    <td class="tg-0lax">Marjan<br/></td>
    <td class="tg-0lax">Gracija</td>
    <td class="tg-0lax">6b</td>
    <td class="tg-0lax">15m</td>
    <td class="tg-0lax">06-06-2018</td>
    <td class="tg-0lax">Flash</td>
  </tr>
  <tr>
    <td class="tg-0lax">Marjan<br/></td>
    <td class="tg-0lax">Marinero</td>
    <td class="tg-0lax">6a+</td>
    <td class="tg-0lax">7m</td>
    <td class="tg-0lax">02-02-2017</td>
    <td class="tg-0lax">2</td>
  </tr>
  <tr>
    <td class="tg-0lax">Marjan<br/></td>
    <td class="tg-0lax">Livo od cempresa<br/></td>
    <td class="tg-0lax">5c</td>
    <td class="tg-0lax">11m</td>
    <td class="tg-0lax">02-02-2017</td>
    <td class="tg-0lax">Onsight</td>
  </tr>
  <tr>
    <td class="tg-0lax">Tugare<br/></td>
    <td class="tg-0lax">Burovno</td>
    <td class="tg-0lax">6b</td>
    <td class="tg-0lax">20m</td>
    <td class="tg-0lax">11-10-2018</td>
    <td class="tg-0lax">3</td>
  </tr>
  <tr>
    <td class="tg-0lax">Markezina greda</td>
    <td class="tg-0lax">Kalabrasa</td>
    <td class="tg-0lax">5b</td>
    <td class="tg-0lax">9m</td>
    <td class="tg-0lax">12-12-2018</td>
    <td class="tg-0lax">Flash</td>
  </tr>
  <tr>
    <td class="tg-0lax">Bobanova greda<br/></td>
    <td class="tg-0lax">Bumba</td>
    <td class="tg-0lax">7c</td>
    <td class="tg-0lax">16m</td>
    <td class="tg-0lax">01-20-2019</td>
    <td class="tg-0lax">4</td>
  </tr>
  <tr>
    <td class="tg-0lax">Markezina Greda<br/></td>
    <td class="tg-0lax">Dimljak<br/></td>
    <td class="tg-0lax">6a<br/></td>
    <td class="tg-0lax">19m</td>
    <td class="tg-0lax">02-03-2019</td>
    <td class="tg-0lax">Flash</td>
  </tr>
  <tr>
    <td class="tg-0lax">Brela</td>
    <td class="tg-0lax">Sveti Ilija</td>
    <td class="tg-0lax">7c</td>
    <td class="tg-0lax">8m</td>
    <td class="tg-0lax">04-04-2018</td>
    <td class="tg-0lax">2</td>
  </tr>
</table>

     </section>
     <section>
       
 <h2>Gaols</h2>
   
 <table class="tg">
  <tr>
    <th class="tg-0lax">Where</th>
    <th class="tg-0lax">Name</th>
    <th class="tg-0lax">Grade</th>
    <th class="tg-0lax">Length</th>
  </tr>
  <tr>
    <td class="tg-0lax">Marjan<br/></td>
    <td class="tg-0lax">Gracija</td>
    <td class="tg-0lax">6b</td>
    <td class="tg-0lax">15m</td>
  </tr>
  <tr>
    <td class="tg-0lax">Marjan<br/></td>
    <td class="tg-0lax">Marinero</td>
    <td class="tg-0lax">6a+</td>
    <td class="tg-0lax">7m</td>
  </tr>
  <tr>
    <td class="tg-0lax">Marjan<br/></td>
    <td class="tg-0lax">Livo od cempresa<br/></td>
    <td class="tg-0lax">5c</td>
    <td class="tg-0lax">11m</td>
  </tr>
  <tr>
    <td class="tg-0lax">Tugare<br/></td>
    <td class="tg-0lax">Burovno</td>
    <td class="tg-0lax">6b</td>
    <td class="tg-0lax">20m</td>
  </tr>
  <tr>
    <td class="tg-0lax">Markezina greda</td>
    <td class="tg-0lax">Kalabrasa</td>
    <td class="tg-0lax">5b</td>
    <td class="tg-0lax">9m</td>
  </tr>
  <tr>
    <td class="tg-0lax">Bobanova greda<br/></td>
    <td class="tg-0lax">Bumba</td>
    <td class="tg-0lax">7c</td>
    <td class="tg-0lax">16m</td>
  </tr>
  <tr>
    <td class="tg-0lax">Markezina Greda<br/></td>
    <td class="tg-0lax">Dimljak<br/></td>
    <td class="tg-0lax">6a<br/></td>
    <td class="tg-0lax">19m</td>
  </tr>
  <tr>
    <td class="tg-0lax">Brela</td>
    <td class="tg-0lax">Sveti Ilija</td>
    <td class="tg-0lax">7c</td>
    <td class="tg-0lax">8m</td>
  </tr>
</table>
   
   </section>
       <section>
         <h2>Statistics</h2>
          <div className="stats">

          <div className="slikice">
          <img src={Grade} alt="grade"/>
          <h3 style={{color:'rgb(128,255,128)'}}>7c+</h3>
          <p>Highest grade climbed</p>
          </div>

          <div className="slikice">
          <img src={Counting} alt="counting"/>
          <h3 style={{color:'rgb(255,128,192)'}}>52</h3>
          <p>Total number of routes climbed</p>
          </div>

          <div className="slikice">
          <img src={Average} alt="average"/>
          <h3 style={{color:'rgb(255,128,128)'}}>6a</h3>
          <p>Average grade total</p>
          </div>

          <div className="slikice">
          <img src={Mountain} alt="mountain"/>
          <h3 style={{color:'rgb(0,255,128)'}}>Marjan</h3>
          <p>Most climbed on</p>
          </div>

          <div className="slikice">
          <img src={Ranking} alt="ranking"/>
          <h3 style={{color:'rgb(128,255,255)'}}>169</h3>
          <p>Global Ranking</p>
          </div>

          <div className="slikice">
          <img src={Time} alt="time"/>
          <h3 style={{color:'rgb(0,128,255)'}}>3 Days</h3>
          <p>Last route climbed ago</p>
          </div>
      </div>
      
        </section>

</div>

</div>
 
        </div>
      </Layout>
    )
  }
}

export default IndexPage