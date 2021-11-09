import React, { useEffect, useState } from 'react'
import { AcademicCapIcon, ArrowLeftIcon, ClockIcon, UserGroupIcon } from '@heroicons/react/solid'
import detail from '../data/detail-recipe.json'

import { useNavigate } from 'react-router-dom';


export default function Recipe() {

    const [data, setData] = useState([])
    const [author, setAuthor] = useState([])
    const [ingredient, setIngredient] = useState([])
    const [step, setStep] = useState([])
    const navigate = useNavigate();


    useEffect(() => {

        const getDetail = async () => {
            setIngredient(detail[0].ingredient);
            setData(detail[0]);
            setAuthor(detail[0].author)
            setStep(detail[0].step)
        }

        getDetail()

    }, [data])
    return (
        <div className="bg-gray-100">
            <div className="bg-white w-full p-2">
                <div className="max-w-screen-md mx-auto  items-center flex justify-between">
                    <div className="w-1/2 flex justify-between">
                        <p className="text-3xl lg:text-4xl font-bold mr-4 text-yellow-400">Cooking</p>
                    </div>
                    <div className="w-1/2 flex justify-end">
                        <input type="search" className="bg-gray-200  px-4 py-2 w-3/4 lg:w-3/4 rounded-large text-black  focus:outline-none " placeholder="cari" />
                    </div>
                </div>
            </div>

            <div className="max-w-screen-md mx-auto lg:flex ">

                <div className=" w-full min-h-2-screen relative ">
                    <div className=" " style={{
                        backgroundImage: `url(${'https://www.masakapahariini.com/wp-content/uploads/2019/04/semur-bebek-780x440.jpg'})`, backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: '',
                    }}>
                        <div className="bg-black rounded-b-xl p-8 h-80 bg-opacity-40">
                            <button>
                                <ArrowLeftIcon className="w-14 text-white" onClick={() => navigate(-1)} />
                            </button>
                        </div>
                    </div>
                    <div className="bg-white shadow-md  px-12 pt-6 rounded-t-large -mt-12 w-full rounded-b-large mb-2">
                        <div className="flex justify-center">
                            <div className="py-2 rounded-lg px-14 bg-gray-500">
                                <span className="" ></span>
                            </div>
                        </div>
                        <div className="py-12">
                            <p className="text-3xl lg:text-4xl text-gray-700 font-bold mb-1 font-mono">
                                {data.title}
                            </p>
                            <p className="mb-6 text-gray-600 font-light text-md">
                                Author : {author.user} | Published : {author.datePublished}
                            </p>
                            <div className="flex gap-4 -ml-4" >
                                <div className="w-1/3 bg-green-100 flex justify-center px-12 py-4  rounded-xl">
                                    <div>
                                        <ClockIcon className="w-12 lg:w-20 text-green-400" />
                                        <p className=" text-center text-green-400 text-md lg:text-xl  font-bold">{data.times}</p>
                                    </div>
                                </div>
                                <div className="w-1/3 bg-blue-100 px-12 py-4  flex justify-center  rounded-xl">

                                    <div>
                                        <UserGroupIcon className="w-12 lg:w-20 text-blue-400" />
                                        <p className="text-center text-blue-400 text-md lg:text-xl font-bold">{data.servings}</p>
                                    </div>


                                </div>
                                <div className="w-1/3 bg-yellow-100 px-12 py-4  flex justify-center rounded-xl">
                                    <div>
                                        <AcademicCapIcon className="w-12 lg:w-20 text-yellow-400" />
                                        <p className="text-center text-yellow-400 text-md lg:text-xl font-bold">{data.dificulty}</p>
                                    </div>

                                </div>
                            </div>
                            <div>
                                <p className="text-4xl font-bold text-yellow-500 py-4 mt-4 font-mono">
                                    Ingredients
                                </p>

                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-2">
                                    {
                                        ingredient.map((ingredient, index) => (
                                            <p className="text-lg text-gray-700 font-medium my-1"><span className="mx-2">{index + 1}.</span>{ingredient}</p>
                                        ))
                                    }
                                </div>
                            </div>
                            <div>
                                <p className="text-4xl font-bold text-yellow-500 py-6 mt-4 font-mono">
                                    Directions
                                </p>
                                <div>
                                    {
                                        step.map((step, index) => (
                                            <p className="text-lg text-gray-700 text-justify font-medium my-1">{step}</p>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

         
                <div className="bg-white mt-6">
                    <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
                        <div className="flex title-font font-medium items-center md:justify-start justify-center text-gray-700">
                            <div className=" px-2 py-3 rounded-md">
                                <p className="text-2xl text-yellow-400 font-bold bg-blue font-mono">Cooking</p>
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
         


        </div>
    )
}
