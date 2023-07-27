import React, { useEffect, useState } from "react";
import { Footer, GameCard, Navbar } from "../components";
import { fetchGames } from "../api";

const Movies = () => {
    const [games, setGames] = useState([]);

    const loadGames = async () => {
        const data = await fetchGames();
        setGames(data.results);
        console.log(data)
    }

    useEffect(() => {
        loadGames();
    }, []);

    return (
        <>
            <Navbar/>
                <div className="px-20 mt-16">
                    <div className="text-right mb-8">
                        <label htmlFor="" className="mr-3">Sort by</label>
                        <select className="text-black border-none outline-none rounded-sm" name="" id="">
                            <option value="">Relevent</option>
                            <option value="">New release</option>
                            <option value="">Trending</option>
                            <option value="">Rating</option>
                        </select>
                    </div>
                    <ul className="grid grid-cols-5 gap-10">
                    {
                        games.map((game, index) =>
                            (
                                <li
                                key={index}
                                className="">
                                    <GameCard
                                     game={game}
                                     width="w-full"
                                    />
                                </li>
                            )
                        )
                    }
                    </ul>
                    <div className="mt-16">
                    <ul className="flex gap-x-3">
                        <li key={1}>
                            <a href="" className="px-4 py-3 rounded bg-black shadow-sm shadow-white">1</a>
                        </li>
                        <li key={2}>
                            <a href="" className="px-4 py-3 rounded bg-black shadow-sm shadow-white">3</a>
                        </li>
                    </ul>
                </div>
                </div>
            <Footer/>
        </>
    )
}

export default Movies;