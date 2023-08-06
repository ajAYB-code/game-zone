import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { BsSearch } from 'react-icons/bs'

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedSearchCategoryItem, setSelectedSearchCategoryItem] = useState('All');
    const [serachTerm, setSearchTerm] = useState('');
    const searchCategories = ['All', 'Games', 'Publishers', 'Platforms', 'Developers'];

    const closeDropdown = () => {
        setIsDropdownOpen(false);
    }

    const openDropdown = () => {
        setIsDropdownOpen(true);
    }

    useEffect(() => {
        const handleDocumentClick = (event) => {
            // Close dropdown when the user clicks outside the dropdown menu and dropdown toggler
            if(!event.target.matches('.dropdown-toggler, .dropdown-menu')) closeDropdown();
        }

        document.addEventListener('click', handleDocumentClick);

        return () => {
            document.removeEventListener('click', handleDocumentClick);
        }
    }, [])

    const handleSelectedSearchCategoryItem = (item) => {
        setSelectedSearchCategoryItem(item);
    }

    const handleUpdateSearchTerm = (value) => {
        setSearchTerm(value);
    }

    return (
        <nav className="p-7 flex items-center">
            <Link to={"/"} className="text-white font-bold text-3xl">Game <span className="text-primary">Zone</span></Link>
            <div className="flex w-[450px] ml-10 rounded-full focus-within:ring focus-within:ring-primary">
                <div className="relative z-10">
                    <div
                     className={ "dropdown-toggler text-black bg-gray-200 select-none rounded-l-full cursor-pointer p-2 " + ( isDropdownOpen ? 'ring ring-primary' : '' ) }
                     onClick={ () =>  { isDropdownOpen ? closeDropdown() : openDropdown() } }
                     >{ selectedSearchCategoryItem }</div>
                     {
                        isDropdownOpen && (
                            <ul className="dropdown-menu flex bg-white rounded text-black flex-col max-h-64 overflow-x-hidden overflow-y-auto absolute top-[120%]">
                                {
                                    searchCategories.map((catgr, index) => 
                                    (
                                        <li
                                        key={ index }
                                        onClick={ (e) => { handleSelectedSearchCategoryItem(e.target.innerText) } }
                                        className={ "px-3 py-1 cursor-pointer hover:bg-gray-200 " + ( selectedSearchCategoryItem === catgr ? 'bg-gray-200' : '' ) }
                                        >{ catgr }</li>
                                    )
                                    )
                                }
                            </ul>
                        )
                     }

                </div>
                <form action="" className="flex-1 relative">
                    <input 
                    onChange={ (e) => handleUpdateSearchTerm(e.target.value) }
                    className="p-2 text-black w-full border-none outline-none" 
                    type="text"
                    value={ serachTerm }
                    onFocus={ () => { closeDropdown() } }
                    />
                </form>
                <button className="text-black bg-white rounded-r-full px-3 cursor-pointer">
                    <BsSearch className=""/>
                </button>
            </div>
        </nav>
    )
}

export default Navbar;