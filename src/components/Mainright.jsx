import React from 'react';

function Mainright({ product }) {
  const item = product;

  const sizes = ['2.5', '3', '3.5', '4', '4.5', '5', '5.5', '6', '6.6'];

  return (
    <div className='md:px-10 w-[80%] md:w-2/5 mx-[20%] md:mx-auto'>
      <h1 className='font-semibold md:font-normal ml-12 md:ml-auto text-xl md:text-3xl'>{item.name}</h1>
      <h2 className='md:font-semibold text-md md:text-lg my-1 ml-16 md:ml-auto'>{item.category}</h2>
      <img src="https://th.bing.com/th/id/OIP.QpRG5HMDuyWbKZf3FxWjzQHaBX?pid=ImgDet&rs=1" alt="ratings" className='w-20 md:w-24 my-2 bg-blend-multiply ml-20 md:ml-auto'></img>
      <h2 className='font-semibold text-lg md:text-xl my-1 ml-12 md:ml-auto'>MRP : ₹ {item.price}</h2>
      <h2 className='font-semibold text-lg mt-8'>Select Size</h2>
      <p className='w-fit md:w-auto grid grid-cols-3 gap-x-4 md:gap-x-1 font-semibold text-sm md:text-lg text-gray-900 md:my-1'>
        {sizes.map((size) => (
          <button className='w-20 md:w-32 my-1 px-1 md:px-2 py-2 md:py-3 content-center border-2 rounded-lg border-gray-200 hover:border-gray-600'>UK {size} </button>
        ))}
      </p><br/>

      <div className='flex w-[70%] md:w-auto mx-[7%] md:mx-auto justify-around md:block'>
        <button className='w-28 md:w-auto border border-black bg-black text-white hover:border-gray-300 hover:bg-gray-600 md:w-full px-2 mx-1 md:mx-auto py-2 md:py-4 font-semibold text-sm md:text-xl rounded-lg md:rounded-3xl mb-3'>Add to Bag</button>
        <button className='w-28 md:w-auto border-4 border-gray-300 hover:border-black md:w-full px-1 py-1 md:py-2 md:py-4 mx-1 md:mx-auto font-semibold text-sm md:text-xl rounded-lg md:rounded-3xl mb-3 flex justify-center items-center'>Favorite &nbsp; <img
                        src="https://cdn4.iconfinder.com/data/icons/basic-ui-2-line/32/heart-love-like-likes-loved-favorite-256.png" className='h-4 md:h-6' alt="wishlist-icon" /></button>
      </div>
      <p className='w-64 md:w-auto md:text-lg md:my-1 text-justify'>{item.description}</p>
      <br/>
      <p>
        <ul className='w-64 md:w-auto text-lg md:my-1 list-disc'>
          <li className='my-1'>Colour Shown: {item.colors}</li>
          <li>Style: {item.style}</li>
        </ul>
      </p>

    </div>
  )
}

export default Mainright