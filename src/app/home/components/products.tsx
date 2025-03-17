"use client";
import React from "react";
import Image from "next/image";
import { Heart } from "lucide-react";
import { useLiked } from "@/app/liked/context/LikedContext";

interface ProductProps {
    product: {
        id: number;
        name: string;
        price: number;
        oldPrice: number;
        image: string;
    };
}

const Product: React.FC<ProductProps> = ({ product }) => {
    const { likedItems, toggleLike } = useLiked();
    const isLiked = likedItems.includes(product.name);

    return (
        <div className="relative border border-[#E5E5E5] w-[264px] h-[385px] rounded-[6px]">
            <button
                onClick={() => toggleLike(product.name)}
                className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md hover:bg-gray-200"
            >
                <Heart
                    size={20}
                    className={isLiked ? "text-red-500 fill-red-500" : "text-gray-400"}
                />
            </button>

            <Image src={`http://localhost:5000${product.image}`} alt={product.name} width={262} height={262} />

            <p className="font-normal text-[14px] text-[#999] ml-[21px]">{product.name}</p>

            <div className="flex gap-[12px] items-center ml-[21px]">
                <h3 className="font-bold text-[24px]">{product.price}</h3>
                <h3 className="font-normal text-[15px] text-[#77798c] line-through">{product.oldPrice}</h3>
            </div>

            <button className="w-[222px] h-[36px] bg-[#f3f3f3] ml-[21px] mt-[13px] cursor-pointer">
                Qo'shish
            </button>
        </div>
    );
};

export default Product;
