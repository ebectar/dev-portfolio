import React, { Component } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import github from '../logos/github.png'
import queue from '../projects/queue-overflow.png'
import tried from '../projects/have-you-tried.png'
import music from '../projects/MusicPlayland.png'
import origins from '../projects/super-origins.png'
import raid from '../projects/raid-my-pantry.png'

AOS.init();
class Projects extends Component {
  render() {
    return (
      <div id='project-nav' className='projects-wrapper'>
        <h2>Projects</h2>
        <div className='projects-list' >
        <div className='project-container'>
          <div data-aos-easing="ease-in-sine" data-aos="fade-up"  id='outer-box'>
            {/* <a href='https://github.com/' > */}
              <img  className='project-card' src={raid} alt='Raid My Pantry' />
              <div id='inner-box'>
                  <ul>
                  <h5>Raid My Pantry</h5>
                  <li>Vue.js</li>
                  <li>JavaScript</li>
                  <li>Axios</li>
                  <li>Vuetify</li>
                  <li>Node.js</li>
                  <li>Knex.js</li>
                  <li>Express</li>
                  <li>PostgreSQL</li>
                  <li>CSS</li>
                </ul>
              </div>
            {/* </a> */}
          </div>
            {/* <a href='https://github.com/'> */}
              {/* <img className='github' src={github} alt='github' /> */}
            {/* </a> */}
          </div>
        <div className='project-container'>
          <div data-aos-easing="ease-in-sine" data-aos="fade-up"  id='outer-box'>
            <a href='https://have-you-tried.firebaseapp.com' >
              <img className='project-card' src={tried} alt='have-you-tried' />
              <div id='inner-box'>
                  <ul>
                  <h5>Have You Tried..?</h5>
                  <li>React.js</li>
                  <li>JavaScript</li>
                  <li>Knex.js</li>
                  <li>Express</li>
                  <li>PostgreSQL</li>
                  <li>CSS</li>
                </ul>
              </div>
            </a>
          </div>
            <a href='https://github.com/ebectar/have-you-tried'>
              <img className='github' src={github} alt='github' />
            </a>
          </div>
          <div data-aos-easing="ease-in-sine" data-aos="fade-up" data-aos-anchor-placement="center-center" className='project-container'>
          <div id='outer-box'>
            <a href='https://queue-overflow.firebaseapp.com/'>
              <img className='project-card' src={queue} alt='queue' />
              <div id='inner-box'>
                <ul>
                  <li>React.js</li>
                  <li>JavaScript</li>
                  <li>Highlight.js</li>
                  <li>Semantic UI</li>
                  <li>Knex.js</li>
                  <li>Express</li>
                  <li>PostgreSQL</li>
                  <li>CSS</li>
                </ul>
              </div>
            </a>
          </div>
            <a href='https://github.com/g-overflow/gflow-frontend'>
              <img className='github' src={github} alt='github' />
            </a>
          </div>
          <div data-aos-easing="ease-in-sine" data-aos="fade-up" data-aos-anchor-placement="center-center" className='project-container'>
          <div id='outer-box'>
            <a href='https://super-origins.firebaseapp.com/'>
              <img className='project-card' src={origins} alt='super origins' />
              <div id='inner-box'>
                  <ul>
                  <li>JavaScript</li>
                  <li>Semantic UI</li>
                  <li>Fetch API</li>
                  <li>CSS</li>
                </ul>
              </div>
            </a>
          </div>
            <a href='https://github.com/ebectar/super-origins-vanilla'>
              <img className='github' src={github} alt='github' />
            </a>
          </div>
          <div data-aos-easing="ease-in-sine" data-aos="fade-up" data-aos-anchor-placement="center-top" className='project-container'>
          <div id='outer-box'>
            <a href='https://github.com/S-Romberg/music-playland'>
              <img className='project-card' src={music} alt='music' />
              <div id='inner-box'>
                <ul>
                  <li>React.js</li>
                  <li>JavaScript</li>
                  <li>CSS</li>
                </ul>
              </div>
            </a>
          </div>
            <a href='https://github.com/S-Romberg/music-playland'>
              <img className='github' src={github} alt='github' />
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Projects