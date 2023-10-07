import React from 'react';
import Image from 'next/image';

const Testimonal=()=>{
    return(
        <div>
            <div className='container pt-16 pb-16 grid-cols-2'>
                <h2 className="font-medium text-2xl pb-4 text-center text-[35px]">Testimonials</h2>
                <div className='grid lg:grid-cols-[300px,1fr] gap-4'>
                    <div className="border border-gray-300 rounded-2xl grid place-items-center p-6 lg:p-0">
                        <div className="text-center flex flex-col items-center gap-1">
                            <Image 
                            className='rounded-full inline-block'
                            src="/user.jpeg"
                            width={80}
                            height={80}
                            alt='dp'
                            />
                            <h2 className='text-gray-500 font-black text-[20px] '>Hasitha Viduranga</h2>
                            <p>CEO & CoFounder</p>
                            <Image
                            className='inline-block py-2'
                            src="/q.png"
                            width={30}
                            height={30}
                            alt='aa'

                            />
                            <p className='max-w-[200px] text-gray-500'>
                                This products are awsome. And it has good results. I think this products are the world best products.
                            </p>
                        </div>
                        
                    </div>

                    <div className='bg-red-600 bg-[url(/back.jpg)] bg-cover h-[500px] rounded-2xl grid place-items-center'>
                        <div className='bg-[#ffffffab] max-w-[270px] sm:min-w-[300px] md:min-w-[500px] rounded-xl py-8 sm:px-8 px-2 grid place-items-center gap-3'>
                            <button className='bg-blackish text-white p-2 rounded-md'>
                                10% DISCOUNT
                            </button>
                            <h2 className='font-extrabold text-2xl text-gray-900]'>
                                Protein Collection
                            </h2>
                            <p className='text-gray-500 text-[20px]'>
                                Starting @ $50 <b>Shop Now</b>
                            </p>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}
export default Testimonal;