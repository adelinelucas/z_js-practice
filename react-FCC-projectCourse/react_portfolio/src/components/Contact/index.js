import React, {useEffect, useRef, useState} from 'react';
import './index.scss';
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters';
import emailjs from '@emailjs/browser';
import { MapContainer, Marker, TileLayer, Popup } from 'react-leaflet';

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const refForm = useRef();

    useEffect(() => {
        setTimeout(() => {
          return setLetterClass('text-animate-hover')
        }, 4000)
      }, []);

    const sendEmail = (e) =>{
        e.preventDefault();
        emailjs
            .sendForm('gmail','template_4895oxe',refForm.current,'ESZEU47GZExd4F3dxK0bP')
            .then(
                ()=>{alert('Message successfully sent!');
                    window.location.reload(false)
                },
                ()=>{
                    alert('Failed to send the message, please try again')
                }
            )
    }

    return (
        <>
            <div className='container contact-page'>
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArray={['C','o','n','t','a','c','t',' ','m','e']} index={15} />
                    </h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum ut facilis exercitationem, ratione expedita sit culpa repellat similique et rem! Reprehenderit exercitationem architecto totam laudantium?</p>
                    <div className="contact-form">
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type="text" name="name" placeholder='Name' required/>
                                </li>
                                <li className='half'>
                                    <input type="email" name="email" placeholder='Email' required />
                                </li>
                                <li className=''>
                                    <input type="text" name="subject" placeholder='Subject' required />
                                </li>
                                <li>
                                    <textarea name="message" placeholder='Message' required></textarea>
                                </li>
                                <li><input type="submit" value="SEND"  className='flat-button'/></li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className="info-map">
                    Adeline LUCAS 
                    <br /> 
                    France, 
                    Henri Barbusse,  <br/> 
                    93 300 Aubervilliers <br/>
                    <span> test@gmail.com</span>
                </div>
                <div className="map-wrap">
                    <MapContainer center={[44.96366, 19.61045]} zoom={13} >
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[44.96366, 19.61045]}>
                            <Popup>Sloba lives here, come over for a cup of coffee :)</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    );
};

export default Contact;