import React, { useState } from 'react';
import {data} from "../data/data.js";

const Food = () => {
    // console.log(data);
   const [foods,setFoods] = useState(data)

  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
   <h1 className='text-orange-600 font-bold text-4xl text-center '>Top Rated Menu Items</h1>
   <div className=" flex flex-col lg:flex-row justify-between">
    <div > 
        <p className='font-bold text-gray-700 '>Filter Type</p>
        <div className='flex justify-between flex-wrap'>
            <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white '>All</button>
            <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white '>Burger</button>
            <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white '>Pizza</button>
            <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white '>Salads</button>
            <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white '>Chicken</button>
        </div>
    </div>
    <div> 

    <p className='font-bold text-gray-700 '>Filter Price</p>  
    <div className="flex justify-between max-w-[390px]">
        <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white '>Low</button>
        <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white '>Medium</button>
        <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white '>High</button>
        <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white '>Highest</button>
        </div>  
     </div>
    </div>
    <div>
        {foods.map((item,index)=> (
            <div key={index}>
                <img src={item.image} alt={item.name}/>
                <div>
                    <p>{item.image}</p>
                    <p>
                        <span>
                            {item.price}
                        </span>
                    </p>
                </div>
            </div>
        ))}
    </div>
    </div>
  )
}

export default Food