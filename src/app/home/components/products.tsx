import React from "react"
import Image from "next/image"

const Product = () => {
    return (
        <div className="border border-[#E5E5E5] w-[264px] h-[385px] rounded-[6px]">
            <Image src="/product.png" alt="product" width={262} height={262} />
            <p className="font-normal text-[14px] text-[#999] ml-[21px]">Qo'y bo'yin (muzlatilgan)</p>
            <div className="flex gap-[12px] items-center ml-[21px]">
                <h3 className="font-bold text-[24px]">7,040</h3>
                <h3 className="font-normal text-[15px] text-[#77798c]">8,800</h3>
            </div>
            <button className="w-[222px] h-[36px] bg-[#f3f3f3] ml-[21px] mt-[13px] cursor-pointer">Qo'shish</button>
        </div>
    )
}

export default Product;