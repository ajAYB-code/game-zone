import React, { useState } from "react";
import { Carousel } from "./";

const Main = () => {

    const games = [
        {
            title: 'Game 1',
            category: 'action'
        },
        {
            title: 'Game 2',
            category: 'action'
        },
        {
            title: 'Game 3',
            category: 'action'
        },
        {
            title: 'Game 4',
            category: 'action'
        },
        {
            title: 'Game 5',
            category: 'action'
        },
        {
            title: 'Game 6',
            category: 'action'
        },
        {
            title: 'Game 7',
            category: 'action'
        },
        {
            title: 'Game 8',
            category: 'action'
        },
        {
            title: 'Game 9',
            category: 'action'
        },
        {
            title: 'Game 10',
            category: 'action'
        },
        {
            title: 'Game 11',
            category: 'action'
        },
        {
            title: 'Game 12',
            category: 'action'
        },
        {
            title: 'Game 13',
            category: 'action'
        },
        {
            title: 'Game 14',
            category: 'action'
        },
        {
            title: 'Game 15',
            category: 'action'
        },
        {
            title: 'Game 16',
            category: 'action'
        },
        {
            title: 'Game 17',
            category: 'action'
        },
        {
            title: 'Game 18',
            category: 'action'
        },
        {
            title: 'Game 19',
            category: 'action'
        },
        {
            title: 'Game 20',
            category: 'action'
        },
    ];

    return (
        <div className="px-20 mt-5">
            <section className="pt-16">
                <div className="flex flex-row justify-between items-end mb-12">
                    <h1 className="text-4xl font-bold text-primary">New Release</h1>
                    <a href="" className="text-secondary text-lg">See more</a>
                </div>
                <Carousel games={games}/>
            </section>
            <section className="pt-16">
                <div className="flex flex-row justify-between items-end mb-12">
                    <h1 className="text-4xl font-bold text-primary">Trending</h1>
                    <a href="" className="text-secondary text-lg">See more</a>
                </div>
                <Carousel games={games}/>
            </section>
            <section className="pt-16">
                <div className="flex flex-row justify-between items-end mb-12">
                    <h1 className="text-4xl font-bold text-primary">Highly Rated</h1>
                    <a href="" className="text-secondary text-lg">See more</a>
                </div>
                <Carousel games={games}/>
            </section>
        </div>
    );
}

export default Main;