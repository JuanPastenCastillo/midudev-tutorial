import React, { useState } from 'react'
import '../cssArchives/GiftHome-main-wrapper.css'
import ListOfGifs from './components/ListOfGifs.js'
import { Route as WouRouter, Link as WouLink } from "wouter"
// import { Link, Outlet, Route, Routes } from 'react-router-dom'

// const GIFS = [
//  "https://media3.giphy.com/media/FPjJbmGUVZmC92zO4c/giphy.gif?cid=790b7611ca24c2e16b02b3ea11d9865ac672d51d156eacc6&rid=giphy.gif&ct=g",
//  "https://media4.giphy.com/media/10fW0DIoV8Rnkk/giphy.gif?cid=790b761139d95ab416438391802bdee64e126e2e9bbea7f1&rid=giphy.gif&ct=g",
// ]

// const MORE_GIFS = [
//  "https://media1.giphy.com/media/3qj3VtNL2nhmw/giphy.gif?cid=790b7611b54673dc2a5edf392ac08617ba6b4f99b2cbcfaa&rid=giphy.gif&ct=g",
//  "https://media1.giphy.com/media/26FPEW1BVHckbjpDi/giphy.gif?cid=ecf05e47437dd7o1tbgielk52o85ika35o6bl3p1dgxdadml&rid=giphy.gif&ct=g",
//  "https://media4.giphy.com/media/r7bjWH3xADPZObjK0y/giphy.gif?cid=790b7611f8620f28c8a87c11fb6e741667fbaa2e70a059ee&rid=giphy.gif&ct=g",
// ]

const GiftHome = () => {
  const [keyword, setKeyword] = useState('yingyang')

  return (
    <div className="App">
      <div className="GiftHome-main-wrapper">
        <h2>Work!</h2>
        <button className="buttonGiftHome" onClick={() => setKeyword('Norway')}>
          Change gifs
        </button>

        <WouLink to="/giftApplication/panda">Pandas</WouLink>
        <WouLink to="/giftApplication/box">Box</WouLink>

        <WouRouter
         component={ListOfGifs}
         path="/giftApplication/:keyword"
        />

      </div>
    </div>
  )
}

export default GiftHome
