import React, { Component } from 'react';

import js from '../logos/js.png'
import css from '../logos/css.png'
import html from '../logos/html.png'
import cypress from '../logos/cypress.png'
import express from '../logos/express.png'
import node from '../logos/node.png'
import postgresql from '../logos/postgresql.png'
import react from '../logos/react.png'
import redux from '../logos/redux.png'
import vue from '../logos/vue.png'
import stripe from '../logos/stripe.png'
import knex from '../logos/knex.png'

class Skills extends Component {
  render() {
    return (
        <div className='skills'>
            <h2>Technologies</h2>
            <div className='skills-list'>
                <div>
                    <img className='skill' src={react} alt='logo'/>
                </div>
                <div>
                    <img className='skill' src={js} alt='logo'/>
                </div>
                <div>
                    <img className='skill' src={css} alt='logo'/>
                </div>
                <div>
                    <img className='skill' src={html} alt='logo'/>
                </div>
                <div>
                    <img className='skill' src={redux} alt='logo'/>
                </div>
                <div>
                    <img className='skill' src={vue} alt='logo'/>
                </div>
                <div>
                    <img className='skill' src={node} alt='logo'/>
                </div>
                <div>
                    <img className='skill' src={postgresql} alt='logo'/>
                </div>
                <div>
                    <img className='skill' src={knex} alt='logo'/>
                </div>
                <div>
                    <img className='skill' src={stripe} alt='logo'/>
                </div>
                <div>
                    <img className='skill' src={cypress} alt='logo'/>
                </div>
                <div>
                    <img className='skill' src={express} alt='logo'/>
                </div>
            </div>
        </div>

    );
  }
}

export default Skills;