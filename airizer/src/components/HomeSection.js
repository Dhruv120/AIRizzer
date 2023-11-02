import React from 'react'
import Homepage from './Homepage'
import Summarizer from '../Summarizer/Summarizer'
import Chatbot from '../ChatBot/Chatbot'
import {Routes,Route} from 'react-router-dom'
import ChatGpt from '../ChatGPT/ChatGpt'
import ImageGenerator from '../ImageGenerator/ImageGenerator'

const HomeSection = () => {
  return (
    <section className="home-section">

        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/summarizer" element={<Summarizer/>}/>
          <Route path="/chatbot" element={<Chatbot/>}/>
          <Route path='/imagegenerator' element={<ImageGenerator/>}/>
          <Route path='/chatgpt' element={<ChatGpt/>}/>


        </Routes>


        
    </section>
  )
}

export default HomeSection