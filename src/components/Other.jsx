import React from 'react';

function Other({heroProduct, data, heroHandler}) {

    const datalist = data.filter((product) => product.id !== heroProduct.id );

    const clickHandler = (product) => {
        heroHandler(product);

        window.scrollTo({top: 0, behavior: "smooth"});
    }

    return (
    <div>
        <h1 className='text-2xl font-semibold mx-10 md:mx-28 mt-14 md:mt-36'>You Might Also Like</h1>

        <div className='flex flex-col md:flex-row w-fit md:w-auto mx-14 md:mx-28 my-2 md:my-4 items-center md:justify-between md:mb-24'>
            {datalist.map((product) => (
                <div key={product.id} className='mb-9 md:mb-auto cursor-pointer' onClick={() => clickHandler(product)}>
                    <div>
                        <img src={product.images[0]} alt={product.name} className='w-60 mx-auto md:w-80' />
                    </div>
                    <div className='w-72 text-center md:text-left'>
                        <h2 className='text-lg md:text-lg md:mt-2 font-semibold'>{product.name}</h2>
                        <h3 className='text-md font-semibold text-gray-600'>{product.category}</h3>
                        <h2 className='text-md md:text-lg md:mt-2 font-semibold'>MRP : ₹ {product.price}</h2>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Other