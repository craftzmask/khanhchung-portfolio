import { useState, useEffect } from "react"

import Visitor from "./pages/sections/Visitor"
import Footer from "./pages/sections/Footer"
import Nav from "./pages/sections/Nav"
import AnimatedRoutes from "./pages/sections/AnimationRoutes"

function App() {
  const [visitors, setVisitors] = useState(0)
  const baseUrl = "https://yd2kaoaayalpkf6f4bro72sduu0azyaf.lambda-url.us-east-1.on.aws/"
  
  useEffect(() => {
    const userId = getOrCreateUserId()
    fetch(baseUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId })
    })
      .then((res) => res.json())
      .then((data) => setVisitors(data.visitors))
      .catch(console.error)
  }, [])


  return (
    <div className="flex flex-col gap-y-5 max-w-[600px] m-auto p-4 verflow-y-scroll">
      <Nav />
      <AnimatedRoutes />
      <Visitor visitors={visitors} />
      <Footer />
    </div>
  )
}

function getOrCreateUserId(): string {
  let id = localStorage.getItem("userId")
  if (!id) {
    id = crypto.randomUUID()
    localStorage.setItem("userId", id)
  }
  return id
}

export default App
