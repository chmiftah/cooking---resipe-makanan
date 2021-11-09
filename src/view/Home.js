import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import cook from '../view/cookbg.svg'
import data from '../data/data-recipe.json'
import category from '../data/data-category.json'
import recipe from '../data/recipes.json'
import { Link } from 'react-router-dom'
axios.defaults.withCredentials = true


export default function Home() {

    const [newRecipes, setNewRecipes] = useState([])
    const [categories, setCategories] = useState([])
    const [recipes, setRecipes] = useState([])
    const [active, setActive] = useState('');
    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState('');
    const [loading, setLoading] = useState(true)
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }


    useEffect(() => {
        const getData = async () => {
            try {
                setNewRecipes(data)
                setCategories(category)
                setRecipes(recipe.data.dessert);


            } catch (error) {
            }
        }
        getData()


    }, [])



    const searchRecipe = async (e) => {
        setSearch(e);



        if (search !== '') {
            const hasil = newRecipes.filter((item) => {
                return Object.values(item).join('').toLocaleLowerCase().includes(search.toLocaleLowerCase())
            })
            setLoading(false)
            setSearchResults(hasil);
        } else {
            setLoading(true)
        }
    }
    const click = async (e) => {
        setActive(e)

        switch (e) {
            case 'dessert':
                setRecipes(recipe.data.dessert);
                break;
            case 'tradisional':
                setRecipes(recipe.data.tradisional);
                break;
            case 'malam':
                setRecipes(recipe.data.malam);
                break;
            case 'siang':
                setRecipes(recipe.data.siang);
                break;
            case 'daging':
                setRecipes(recipe.data.daging);
                break;
            case 'sayur':
                setRecipes(recipe.data.sayur);
                break;
            case 'seafood':
                setRecipes(recipe.data.seafood);
                break;
            case 'sarapan':
                setRecipes(recipe.data.sarapan);
                break;
            default:
                setRecipes(recipe.data.tradisional);

        }

    }



    return (
        <div className="">
            <div className="bg-white w-full p-2">
                <div className="max-w-screen-2xl px-4 lg:px-12 mx-auto  items-center flex justify-between">
                    <div className="w-1/2 flex justify-between">
                        <p className="text-3xl lg:text-4xl font-bold mr-4 text-yellow-500">Cooking</p>
                    </div>
                    <div className="w-1/2 flex justify-end">
                        <input type="search"
                            className="bg-gray-200  px-4 py-2 w-3/4 lg:w-3/4 rounded-large text-black  focus:outline-none "
                            placeholder="Search.."
                            onClick={openModal} />
                    </div>
                </div>
            </div>


            <div className="bg-yellow-300">
                <div className="max-w-screen-2xl mx-auto max-h-screen lg:flex lg:flex-row-reverse  items-center py-20">
                    <div className="lg:w-2/3 pr-8 flex justify-end">
                        <img src={cook} alt="" className=" text-center" width="800px" />
                    </div>
                    <div className="lg:w-1/3 pl-12  pt-4">
                        <div>
                            <p className=" text-xl  font-extrabold pl-2 pb-6">100+ PREMIUM RECIPES</p>
                            <p className="font-mono font-extrabold text-6xl lg:text-8xl mb-4">It's<br />Cooking <br />Time</p>
                            <button className="bg-green-400 font-semibold text-white text-2xl px-7 py-4 rounded-large">Get Started</button>
                        </div>
                    </div>

                </div>
            </div>


            <div className="max-w-screen-2xl mx-auto px-8">
                <p className="text-4xl lg:text-6xl leading-snug font-bold py-4 mt-6 ">
                    What would you like to Cook?
                </p>
                <div className="py-6 ">
                    <input type="search" className="bg-gray-200 px-8 py-4 w-full lg:w-1/2 rounded-large text-black text-xl focus:outline-none " placeholder="nasi padang..."
                        onClick={openModal} />
                </div>

                <Transition appear show={isOpen} as={Fragment}>
                    <Dialog
                        as="div"
                        className="fixed inset-0 z-10 overflow-y-auto"
                        onClose={closeModal}
                    >
                        <div className="min-h-screen px-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"

                            >
                                <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-80" />
                            </Transition.Child>

                            {/* This element is to trick the browser into centering the modal contents. */}
                            <span
                                className="inline-block h-screen align-middle"
                                aria-hidden="true"
                            >
                                &#8203;
                            </span>
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <div className="inline-block w-full max-w-screen-2xl p-16 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                                    <div className=" flex justify-end absolute top-2 right-2">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center px-4 py-2 text-xl font-medium text-white bg-red-400 border border-transparent rounded-2xl  focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                            onClick={closeModal}
                                        >
                                            x
                                        </button>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <Dialog.Title
                                            as="h3"
                                            className="text-2xl font-medium mb-4leading-6 text-gray-900"
                                        >
                                            Search Recipe
                                        </Dialog.Title>
                                    </div>
                                    <div className="mt-2">

                                        <input type="search" className="bg-gray-200 px-8 py-4 w-full  rounded-xl text-black text-xl focus:outline-none " placeholder="nasi padang..."
                                            onChange={(e) => searchRecipe(e.target.value)} />
                                            <div className="text-xl mt-4 text-gray-600">
                                                Results 
                                            </div>

                                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 py-6">
                                            {
                                                !loading ?
                                                    searchResults.map((recipe, index) => (
                                                        <Link to="/recipes" className=" flex-shrink-0 shadow-sm transform transition duration-500 hover:scale-105" key={index}>
                                                            <div className="rounded-xl ">
                                                                <img src={recipe.thumb} alt="" className="rounded-t-xl w-full" />
                                                                <div className="bg-gray-300 rounded-b-xl w-full" style={{
                                                                    backgroundImage: `url(${recipe.thumb})`, backgroundPosition: 'center',
                                                                    backgroundSize: '',
                                                                    backgroundRepeat: 'no-repeat',
                                                                }}>
                                                                    <div className="bg-black rounded-b-xl p-2 bg-opacity-80 h-36 flex items-center">
                                                                        <div>
                                                                            <p className="font-semibold text-lg  text-gray-100 text-center ">{recipe.title}</p>
                                                                            <p className="text-gray-200 py-2 text-sm font-light text-center">{recipe.times} | {recipe.portion} | {recipe.dificulty}</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    ))
                                                    :
                                                 ''
                                            }
                                        </div>
                                    </div>
                                </div>
                            </Transition.Child>
                        </div>
                    </Dialog>
                </Transition >
                <p className="text-4xl lg:text-5xl font-bold text-gray-700 py-4 mb-2 font-mono">
                    Today recipe
                </p>
                <div className="flex pb-12 gap-8 overflow-x-auto scrollbar-hide shadow-sm ">
                    {
                        newRecipes.map((recipe, index) => (
                            <Link to="/recipes" className="w-3/4 lg:w-1/4 flex-shrink-0 shadow-sm transform transition duration-500 hover:scale-105" key={index}>
                                <div className="rounded-xl ">
                                    <img src={recipe.thumb} alt="" className="rounded-t-xl w-full" />
                                    <div className="bg-gray-300 rounded-b-xl w-full" style={{
                                        backgroundImage: `url(${recipe.thumb})`, backgroundPosition: 'center',
                                        backgroundSize: '',
                                        backgroundRepeat: 'no-repeat',
                                    }}>
                                        <div className="bg-black rounded-b-xl p-2 bg-opacity-80 h-36 flex items-center">
                                            <div>
                                                <p className="font-semibold text-md lg:text-lg  text-gray-100 text-center ">{recipe.title}</p>
                                                <p className="text-gray-200 py-2 text-sm font-light text-center">{recipe.times} | {recipe.portion} | {recipe.dificulty}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div >

            <div className="max-w-screen-2xl mx-auto lg:flex p-6">
                <div className="lg:w-1/6 w-full ">
                    <p className="text-4xl lg:text-5xl pl-4 text-gray-700 lg:pl-0 font-bold mt-4 mb-4  font-mono ">
                        Categories
                    </p>
                    <div className="overflow-x-auto  flex lg:block  scrollbar-hide">
                        <div className="flex lg:block w-full  " >
                            {
                                categories.map((category, index) => (
                                    <div className="rounded-lg lg:px-0 px-4  mx-2 py-4 w-full flex " key={index}>
                                        {active === `${category.key}` ?
                                            <div className="w-full flex">
                                                <button value={`${category.key}`} onClick={(e) => click(e.target.value)} className={`${active} === ${category.key} ? 'bg-yellow-300 ' : '' text-lg lg:text-2xl text-center lg:text-left bg-yellow-300 rounded-xl px-6 py-2 font-semibold`}>{category.category}</button>
                                            </div>
                                            :
                                            <div className="w-full flex">
                                                <button value={`${category.key}`} onClick={(e) => click(e.target.value)} className="text-lg lg:text-2xl text-center lg:text-left  font-semibold">{category.category}</button>
                                            </div>
                                        }

                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>

                <div className="lg:w-5/6 pl-4 lg:pl-16 pr-4 gap-12 grid grid-cols-1 lg:grid-cols-3 lg:py-20 mt-2 ">
                    {
                        recipes.map((recipe, index) => (
                            <Link to="/recipes" className="" key={index}>
                                <div className="  rounded-xl shadow-2xl transform transition duration-500 hover:scale-105">
                                    <div className=" flex-shrink-0 ">
                                        <div className="rounded-xl ">
                                            <img src={recipe.thumb} alt="" className="rounded-t-xl w-full " />
                                            <div className="bg-gray-300 rounded-b-xl w-full" style={{
                                                backgroundImage: `url(${recipe.thumb})`, backgroundPosition: 'center',
                                                backgroundSize: 'cover',
                                                backgroundRepeat: 'no-repeat',
                                            }}>
                                                <div className="bg-black rounded-b-xl px-4 py-4 h-40 bg-opacity-80">
                                                    <p className="font-semibold text-md lg:text-xl  text-gray-100 text-center">{recipe.title}</p>
                                                    <p className="text-gray-200  text-sm font-light text-center">by : Miftah</p>
                                                    <p className="text-gray-200 py-2 text-sm font-light text-center">{recipe.times} | {recipe.portion} | {recipe.dificulty}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>

            
            <footer className="text-gray-700  bg-yellow-300 body-font">
                <div className=" container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap md:text-left text-center order-first">
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-gray-700 tracking-widest text-sm mb-3">CATEGORIES</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <div className="text-gray-700 hover:text-gray-700">First Link</div>
                                </li>
                                <li>
                                    <div className="text-gray-700 hover:text-gray-700">Second Link</div>
                                </li>
                                <li>
                                    <div className="text-gray-700 hover:text-gray-700">Third Link</div>
                                </li>
                                <li>
                                    <div className="text-gray-700 hover:text-gray-700">Fourth Link</div>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-gray-700 tracking-widest text-sm mb-3">CATEGORIES</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <div className="text-gray-700 hover:text-gray-700">First Link</div>
                                </li>
                                <li>
                                    <div className="text-gray-700 hover:text-gray-700">Second Link</div>
                                </li>
                                <li>
                                    <div className="text-gray-700 hover:text-gray-700">Third Link</div>
                                </li>
                                <li>
                                    <div className="text-gray-700 hover:text-gray-700">Fourth Link</div>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-gray-700 tracking-widest text-sm mb-3">CATEGORIES</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <div className="text-gray-700 hover:text-gray-700">First Link</div>
                                </li>
                                <li>
                                    <div className="text-gray-700 hover:text-gray-700">Second Link</div>
                                </li>
                                <li>
                                    <div className="text-gray-700 hover:text-gray-700">Third Link</div>
                                </li>
                                <li>
                                    <div className="text-gray-700 hover:text-gray-700">Fourth Link</div>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-gray-700 tracking-widest text-sm mb-3">SUBSCRIBE</h2>
                            <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
                                <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                                    <label className="leading-7 text-sm text-gray-700" required>Placeholder</label>
                                    <input type="text" id="footer-field" name="footer-field" className="w-full bg-gray-700 bg-opacity-50 rounded border border-gray-700 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                                <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-gray-700 bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-700 rounded">Button</button>
                            </div>
                            <p className="text-gray-700 text-sm mt-2 md:text-left text-center">Bitters chicharrones fanny pack
                                <br className="lg:block hidden" />waistcoat green juice
                            </p>
                        </div>
                    </div>
                </div>
                <div className="bg-white ">
                    <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
                        <div className="flex title-font font-medium items-center md:justify-start justify-center text-gray-700">
                            <div className=" px-2 py-3 rounded-md">
                                <p className="text-2xl text-yellow-500 font-bold bg-blue font-mono">Cooking</p>
                            </div>
                        </div>
                        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                            <div className="text-gray-800">
                                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                </svg>
                            </div>
                            <div className="ml-3 text-gray-800">
                                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                </svg>
                            </div>
                            <div className="ml-3 text-gray-800">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                </svg>
                            </div>
                            <div className="ml-3 text-gray-800">
                                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                                </svg>
                            </div>
                        </span>
                    </div>
                </div>
            </footer>
        </div >
    )
}
