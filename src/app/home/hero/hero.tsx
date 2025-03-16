import React from "react";
import Product from "../components/products";
import Image from "next/image";

const categories = [
    { name: "O'zbekistonga yetkazish" },
    { name: "Go'sht va Baliq" },
    { name: "Asosiy oziq-ovqatlar" },
    { name: "Tayyor oziq-ovqatlar" },
    { name: "Ichimliklar" },
    { name: "Mobil telefon va kompyuter..." },
    { name: "Go'zallik & Sog'liq" },
    { name: "Oilaviy do'kon" },
    { name: "Kitoblar" },
    { name: "Shirinliklar" },
];

const Hero = () => {
    return (
        <div className="flex gap-6 mx-[100px]">
            <div className="w-[280px]">
                <ul className="bg-white shadow-lg rounded-lg overflow-hidden">
                    {categories.map((category, index) => (
                        <li
                            key={index}
                            className="flex justify-between items-center px-6 py-4 border-b last:border-none hover:bg-gray-100 cursor-pointer"
                        >
                            <span className="text-[16px] font-medium">{category.name}</span>
                            <span className="text-gray-500">›</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <div className="flex items-center w-[1200px] h-[225px] bg-[#C4EAD2] rounded-[6px] relative px-10">
                    <div>
                        <h1 className="font-bold text-[28px] text-[#071612] w-[550px] leading-tight">
                            Yangi ro’yxatdan o’tgan mijozlarga ilk buyurtma bepul yetkazib beriladi!
                        </h1>
                        <div className="flex items-center text-[#071612] font-semibold text-[16px] mt-5">
                            <span>1833-2178</span>
                        </div>
                    </div>
                </div>
                <div className="flex gap-[17px] mt-[43px] ml-[30px]">
                    <Image src="/yangi_logo.svg" alt="" width={28} height={28}/>
                    <h1 className="font-bold text-[32px]">Yangi</h1>
                </div>
                <div className="grid grid-cols-4 gap-4 mt-[43px] ml-[30px]">
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </div>
                <div className="flex gap-[17px] mt-[43px] ml-[30px]">
                    <Image src="/yangi_logo.svg" alt="" width={28} height={28}/>
                    <h1 className="font-bold text-[32px]">Ommabop mahsulotlar</h1>
                </div>
                <div className="grid grid-cols-4 gap-4 mt-[43px] ml-[30px]">
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </div>
                <div>
                    
                </div>

            </div>
        </div>
    )
}

export default Hero;
