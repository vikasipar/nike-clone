import React from 'react';
import Shoelist from './Shoelist';

function Mainleft({ product }) {
  return (
    <div className='w-[70%] mx-auto md:m-auto md:w-3/5'>
      <Shoelist product={product} />
    </div>
  )
}

export default Mainleft