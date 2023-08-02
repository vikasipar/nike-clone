import React from 'react';
import Mainleft from './Mainleft';
import Mainright from './Mainright';

function Main() {
  return (
    <div className='mx-52 my-12 flex items-center gap-2'>
        <Mainleft />
        <Mainright />
    </div>
  )
}

export default Main;