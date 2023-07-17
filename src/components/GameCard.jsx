import React from "react";
import { AiFillStar } from 'react-icons/ai';
import './GameCard.css';

const GameCard = ({ width, game }) => {


    return (
        <div className={"game-card p-4 h-72 relative rounded-2xl overflow-hidden group " + (width ? width : 'w-56')}>
            <div className="px-2 py-1 absolute top-3 left-3 z-10 bg-black rounded-full flex items-center gap-x-1">
                <AiFillStar className="text-yellow-400"/>
                <span>{ game.rating }</span>
            </div>
            <div className="absolute inset-0">
                <img src={ game.background_image } alt="" className="h-full w-full object-cover group-hover:scale-110 transition ease-in-out duration-300" />
            </div>
            <div className="px-4 pb-6 h-1/2 bg-gradient-to-t from-black absolute left-0 right-0 bottom-0 flex items-end">
                <h1 className="game-title font-semibold mb-1/2 relative">{ game.name }</h1>
            </div>
            <a href="" className="absolute inset-0"></a>
        </div>
    );
}

export default GameCard