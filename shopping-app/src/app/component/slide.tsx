import React from 'react';

interface propsType{
    img:string;
    title:string;
}
const Slide:React.FC<propsType>=({img,title})=>{
    return(
        <div className='border-none outline-none relative h-[400px] '>
            <div className='absolute left-[30px] md:left-[70px] max-w-[250px] sm:max-w-[350px] top-[50%] -translate-y-[50%] space-y-2 lg:space-y-4 bg-[#ffffff81] sm:bg-transparent p-4 sm:p-0 rounded-lg sm:rounded-none '>
                <h2 className='text-white text-[26px] md:text-[30px] lg:text-[44px] font-bold leading-[1.2]'>{title}</h2>

                <div className='bg-[green] text-white text-[14px] md:text-[16px] p-2 px-4 rounded-lg inline-block cursor-pointer hover:bg-blackish'>
                Shop Now

            </div>
            </div>
            
            <img
            className="w-[100%] h-[400px] md:h-auto rounded-xl object-cover object-right md:object-left-bottom"
            src={img}
            alt='banner'
            height={400}
            width={400}
            />
        </div>
    )
}
export default Slide;