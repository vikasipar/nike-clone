import React from 'react';

function Mainright({ product }) {
  const item = product;

  const sizes = ['2.5', '3', '3.5', '4', '4.5', '5', '5.5', '6', '6.6'];

  return (
    <div className='px-10 w-2/5'>
      <h1 className='text-3xl'>{item.name}</h1>
      <h2 className='font-semibold text-lg my-1'>{item.category}</h2>
      <img src="https://th.bing.com/th/id/OIP.QpRG5HMDuyWbKZf3FxWjzQHaBX?pid=ImgDet&rs=1" alt="ratings" className='w-24 my-2 bg-blend-multiply'></img>
      <h2 className='font-semibold text-xl my-1'>MRP : ₹ {item.price}</h2>
      <h2 className='font-semibold text-lg mt-8'>Select Size</h2>
      <p className='grid grid-cols-3 gap-x-1 font-semibold text-lg text-gray-900 my-1'>
        {sizes.map((size) => (
          <button className='w-30 my-1 px-2 py-3 content-center border-2 rounded-lg border-gray-200 hover:border-gray-600'>UK {size} </button>
        ))}
      </p><br/>

      <div>
        <button className='border border-black bg-black text-white hover:border-gray-300 hover:bg-gray-600 w-full py-4 font-semibold text-xl rounded-3xl mb-3'>Add to Bag</button>
        <button className='border-4 border-gray-300 hover:border-black w-full py-4 font-semibold text-xl rounded-3xl mb-3 flex justify-center items-center'>Favorite &nbsp; <img
                        src="https://cdn4.iconfinder.com/data/icons/basic-ui-2-line/32/heart-love-like-likes-loved-favorite-256.png" className='h-6' alt="wishlist-icon" /></button>
      </div>
      <p className='text-lg my-1 text-justify'>{item.description}</p>
      <br/>
      <p>
        <ul className='text-lg my-1 list-disc'>
          <li className='my-1'>Colour Shown: {item.colors}</li>
          <li>Style: {item.style}</li>
        </ul>
      </p>

    </div>
  )
}

export default Mainright