import React from 'react'
import Header from "./Header"
import Home from "./Home"
import {Routes,Route,Link,NavLink,BrowserRouter} from "react-router-dom"
import "./Header.css"
import News from "./News"
function App() {
  return (
   <>
   <Header></Header>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home></Home>}></Route>
    <Route path="/news/:id" element={<News></News>}></Route>
   </Routes>
   </BrowserRouter>
   </>
  )
}

export default App