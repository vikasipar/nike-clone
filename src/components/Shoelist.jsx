import React, { useEffect, useState } from 'react';

function Shoelist({ product }) {
    const [hero, setHero] = useState(product.images[0]);

    // used useEffect because the hero's state wasn't updating automatically it was showing previous hero image

    useEffect(() => {
      setHero(product.images[0])
    },[product]);
    
    function mouseHandler(e){
      setHero(e.target.src);
    }
  return (
    <div className='flex items-center'>
      <div>
        {product.images.map((image) => (
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