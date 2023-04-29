import React from 'react';
import './Home.css'
import Product from './Product';

function Home() {
  return (
    <div className='home'>
      <div className="home__container">
      <img className='home__image' 
        src="./images/landing-hero.jpg" alt="" />

        <div className="home__row">
          <Product
            id='12332141'
            title='Energize Your Mind: Learn the Art of Mastering Your Thoughts, Feelings and Emotions'
            price={197}
            rating={5}
            image='./images/bestseller-book.jpg'  
          />
          <Product 
            id='57291289'
            title='Google Pixel 7 Pro 5G (Snow, 12GB RAM, 512GB Storage)'
            price={94700}
            rating={5}
            image='./images/google-pixel7pro.jpg'
          />
        </div>
        <div className="home__row">
          <Product 
            id='48950183'
            title='All-New Echo Dot (5th Gen, 2023) | Smart speaker with Alexa|'
            price={5499}
            rating={5}
            image='./images/amazon-echo.jpg'
          />
          <Product 
            id='57292438'
            title='Sony Alpha ILCE-6400M 24.2MP Mirrorless Digital SLR Camera'
            price={103117}
            rating={5}
            image='./images/sony-dslr.jpg'
          />
          <Product
            id='45670989'
            title='Apple Watch Series 8 w/Gold Stainless Steel Case with Gold Milanese Loop'
            price={38900}
            rating={4}
            image='./images/apple-watch.jpg' 
          />
        </div>
        <div className="home__row">
          <Product 
            id='91529470'
            title='Samsung 49-inch(123.8cm) Ultra-Wide Dual QHD Monitor, USB Type-C, HAS, QLED Technology, 1800R Curvature, HDR 400, Flicker Free, Eye Saver Mode, LAN Port, (LS49A950UIWXXL, Black)'
            price={178990}
            rating={4}
            image='./images/ultra-wide-moniter.jpg'
          />
        </div>
      </div>
    </div>
  )
}

export default Home