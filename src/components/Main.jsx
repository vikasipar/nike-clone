import React from 'react';
import Mainleft from './Mainleft';
import Mainright from './Mainright';

function Main({ product }) {
  return (
    <div className='mx-1 md:mx-32 my-3 md:my-10 md:flex items-center md:gap-2'>
        <Mainleft product={product} />
        <Mainright product={product} />
    </div>
  )
}

export default Main;