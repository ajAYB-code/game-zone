import React from "react";
import { useState, useEffect } from "react";
import { fetchGames } from "../api";
import './Hero.css';

const Hero = () => {
    const [heroGame, setHeroGame] = useState(null);
    const [activeScreenShotIndex, setActiveScreenShotIndex] = useState(0);

    const loadHeroGame = async () => {
        const todayDate = new Date();
        const year = todayDate.getFullYear();
        const month = todayDate.getMonth() + 1;
        const day = todayDate.getDate();

        // We use the previous year if the current month is still January
        const startDate = `${month >= 2 ? year : --year}-01-01`;
        const endDate = `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;

        const params = {
            dates: startDate + ',' + endDate,
            ordering: '-added',
            page: 1,
            page_size: 1,
        }

        const data = await fetchGames(params);
        const heroGame = data.results[0];
        console.log(heroGame);
        heroGame.short_screenshots = heroGame.short_screenshots.length > 3 ? heroGame.short_screenshots.slice(0, 3) : heroGame.short_screenshots;
        setHeroGame(heroGame);
    }

    const slideScreenShots = () => {
        if(null == heroGame || heroGame.short_screenshots.length <= 1) return;

        let timer = setInterval(() => {
            setActiveScreenShotIndex(prevValue => prevValue < (heroGame.short_screenshots.length - 1) ? (prevValue + 1) : 0);
        }, 5000);
        return timer;
    }

    useEffect(() => {
        loadHeroGame();
    }, []);

    useEffect(() => {
        const slideScreenShotsTimer = slideScreenShots();

        return () => {
            clearInterval(slideScreenShotsTimer);
        }
    }, [heroGame]);

    return heroGame ? (
            <div className="hero px-20 py-6 h-[80vh]">
            <div className="h-full rounded-3xl overflow-hidden relative">
                <div className="absolute inset-0 z-10 bg-black opacity-10"></div>
                <div className="absolute inset-0">
                    <img src={ heroGame.short_screenshots[activeScreenShotIndex].image } className="w-full h-full object-cover" alt="" />
                </div>
                <div className="p-6 w-full flex flex-row justify-between items-end absolute z-20 top-2/3 -translate-y-1/2">
                    <div className="basis-1/2 min-w-0 gap-y-6">
                        <h1 className="game-title font-semibold mb-3">{ heroGame.name }</h1>
                        <div className="text-slate-100 mb-5">
                            <span className>{ heroGame.released }</span>
                        </div>
                        <div className="">
                            <button className="px-6 py-3 border-none outline-none bg-primary text-white rounded-md ">See this game</button>
                        </div>
                    </div>
                    <ul className="flex flex-row gap-x-4">
                        {
                            (heroGame.short_screenshots.length > 3 ?
                            heroGame.short_screenshots.slice(0, 3) :
                            heroGame.short_screenshots
                            )
                            .map((screenshot, index) =>
                            (
                            <li 
                            key={index}
                            className="">
                                <img src={ screenshot.image } className={"h-20 w-36 obect-cover rounded " + (activeScreenShotIndex == index ? 'ring ring-secondary' : '') } alt="" />
                            </li>
                            )    
                            )
                        }
                    </ul>
                </div>
            </div>
        </div>
    ) : 
    'Loading'
}

export default Hero;