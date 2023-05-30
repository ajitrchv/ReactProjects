import { useState } from "react"
import React from 'react'
import reviews from "./data"
import Review from "./components/Review"

function App() {
  return (
  <main>
    <Review reviews={reviews}/>
  </main> 
  )
}

export default App