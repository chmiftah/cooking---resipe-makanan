
import React from 'react'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Home from '../view/Home'
import Recipe from '../view/Recipe'

export default function ReactRouter() {
    return (
       <BrowserRouter>
       <Routes>
           <Route exact path="/" element={<Home/>}/>
           <Route  path="/recipes" element={<Recipe/>}/>
           <Route  path="/*" element={<Home/>}/>
       </Routes>
       </BrowserRouter>
    )
}
