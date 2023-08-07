import React from 'react';

function Other({heroProduct, data, heroHandler}) {

    const datalist = data.filter((product) => product.id !== heroProduct.id );

    const clickHandler = (product) => {
        heroHandler(product);

        window.scrollTo({top: 0, behavior: "smooth"});
    }

    return (
    <div>
        <h1 className='text-xl font-semibold mx-28 mt-36'>You Might Also Like</h1>

        <div className='flex mx-28 my-4 items-center gap-6 mb-24'>
            {datalist.map((product) => (
                <div key={product.id} className='cursor-pointer' onClick={() => clickHandler(product)}>
                    <div>
                        <img src={product.images[0]} alt={product.name} className='w-82' />
                    </div>
                    <div>
                        <h2 className='text-lg mt-2 font-semibold'>{product.name}</h2>
                        <h3 className='text-md font-semibold text-gray-600'>{product.category}</h3>
                        <h2 className='text-lg mt-2 font-semibold'>MRP : ₹ {product.price}</h2>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Other