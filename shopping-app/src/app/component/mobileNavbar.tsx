import React from 'react';
import{AiOutlineHome,AiOutlineShopping,AiOutlineHeart,AiOutlineAppstoreAdd, AiOutlineMenu} from 'react-icons/ai'

const MobileNavBar=()=>{
    return(
        <div className='lg:hidden fixed bottom-0 w-full bg-white left-[50%] -translate-x-[50%] max-w-[500px] mob_navbar px-8'>
            <div className="flex justify-between text-[20px] py-2">
            <AiOutlineMenu/>
            <div className='relative'>
                <AiOutlineShopping/>
                <div className='bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1'>1</div>

            </div>
            <AiOutlineHome/>
            <div className='relative'>
                <AiOutlineHeart/>
                <div className='bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px]  text-white grid place-items-center translate-x-1 -translate-y-1'>1</div>
            </div>
            <AiOutlineAppstoreAdd/>
            </div>

        </div>
    )
}
export default MobileNavBar;