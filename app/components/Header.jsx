import React from 'react'
import Image from "next/image";
import {assets} from "@/assets/assets";

const Header = () => {
    return (
        <div className={'w-11/12 max-w-3xl  text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'}>
        <div>
            <Image src={assets.profile_img} alt={'profile'} className={'rounded-full w-40 cursor-pointer mr-1'}  />
        </div>
    <h3 className={'flex items-end gap-3 text-xl md:text-2xl mb-3 font-serif'}>
        Hi , I'm Raed Houimli
        <Image src={assets.hand_icon} alt={'hand'} className={'rounded-full w-6'} />
    </h3>
            <h1 className={'text-3xl sm:text-6xl lg:text-[66px] font-serif'}>
                I'm a Software Engineer
            </h1>
            <p className={'max-w-2xl mx-auto font-serif'}>
                I write code, secure systems, crunch data & explore the cloud ☁️ | Python/JavaScript | Cybersecurity, AWS & Quantum Tech Enthusiast
            </p>
            <div className={'flex flex-col sm:flex-row items-center gap-4 mt-4'}>
                <a href={'#contact'} className={'px-10 py-3 border-white rounded-full bg-black text-white flex items-center gap-2'}>Contact Me
                    <Image src={assets.download_icon} alt={'download'} className={'w-4'} />
                </a>
                <a href={'/sample-resume.pdf'} download className={'px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2'}>My Resume</a>
            </div>
        </div>
    )
}
export default Header
