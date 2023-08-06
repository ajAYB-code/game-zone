import React from "react";
import { Link } from "react-router-dom";
import { AiFillGithub, AiFillFacebook, AiFillYoutube, AiOutlineInstagram, AiFillInstagram } from 'react-icons/ai';

const Footer = () => {

    return (
        <div className="py-16 flex flex-col items-center">
            <div className="flex flex-row gap-x-7 mb-7">
                <Link to={"https://github.com/ajAYB-code/game-zone"}>
                    <AiFillGithub className="text-3xl"/>
                </Link>
                <Link to={""}>
                    <AiFillFacebook className="text-3xl"/>
                </Link>
                <Link to={""}>
                    <AiFillYoutube className="text-3xl"/>
                </Link>
                <Link to={""}>
                    <AiFillInstagram className="text-3xl"/>
                </Link>
            </div>
            <div className="flex flex-row gap-x-7 mb-5">
                <Link to={"/games"} className="hover:underline">All games</Link>
                <Link to={"/games?sort=trending"} className="hover:underline">Trending games</Link>
                <Link to={"/games?sort=new"} className="hover:underline">New Release</Link>
                <Link to={"/games?sort=rating"} className="hover:underline">Highly rated</Link>
            </div>
            <p className="text-white">Made with &#10084; by <a href="https://github.com/ajAYB-code" className="underline">AjAYB</a></p>
        </div>
    );
}

export default Footer;