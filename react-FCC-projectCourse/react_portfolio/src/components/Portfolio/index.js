import React, {useEffect, useState} from 'react';
import './index.scss';
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters';
import portfolioData from '../../data/portfolio.json';

const Portfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    console.log(portfolioData)
    useEffect(() => {
        const timer = setTimeout(() => {
          return setLetterClass('text-animate-hover')
        }, 3000);
        return ( ) =>{
            clearTimeout(timer)
        }
      }, [])

    const renderPortfolio =(portfolio) =>{
        return(
            <div className='images-container'>
                {
                    portfolio.map((project, idx) => {
                        return (
                            <div className='image-box' key={idx}>
                                <img className='portfolio-image' src={project.cover} alt={project.title}/>
                                <div className='content'>
                                    <p className='title'>{project.title}</p>
                                    <h4 className='description'> {project.description}</h4>
                                    <button className='btn' onClick={()=> window.open(project.url)}>View</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
    return (
        <>
            <div className='container portfolio-page'>
                <h1 className='page-title'>
                    <AnimatedLetters letterClass={letterClass} strArray={'Portfolio'.split('')} id={15} />
                </h1>
                <div>
                    {renderPortfolio(portfolioData.portfolio)}
                </div>
            </div>
            <Loader type='pacman'/>
        </>
    );
};

export default Portfolio;