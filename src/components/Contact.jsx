import React from 'react'

class Contact extends React.Component {

  render() {
    return (
        <div>
        <div id='contact-me' className='contact'>
            <div className='contact-container' >
            <h2>Get In Touch</h2>
            <div className='contact-specs'>
                <div>
                    <i className="fas fa-envelope"></i>
                    <p>ebectar@gmail.com</p>
                </div>
                <div >
                    <a href='https://github.com/ebectar'><i className="fab fa-github-square"></i>
                    <p>github.com/ebectar</p></a>
                </div>
                <div>
                    <a href='https://www.linkedin.com/in/ebectar/'><i className="fab fa-linkedin"></i>
                    <p>linkedin.com/in/ebectar</p></a>
                </div>
                <div>
                    <a href='https://drive.google.com/file/d/1N1azDqG6SBB4tlm8AdBlaXKxKmSutVph/view?usp=sharing'><i className="far fa-file-pdf"></i>
                    <p>Resume</p></a>
                </div>
            </div>
           
            </div>
        </div>
        {/* <div className='mobileBonus'><p>You're on mobile, so you get a picture of my dog! Congrats</p><img alt='quinn!' src={dog} /></div> */}
        </div>
    );
  }
}

export default Contact