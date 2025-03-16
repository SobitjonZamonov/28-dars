import React from "react";
import Image from "next/image";

const Footer = () => {
    return (
        <div className="flex justify-center items-center gap-[150px] w-full h-[237px] border">
            <div>
                <Image src="/Logo.svg" alt="Logo" width={110} height={53} />
                <h1>HilalMart © 2021</h1>
                <p>Barcha huquqlar kafolatlangan</p>
                <div className="flex">
                    <Image src="/play_market.svg" alt="Logo" width={110} height={53} />
                    <Image src="/app_store.svg" alt="Logo" width={110} height={53} />
                </div>
            </div>

            <div>
                <h1>Foydali havolalar</h1>
                <ul>
                    <li><a href="#">Bosh sahifa</a></li>
                    <li><a href="#">Yordam kerakmi?</a></li>
                    <li><a href="#">Foydalanish shartlari</a></li>
                    <li><a href="#">Maxfiylik siyosati</a></li>
                </ul>
            </div>

            <div>
                <h1>Biz haqimizda</h1>
                <ul>
                    <li><a href="#">Manzil: #214, G-dong, Lotte castle, 347 Jongno, Jongno-gu, Seoul, 03113, Crescent Trade ltd</a></li>
                    <li><a href="#">Korxona nomi: Crescent trade llc</a></li>
                    <li><a href="#">Korxona rahbari: DADAJONOV RAKHIMJON</a></li>
                    <li><a href="#"></a>Registratsiya raqami: 433-62-00377</li>
                    <li><a href="#">Telefon raqam: 1833-2178 02-3670-6808</a></li>
                </ul>
            </div>

        </div>
    );
};

export default Footer;