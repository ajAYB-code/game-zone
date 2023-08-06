import React, { useEffect, useState } from "react";
import { Footer, GameCard, Navbar } from "../components";
import { fetchGames } from "../api";
import { useFetcher, useNavigate, useSearchParams } from "react-router-dom";
import { BiSolidHandLeft } from "react-icons/bi";

const Games = () => {
    const [games, setGames] = useState([]);
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const [sortGamesBy, setSortGamesBy] = useState(searchParams.get('sort') || '');

    const loadGames = async () => {
        const fetchGamesParams = {};
        switch(sortGamesBy) {
            case 'new': 
            fetchGamesParams['ordering'] = '-released';
            break;
            case 'trend': 
            fetchGamesParams['ordering'] = '-added';
            break;
            case 'rate': 
            fetchGamesParams['ordering'] = '-rating';
            break;
        }
        const data = await fetchGames(fetchGamesParams);
        setGames(data.results);
    }

    useEffect(() => {
        loadGames();
    }, []);

    const handleSortGamesByChange = (selected) => {
        setSortGamesBy(selected);
    }

    useEffect(() => {
        if(sortGamesBy !== ''){
            navigate(`/games?sort=${sortGamesBy}`);
        } else {
            navigate('/games');
        }

        loadGames();
    }, [sortGamesBy])

    return (
        <>
            <Navbar/>
                <div className="px-20 mt-16">
                    <div className="text-right mb-8">
                        <label htmlFor="" className="mr-3">Sort by</label>
                        <select
                        value={sortGamesBy}
                        onChange={ e => { handleSortGamesByChange(e.target.value) } }
                        className="text-black py-1 border-none outline-none rounded-sm" 
                        name="" 
                        id="">
                            <option value="">Relevent</option>
                            <option value="new">New release</option>
                            <option value="trend">Trending</option>
                            <option value="rate">Rating</option>
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

export default Games;