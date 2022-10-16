import React from 'react';
import './navbar.css';
import './Head.css';
import './Phone-img.css'
import './Cards.css'
import './WereReady.css'
import './HarborMiddle.css'
import './HarborBelow.css'



const Harbor = () => {
  return (
    
    <div>

{/* --------------------------------------START-------------------------------- */}

    <div className='navbar'>
      <div className='right'></div>
      <div className='left'>
        <div>Home</div>
        <div>About</div>
        <div>Know Your Risks</div>
        <div>For Work</div>
        <div>Journal</div>
        <div>Shop</div>
      </div>
    </div>

  {/* -----------------------------HEAD ----------------------------- */}

     <div className='head'>
      <div> <h1> Reimagining readiness for life's uncertain moments. </h1> </div>
      <div> <p> The app that makes disaster preparedness easy and accessible. Because sometimes tomorrow doesn't look like today. </p> </div>
      <div className='stores-btn'>
        <div className='app'> <div className='appicon'></div><div> App Store</div> </div>
        <div className='play'> <div className='playicon'></div><div>Play Store</div> </div>
      </div>
     </div>

{/* ---------------------------------------PHONE IMG TEXT------------------------------------- */}

    <div className='phone-img-text'>
      <div className='img'></div>
      <div className='line'></div>

      <div> <h1> The right plan for when things don't go as planned </h1> </div>
      <div> <p> Not prepared? You're not alone. Emergency planning is overwhelming. We work with experts to make the hard parts easy, so you can have confidence when it matters most. </p></div>
    </div>


{/* --------------------------------- CARDS AND LINE -------------------------------- */}

      <div className='cards'>

        <div className='up'>
          <div className='left-up'>
            <div className='center-img'><div className='left-up-img'></div></div>
            <div className='left-up-icon icon-size'></div>
            <div className='h3-text'><h3>Create your family's emergency plan</h3></div>
            <div className='p-text'><p>Our app is tailored to you, your family and your little dog, too. We tell you what you need to stay safe from hurricanes to wildfires and everything in between.</p></div>
          </div>
          <div className='right-up'>
            <div className='right-up-icon icon-size'></div>
            <div className='h3-text'><h3>Access and share important information, even offline</h3></div>
            <div className='p-text'><p>View critical information, family plans, and documents at the push of a button, both online and offline - no worries if cell towers go out.</p></div>
            <div className='center-img'><div className='right-up-img'></div></div>
          </div>
        </div>
        <div className='down'>
          <div className='left-down'>
            <div className='center-img'><div className='down-left-img'></div></div>
            <div className='down-left-icon icon-size'></div>
            <div className='h3-text'>Know exactly what to do when an emergency strikes</div>
            <div className='p-text'>When disasters happen, harbor automatically activates your readiness plan and sends you personalized, on-demand info when it matters the most.</div>
          </div>
          <div className='right-down'>
            <div className='icon-size down-left-icon'></div>
            <div className='h3-text'><h3>Get peace-of-mind with automatic risk assessments</h3></div>
            <div className='p-text'><p>We use data from NOAA, FEMA, and USGS to pinpoint what your household is at risk for. No more guessing.</p></div>
            <div className='center-img'><div className='down-right-img'></div></div>
          </div>
        </div>

      </div>

      <div className='center-img'><div className='line'></div></div>

      {/* ---------------------------------------We're ready, are you--------------------- */}

        
      <div class="Were-ready-are-you">
      <h1>We're ready, are you?</h1>
      <p>Here's what people are saying about harbor.</p>
    </div>


{/* ----------------------COMMENTS CARDS------------------------ */}
    
    <div class="comment-cards">
      <div class="cards-center">
      <div class="comment-cards-wrapper">
        <div class="card-in-text-center">
        <p class="cards-p-text">It's beautiful, easy to use, and is genuinely growing my confidence for crisis preparation.</p>
        <div class="stars-margin">
          <div className='starsicon'></div>
        </div>
        <div class="comment-logo-name-soft">
          <div className='apple-green-logo'></div>
          <div >
          <p>Antonea</p>
          <p>iOS Beta Tester</p>
          </div>
          </div>
        </div>
      </div>
      <div class="comment-cards-wrapper comment-cards-center">
        <div class="card-in-text-center">
        <p class="cards-p-text">This app is something I’ve been hoping for for a while now. So I’m excited to be beta testing it.</p>
        <div class="stars-margin">
          <div className='starsicon'></div>
        </div>
        <div class="comment-logo-name-soft">
          <div className='apple-green-logo'></div>
          <div >
          <p>Kathryn</p>
          <p>iOS Beta Tester</p>
          </div>
          </div>
        </div>
      </div>
      <div class="comment-cards-wrapper">
        <div class="card-in-text-center">
        <p class="cards-p-text">It’s a great app and I can’t wait to use it more and see what all content you add.</p>
        <div class="stars-margin">
          <div className='starsicon'></div>
        </div>
        <div class="comment-logo-name-soft">
          <div className='apple-green-logo'></div>
          <div >
          <p>Gabriel</p>
          <p>iOS Beta Tester</p>
          </div>
          </div>
        </div>
      </div>
    </div>
    </div>

{/* ------------------------MIDDLE------------------------  */}

  <div class="middle">


    <div class="middle-items-center">
      <div class="finger-like-icon">
        <div className='fingericon'></div>
      </div>

      <div class="middle-texts">
        <h1>Our mission is to encourage readiness for all</h1>
        <p>It's our dream that one day, everyday readiness will be quite ordinary - like brushing your teeth.</p>
        <p>A little bit of effort with a big payoff.</p>
      </div>

      <div class="middle-learn-btn">
        <div>Learn more about us</div>
      </div>

      <div class="middle-img">
        <div className='imgmountine'></div>
      </div>

    </div>


  </div>


  {/* <!-- -------------------------BELOW------------------------ --> */}

  <div class="below">
    <div class="below-items-center">
    <div class="Stay-one-step-yellow-wrapper">
      <div class="yellow-wrapper-text">
        <h1>Stay one step ahead with harbor</h1>

          <div class="stores-btn">

            <div class="app-store-btn">
              <div className='applelogo'></div>
              App store
            </div>
    
            <div class="Play-store-btn"> 
            <div className='playlogo'></div>
               Play store
            </div>
            
          </div>
        
      </div>
      <div class="hurricanes-phone-img">
        <div className='phone-img'></div>
      </div>
    </div>
    </div>
    </div>
    
    {/* <!-- ------------------below h1 p text sign in btn --------------- --> */}

    <div class="below-h1-p-text">
      <h1>Join harbor high fives</h1>
      <p>Up high. Down low. Tips on how to find your way through any disaster in the best way possible: together. And be the first in line for Android.</p>
    </div>
    
{/* <!-- ------------------------search wrapper----------- --> */}

    <div class="search-wrapper">
      <div class="search-center">
        <div><input type="text" placeholder="Email address" class="search"/></div>
        <div class="sign-up">Sign Up
        <div className='righticon'></div>
        </div>
      </div>
      <div class="data-privacy"><p>Our commitment to protecting your Data Privacy.</p></div>
    </div>
    
    
    <div class="rectangle"><div class="end-line"></div></div>

{/* <!-- ----------------------end bar------------------------------------------------ --> */}

    <div class="end-bar">
      <div class="logo-end-text">
        <div>
          <div className='harborlogo'></div>
        </div>
        <div class="logo-down-text"><p>© 2020 harbor. All rights reserved</p></div>
        <div class="link-text">
          <div><p>Privacy</p></div>
          <div><p>Terms</p></div>
          <div><p>FAQ</p></div>
          <div><p>Journal</p></div>
          <div><p>Contact</p></div>
          <div><p>Shop</p></div>
        </div>
      </div>

      <div class="end-bar-center">
        <p>Home</p>
        <p>About</p>
        <p>Risks</p>
      </div>

      <div class="end-bar-right">
        <div className='twiter logo-size'></div>
        <div className='insta logo-size'></div>
        <div className='feacbook logo-size'></div>
      </div>
      
      </div>




    </div>


  )
}

export default Harbor