import Link from 'next/link';
import React from 'react';

const Navbar=()=>{
    return(
        <div className='hidden lg:block  bg-black'>
            <div className="container">
                <div className="flex w-fit gap-10 mx-auto font-medium py-4 text-white">
                    <Link href="#" className='navbar_link relative'>
                        HOME
                    </Link>
                    <Link href="#" className='navbar_link relative'>
                        CATEGORY
                    </Link>
                    <Link href="#" className='navbar_link relative'>
                        BLOG
                    </Link>
                    <Link href="#" className='navbar_link relative'>
                        OFFERS
                    </Link>
                    <Link href="#" className='navbar_link relative'>
                        ABOUT
                    </Link>
                    <Link href="#" className='navbar_link relative'>
                        CONTACT US
                    </Link>
                    

                </div>
            </div>
        </div>
    )

}
export default Navbar;