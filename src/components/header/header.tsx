"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Header = () => {
    const router = useRouter();

    return (
        <div className="flex justify-center items-center gap-[30px] w-full h-[92px]">
            <Image src="/Logo.svg" alt="Logo" width={110} height={53} />
            <input className="w-[655px] h-[47px]" type="text" placeholder="Qidirish" />
            <span className="text-[14px] font-semibold">Bog’lanish</span>
            <button className="w-[92px] h-[38px] font-bold text-[13px] text-[#019E7F] border rounded-[6px] cursor-pointer">
                Payme
            </button>
            <button className="w-[138px] h-[38px] font-normal text-[15px] text-[#009e7f] border border-[#ececec] rounded-[6px]">
                Uz / UZS
            </button>
            <div className="cursor-pointer">
                <Image src="/icon1.svg" alt="icon" width={24} height={24} />
            </div>

            <button
                onClick={() => router.push("/liked")}
                className="py-[10px] px-[20px] rounded-[6px] bg-orange-500 text-[#fff]"
            >
                liked
            </button>
        </div>
    );
};

export default Header;
