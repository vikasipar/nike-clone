import React from 'react';
import Shoelist from './Shoelist';

function Mainleft({ product }) {
  return (
    <div className='w-3/5'>
      <Shoelist product={product} />
    </div>
  )
}

export default Mainleft