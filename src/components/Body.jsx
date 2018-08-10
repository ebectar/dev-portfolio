import React, {Component} from 'react';

class Header extends Component {
  render() {
    return (
      <div id='about' name='about' className='bio'>
        <h2>Hello There!</h2>
        <p>I am a Full Stack Web Developer with a background in graphic design. 
          After spending 6 years in the design field, I found myself being drawn to web design 
          and from there finding a passion in developing and creating web applications from scratch. </p>

        <p>I spent a year teaching myself HTML, CSS and JavaScript before attending Galvanize’s Web Development Immersive program. 
        With over 1,000 hours of intensive coding, I learned React.js, Vue.js, Vuex, Node.js, Express.js, Knex.js, and PostgreSQL.In addition to these technologies, I developed a love for creating a beautiful, functional web and Agile methodologies. I am passionate about creating a beautiful, functional web. 
        I am interested in pushing the bounds of my creativity, learning new technologies and exploring new problem solving strategies.
        <br />
        <br />
        I am excited to bring my interest and new skills to a development career and am currently seeking new opportunites. </p>
      </div>

    );
  }
}

export default Header