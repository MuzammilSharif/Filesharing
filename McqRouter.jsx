import React from 'react'
import {Routes,Route} from 'react-router-dom'
import McqPage2 from './McqPage2'
import Login from './Login'
import Preview from './Preview'

const McqRouter = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/Mcqpage2" element={<McqPage2/>}/>
            <Route path="/Preview" element={<Preview/>}/>
        </Routes>
    </div>
  )
}

export default McqRouter