import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Carousel } from "./";
import { fetchGames } from "../api";

const Main = () => {
    const [newReleasedGames, setNewReleasedGames] = useState([]);
    const [trendingGames, setTrendingGames] = useState([]);
    const [highRatedGames, setHighRatedGames] = useState([]);

    const loadNewReleasedGames = async () => {
        const todayDate = new Date();
        const year = todayDate.getFullYear();
        const month = todayDate.getMonth() + 1;
        const day = todayDate.getDate();

        // We use the previous year if the current month is still January
        const startDate = `${month >= 2 ? year : --year}-01-01`;
        const endDate = `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;

        const params = {
            dates: startDate + ',' + endDate,
            ordering: '-released',
        }

        const data = await fetchGames(params);
        setNewReleasedGames(data.results);
    }

    const loadTrendingGames = async () => {
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
        }

        const data = await fetchGames(params);
        setTrendingGames(data.results);
    }

    const loadHighRatedGames = async () => {
        const todayDate = new Date();
        const year = todayDate.getFullYear();
        const month = todayDate.getMonth() + 1;
        const day = todayDate.getDate();

        // We use the previous year if the current month is still January
        const startDate = `${month >= 2 ? year : --year}-01-01`;
        const endDate = `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;

        const params = {
            dates: startDate + ',' + endDate,
            ordering: '-rating',
        }

        const data = await fetchGames(params);
        setHighRatedGames(data.results);
    }

    useEffect(() => {
        loadNewReleasedGames();
        loadTrendingGames();
        loadHighRatedGames();
    }, []);

    return (
        <div className="px-20 mt-5">
            <section className="pt-16">
                <div className="flex flex-row justify-between items-end mb-12">
                    <h1 className="text-4xl font-bold text-primary">New Release</h1>
                    <Link to={"/games?sort=new"} className="text-secondary text-lg">See more</Link>
                </div>
                <Carousel games={newReleasedGames}/>
            </section>
            <section className="pt-16">
                <div className="flex flex-row justify-between items-end mb-12">
                    <h1 className="text-4xl font-bold text-primary">Trending</h1>
                    <Link to={"/games?sort=trend"} className="text-secondary text-lg">See more</Link>
                </div>
                <Carousel games={trendingGames}/>
            </section>
            <section className="pt-16">
                <div className="flex flex-row justify-between items-end mb-12">
                    <h1 className="text-4xl font-bold text-primary">Highly Rated</h1>
                    <Link to={"/games?sort=rate"} className="text-secondary text-lg">See more</Link>
                </div>
                <Carousel games={highRatedGames}/>
            </section>
        </div>
    );
}

export default Main;