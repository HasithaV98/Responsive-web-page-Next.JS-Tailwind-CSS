import React from 'react';
import {BsFacebook,BsLinkedin,BsTwitter,BsInstagram} from 'react-icons/bs';



const HeaderTop=()=>{
    return(
        <div className=' hidden sm:block bg-blackish '>
            <div className='container py-4'>
                <div className='flex justify-between items-center'>
                    <div className="hidden lg:flex gap-1">
                        <div className="header_top_icon_wrapper">
                            <BsFacebook/>
                        </div>
                        <div className="header_top_icon_wrapper">
                            <BsLinkedin/>
                        </div>
                        <div className="header_top_icon_wrapper">
                            <BsTwitter/>
                        </div>
                        <div className="header_top_icon_wrapper">
                            <BsInstagram/>
                        </div>
                        
                    </div>
                    <div className='text-gray-300  text-[15px]  text-center'>Congratulations Grow Up Your Muscles </div>
                        <div className='flex gap-4 '>
                            <select name="langauge" id="langauge" className='text-white text-[12px] w-[70px] bg-blackish' >
                                <option value="English">English</option>
                                <option value="French">French</option>

                            </select>

                        </div>
                </div>
            </div>
        </div>
    )
}
export default HeaderTop;