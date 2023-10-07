import React from 'react';
import Image from 'next/image';
import {AiFillStar,AiOutlineStar} from 'react-icons/ai'

interface propsType{
    img:string,
    title:string,
    rating:number,
    price:string,
}
const ProductCard:React.FC<propsType>=({img,title,rating,price})=>{

    const Rating=(rating:number)=>{
        switch(rating){
            case 1:return(
                <div className='flex gap-1 text-[20px] text-[#FF9529]'>
                    <AiFillStar/>
                    <AiOutlineStar/>
                    <AiOutlineStar/>
                    <AiOutlineStar/>
                    <AiOutlineStar/>
                </div>
            );
            case 2:return(
                <div className='flex gap-1 text-[20px] text-[#FF9529]'>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiOutlineStar/>
                    <AiOutlineStar/>
                    <AiOutlineStar/>
                </div>
            );
            case 3:return(
                <div className='flex gap-1 text-[20px] text-[#FF9529]'>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiOutlineStar/>
                    <AiOutlineStar/>
                </div>
            );
            case 4:return(
                <div className='flex gap-1 text-[20px] text-[#FF9529]'>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiOutlineStar/>
                </div>
            );
            case 5:return(
                <div className='flex gap-1 text-[20px] text-[#FF9529]'>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                </div>
            );
            default:
                return null;
                
            
           

        }
    }
    return(
        <div className='px-4  max-w-[400px] '>
            <div>
                <Image
                className='w-full h-auto'
                src={img}
                width={200}
                height={300}
                alt={title}
                
                />
            </div>
            <div className='space-y-2 py-2'>
                <h2 className='text-[red] font-medium uppercase  '>{title}</h2>
                <div>{Rating(rating)}</div>
                <div className="font-bold flex gap-4 text-white">${price}
                    <del className='text-gray-400 font-normal'>${parseInt(price)+10}.00</del>
                </div>
            </div>
        </div>
    )
}
export default ProductCard;