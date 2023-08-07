import React from 'react';

const navlist = ["New & Featured", "Men", "Women", "Kids", "Sale", "SNKRS"];

function Navlist() {
  return (
    <ul className='flex font-semibold justify-around text-lg gap-x-6'>
      {navlist.map((item, index) => (
        <li key={index} className='cursor-pointer border-b-4 pb-2 border-white transition-transform hover:border-b-4 hover:border-black'>
          {item}
        </li>
      ))}
    </ul>
  );
}

export default Navlist;
