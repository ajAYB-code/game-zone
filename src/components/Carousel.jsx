import React from "react";
import { useState } from "react";
import { BiSolidChevronLeft, BiSolidChevronRight } from 'react-icons/bi';
import { GameCard } from "./";
import './Carousel.css';

const Carousel = ({ games }) => {
    const [slideNumber, setSlideNumber] = useState(0);
    const itemsPerPage = 5;
    
    const slide = (direct) => {
        setSlideNumber(slideNumber + direct * -1);
    }

    return (
        <div className="relative">
        <button
        onClick={ () => { slide(1) } }
        className="group bg-black shadow-xl border-2 p-4 flex rounded-full absolute z-10 left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 hover:border-secondary"
        style={{
            ...slideNumber > 0 ?
            {visibility: 'visible'} : 
            {visibility: 'hidden'}
        }}
        >
            <BiSolidChevronLeft className="group-hover:text-secondary"/>
        </button>
        <button 
        onClick={ () => { slide(-1) } }
        className="group bg-black shadow-xl border-2 p-4 flex rounded-full absolute z-10 right-0 top-1/2 -translate-y-1/2 translate-x-1/3 hover:border-secondary"
        style={{
            ...games.length - slideNumber * itemsPerPage > itemsPerPage ?
            {visibility: 'visible'} : 
            {visibility: 'hidden'}
        }}
        >
            <BiSolidChevronRight className="group-hover:text-secondary"/>
        </button>
        <div className="overflow-hidden">
            <ul className="track flex flex-row" style={{ transform: `translateX(${slideNumber * -100 }%)` }}>
                {
                    games.map((game, index) =>
                    (
                    <li
                    key={index}
                    className="basis-1/5 shrink-0">
                        <div className="pr-5">
                            <GameCard game={game} width="w-full"/>
                        </div>
                    </li>
                    )
                    )
                }
            </ul>
        </div>
    </div>
    );
}

export default Carousel;