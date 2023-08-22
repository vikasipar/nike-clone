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
    <div className='flex flex-col-reverse md:flex-row items-center content-center'>
      <div className='flex w-fit md:w-auto md:flex-col mt-2 md:mt-auto'>
        {product.images.map((image) => (
          <img src={image} alt="#" className='w-10 md:w-52 mb-3 rounded-lg cursor-pointer' onMouseOver={mouseHandler} />
        ))}
      </div>
      <div className='ml-5 md:mx-6'>
        <img src={hero} alt="hero-img" className='w-80 md:w-11/12 rounded-lg'/>
      </div>
    </div>
  )
}

export default Shoelist