import React from 'react';
import Shoe from '../assets/shoe_img.avif';

function Hero() {
  return (
    <>
    <section>
    <div className='hero'>
    <h1 className='title'>YOUR FEET DESERVES <br/>THE BEST</h1>
    <p className='content'>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.</p>
    <div className='hero-button'>
        <button className='shop-button'>Shop now</button>
        <button className='category-button'>Category</button>

    </div>
    </div>
    <img src={Shoe} alt='shoe image' className='shoe-img'/>

    </section>


    </>
  )
}

export default Hero