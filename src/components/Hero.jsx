import React from "react";

const Hero = () => {
    return (
        <div className="px-20 py-6 h-[80vh]">
            <div className="h-full rounded-3xl overflow-hidden relative">
                <div className="absolute inset-0">
                    <img src="https://m.media-amazon.com/images/M/MV5BZGUzOGZkNjAtNGQzNi00Yjc1LTgxMTAtMzM0NzY2YzNjM2U2XkEyXkFqcGdeQWFsZWxvZw@@._V1_QL40_QL75_UX500_CR0,0,500,281_.jpg" className="w-full h-full object-cover" alt="" />
                </div>
                <div className="p-6 w-full flex flex-row justify-between items-end absolute top-1/2">
                    <div className="flex flex-col gap-y-6">
                        <h1 className="text-4xl font-semibold">GTA Vice City 23</h1>
                        <div className="text-slate-100">
                            <span>Xbox</span>
                            <span className="ml-5">2023</span>
                        </div>
                        <div className="">
                            <button className="px-6 py-3 border-none outline-none bg-primary text-white rounded-md ">See this game</button>
                        </div>
                    </div>
                    <ul className="flex flex-row gap-x-4">
                        <li className="">
                            <img src="https://m.media-amazon.com/images/M/MV5BZGUzOGZkNjAtNGQzNi00Yjc1LTgxMTAtMzM0NzY2YzNjM2U2XkEyXkFqcGdeQWFsZWxvZw@@._V1_QL40_QL75_UX500_CR0,0,500,281_.jpg" className="h-26 w-36 obect-cover rounded ring ring-secondary" alt="" />
                        </li>
                        <li className="">
                            <img src="https://m.media-amazon.com/images/M/MV5BZGUzOGZkNjAtNGQzNi00Yjc1LTgxMTAtMzM0NzY2YzNjM2U2XkEyXkFqcGdeQWFsZWxvZw@@._V1_QL40_QL75_UX500_CR0,0,500,281_.jpg" className="h-26 w-36 obect-cover rounded" alt="" />
                        </li>
                        <li className="">
                            <img src="https://m.media-amazon.com/images/M/MV5BZGUzOGZkNjAtNGQzNi00Yjc1LTgxMTAtMzM0NzY2YzNjM2U2XkEyXkFqcGdeQWFsZWxvZw@@._V1_QL40_QL75_UX500_CR0,0,500,281_.jpg" className="h-26 w-36 obect-cover rounded" alt="" />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Hero;