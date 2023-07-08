import React from "react";
import { AiFillStar } from 'react-icons/ai';
import './GameCard.css';

const GameCard = ({ width, game }) => {


    return (
        <div className={"p-4 h-72 relative rounded-2xl overflow-hidden group " + (width ? width : 'w-56')}>
            <div className="px-2 py-1 absolute top-3 left-3 z-10 bg-black rounded-full flex items-center gap-x-1">
                <AiFillStar className="text-yellow-400"/>
                <span>4.5</span>
            </div>
            <div className="absolute inset-0">
                <img src="https://placehold.co/600x400" alt="" className="h-full w-full object-cover group-hover:scale-110 transition ease-in-out duration-300" />
            </div>
            <div className="px-4 h-1/2 bg-gradient-to-t from-black absolute left-0 right-0 bottom-0">
                <div className="absolute bottom-5">
                    <h1 className="game-title text-2xl font-semibold mb-1/2 relative group-hover:after:w-full">{ game.title }</h1>
                    <p className="text-slate-300">{ game.category }</p>
                </div>
            </div>
            <a href="" className="absolute inset-0"></a>
        </div>
    );
}

export default GameCard