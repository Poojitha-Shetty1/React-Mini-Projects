import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import summer from './assets/summer.jpg'
import winter from './assets/winter.jpg'
import rainy from './assets/rainy.jpg'


function App() {


let arr =[
  {id:1, content:"Summer brings golden sunsets, tropical beaches, warm breezes and endless adventures under bright sunny skies. The cheerful atmosphere, colorful evenings and refreshing ocean waves make every moment feel lively, energetic and unforgettable for vacations and outdoor memories.",
  title:"Summer" , img:summer
  },
  {
    id:2,content:"Winter fills the world with snowy mornings, chilly winds and cozy nights beside warm lights. The peaceful landscapes, soft snowfall and calm atmosphere create a relaxing season that feels magical, comforting and beautifully serene during every cold evening.",
    title:"Winter" , img:winter
  },
  {id:3,content:" Rainy season brings cool showers, cloudy skies and the soothing sound of falling rain across the streets and trees. The fresh earthy fragrance, relaxing weather and peaceful ambience make every rainy day feel refreshing, calm and deeply comforting."
    ,title:"Rainy" ,img:rainy
  }
]


let result = arr.map((item,ind)=>{
  return (
  <div className='card' key={item.id}>
    <h1>{item.title}</h1>
    <p>{item.content}</p>
    <div className='round'>
    <img src={item.img} alt="" />
    </div>
    <button className='btn'>More</button>
  </div>
  
  )
})

  return (
   <div>
    <div className='container'>
      {result}
   </div>
   </div>
  )
}

export default App

