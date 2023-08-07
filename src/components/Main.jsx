import React from 'react';
import Mainleft from './Mainleft';
import Mainright from './Mainright';

function Main({ product }) {
  return (
    <div className='mx-32 my-10 flex items-center gap-2'>
        <Mainleft product={product} />
        <Mainright product={product} />
    </div>
  )
}

export default Main;