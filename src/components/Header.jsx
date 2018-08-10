import React from 'react';
import video from '../water.mp4'
import arrow from '../logos/arrow.png'

class Header extends React.Component {
  render(){
    return (
        <header className="App-header">
            <video className="header__video"  playsInline autoPlay loop muted>
                <source className='video' src={video} type="video/mp4" />
            </video>
            <div className="name">
            <h3 className='full-stack'>Full Stack Developer</h3>
            <h1 className='ace'>Alyssa Ebert</h1>
            <div>
                <a href='/#about'><img className='arrow'  src={arrow} alt='arrow' /></a>
            </div>
            </div>
        </header>
    )
  }
}

export default Header