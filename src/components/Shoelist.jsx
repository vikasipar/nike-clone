import React, { useState } from 'react';
import {data} from '../data';


function Shoelist() {
    const imgarr = data[0].images;
    const [hero, setHero] = useState(imgarr[0]);
    function mouseHandler(e){
      setHero(e.target.src);
    }
  return (
    <div className='flex items-center'>
      <div>
        {imgarr.map((image) => (
          <img src={image} alt="#" className='w-52 mb-3 rounded-lg cursor-pointer' onMouseOver={mouseHandler} />
        ))}
      </div>
      <div className='mx-6'>
        <img src={hero} alt="hero-img" className='w-11/12 rounded-lg'/>
      </div>
    </div>
  )
}

export default Shoelist