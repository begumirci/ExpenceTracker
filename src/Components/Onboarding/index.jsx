import React, { useState } from 'react'
import './onboarding.css';
import img1 from './onboard-img/1.png';
import img2 from './onboard-img/2.png';
import img3 from './onboard-img/3.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Button, { Button2 } from '../../Design/Button';
import { Link } from 'react-router-dom';
import LauncScreen from './LauncScreen';

export default function Onboarding() {
    const images = [
        {
            id:1,
            img: img1,
            title:'Gain total control of your money',
            descrip:'Become your own money manager and make every cent count'
        },
        {
            id: 2,
            img: img2,
            title:'Planning ahead',
            descrip: 'Setup your budget for each categoryso you in control'
        },
        {
            id: 3,
            img: img3,
            title: 'Know where your money goes',
            descrip: 'Track your transaction easily, with categories and financial report'
        },
        
    ]
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <>
       <LauncScreen />
        <div className=" carosel-cards">

            <Slider {...settings}>
                {
                    images.map((x, i) => (
                        <div className="carosel-card" key={i}>
                            <img className='carosel-img' src={x.img} />
                                <h1 className="carosel-title">{x.title}</h1>
                                <div className="carosel-descrip">{x.descrip}</div>
                        </div>
                    ))
                }
            </Slider>
            <div className='btns'>
                <Link to='/signup'><Button title={'Sign Up'} /></Link>
                <Link to='/login'><Button2 title={'Login'} /></Link>
            </div>
            
        </div>
        </>
)}

   

