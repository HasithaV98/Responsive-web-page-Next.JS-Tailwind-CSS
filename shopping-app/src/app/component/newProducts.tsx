import React from "react";
import ProductCard from "./productCard";

const productData=[
    {
        img:'/m5.png',
        title:'Pro Gainer',
        rating:3,
        price:"85.99"
    },
    {
        img:'/m1.png',
        title:'Dymatize Mass Gainer',
        rating:4,
        price:"109.99"
    },
    {
        img:'/m2.png',
        title:'Mass Tech Extrems',
        rating:5,
        price:"99.99"
    },
    {
        img:'/m3.png',
        title:'MP Combat',
        rating:4,
        price:"90.99"
    },{
        img:'/m4.png',
        title:'RNC SHAPE BODY SCULPT',
        rating:3,
        price:"80.99"
    },
    {
        img:'/m6.png',
        title:'GOLDEN WHEY',
        rating:4,
        price:"100.99"
    },{
        img:'/m7.png',
        title:'ELITE GAINER',
        rating:5,
        price:"90.99"
    },
    {
        img:'/m8.png',
        title:'USN PREMIUM WHEY',
        rating:4,
        price:"99.99"
    },
    {
        img:'/m9.png',
        title:'GOLD STANDARD WHEY',
        rating:5,
        price:"115.99"
    },
    {
        img:'/m10.png',
        title:'SERIOUS MASS',
        rating:4,
        price:"95.99"
    },
    {
        img:'/m11.png',
        title:'NITRO TECH RIPPED',
        rating:5,
        price:"109.99"
    },
    {
        img:'/m12.png',
        title:'100% WHEY PROTEIN',
        rating:3,
        price:"89.99"
    }
]

const NewProduct=()=>{
    return(
        <div>
            <div className="container pt-16 bg-black w-fit">
                <h2 className=" text-2xl pb-4 text-white font-bold text-center text-[35px] mb-10">New Products</h2>
                <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-col-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">
                    {productData.map((item,index)=>(
                        <ProductCard
                        key={index}
                        img={item.img}
                        title={item.title}
                        rating={item.rating}
                        price={item.price}
                        />
                    ))}
                </div>
            </div>
        </div>
    )

}
export default NewProduct;