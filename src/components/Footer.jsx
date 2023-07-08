import React from "react";
import { AiFillGithub, AiFillFacebook, AiFillYoutube, AiOutlineInstagram, AiFillInstagram } from 'react-icons/ai';

const Footer = () => {

    return (
        <div className="py-16 flex flex-col items-center">
            <div className="flex flex-row gap-x-7 mb-7">
                <a href="">
                    <AiFillGithub className="text-3xl"/>
                </a>
                <a href="">
                    <AiFillFacebook className="text-3xl"/>
                </a>
                <a href="">
                    <AiFillYoutube className="text-3xl"/>
                </a>
                <a href="">
                    <AiFillInstagram className="text-3xl"/>
                </a>
            </div>
            <div className="flex flex-row gap-x-7 mb-5">
                <a href="" className="hover:underline">All games</a>
                <a href="" className="hover:underline">Trending games</a>
                <a href="" className="hover:underline">New Release</a>
                <a href="" className="hover:underline">Highly rated</a>
            </div>
            <p className="text-white">Made with &#10084; by <a href="https://github.com/ajAYB-code" className="underline">AjAYB</a></p>
        </div>
    );
}

export default Footer;