import React from 'react';
import Navlist from './Navlist';

function Navbar() {

  return (
    <div>
        {/* top nav */}
        <div className="flex items-center px-24 justify-between py-2 bg-gray-100">
            <div>
                <img src="https://th.bing.com/th?id=OSK.ae82dd642125cef3def13af7e011d321&w=80&h=80&c=7&rs=1&qlt=80&o=6&dpr=1.3&pid=SANGAM" alt='jordan-logo' className='w-6 mix-blend-multiply cursor-pointer' />
            </div>
            <div>
                    <ul className="flex justify-around gap-x-5 font-bold text-xs">
                        <li className='cursor-pointer'>Find a Store</li>
                        <li>|</li>
                        <li className='cursor-pointer'>Help</li>
                        <li>|</li>
                        <li className='cursor-pointer'>Join Us</li>
                        <li>|</li>
                        <li className='cursor-pointer'>Sign In</li>
                    </ul>
                </div>
        </div>
        {/* bottom nav */}
        <div className="flex items-center px-20 justify-between">
            <div>
            <img
                        src="https://th.bing.com/th?id=OSK.f4fada2f6a09f46ff7a39e3ea089bac4&w=240&h=145&o=6&dpr=1.3&pid=SANGAM" className='w-24' alt="nike-logo" />
            </div>
            <div>
                <Navlist />
            </div>
            <div className='flex font-semibold justify-around text-lg gap-x-5 items-center'>
            <input type="text" placeholder="search" className='bg-gray-100 px-9 py-2 w-48 rounded-3xl focus:border-white focus:bottom-0 focus:bg-gray-200' />
                    <img
                        src="https://cdn4.iconfinder.com/data/icons/basic-ui-2-line/32/heart-love-like-likes-loved-favorite-256.png" className='h-8' alt="wishlist-icon" />
                    <img src="https://cdn1.iconfinder.com/data/icons/galaxy-open-line-i/200/app-store-512.png" className='h-12' alt="cart-icon" />
            </div>
        </div>
    </div>
  )
}

export default Navbar