import { Routes, Route, useLocation } from "react-router"
import { AnimatePresence, motion } from "framer-motion"
import Home from "@/pages/Home"
import About from "@/pages/About"
import Section from "@/components/ui/section"

const variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
}

export default function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.4 }}
      >
        <Section>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Section>
      </motion.div>
    </AnimatePresence>
  )
}
