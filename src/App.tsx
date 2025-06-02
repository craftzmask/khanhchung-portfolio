import Footer from "./pages/sections/Footer"
import Nav from "./pages/sections/Nav"
import AnimatedRoutes from "./pages/sections/AnimationRoutes"

function App() {
  return (
    <div className="flex flex-col gap-y-5 max-w-[600px] m-auto p-4 verflow-y-scroll">
      <Nav />
      <AnimatedRoutes />
      <Footer />
    </div>
  )
}

export default App
