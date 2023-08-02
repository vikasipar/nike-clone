import React from 'react';
import Shoelist from './Shoelist';
import { data } from '../data';

function Mainleft() {
  return (
    <div className='w-3/5'>
      <Shoelist data={data} />
    </div>
  )
}

export default Mainleft