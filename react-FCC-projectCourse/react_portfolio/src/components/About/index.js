import { faAngular, faCss3, faGit, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React , { useState, useEffect } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders'
import './index.scss';

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        setTimeout(() => {
          return setLetterClass('text-animate-hover')
        }, 3000)
      }, [])
    return (
        <>
            <div className='container about-page'>
            <div className="text-zone">
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={['A', 'b', 'o','u','t',' ','m','e']} id={15} />
                </h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam perferendis ea ipsam at aut cum debitis harum non est voluptatum.</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident necessitatibus temporibus quasi ratione. Cupiditate sunt adipisci ad, quis facere minima temporibus assumenda! Ratione, provident accusamus!</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta et, consequuntur quaerat maiores totam quisquam id nemo vel debitis molestias ab earum a doloribus fuga similique nobis rem non assumenda?</p>
            </div>
            <div className="stage-cube-cont">
                <div className="cubespinner">
                    <div className="face1">
                        <FontAwesomeIcon icon={faAngular} color="#DD0031"/>
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon={faHtml5} color="#F06529"/>
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon icon={faCss3} color="#24A4D9"/>
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4"/>
                    </div>
                    <div className="face5">
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D"/>
                    </div>
                    <div className="face6">
                        <FontAwesomeIcon icon={faGit} color="#EC4D28"/>
                    </div>
                </div>
            </div>
            </div>
            <Loader type='pacman' />
        </>
    );
};

export default About;