import { House, CircleUserRound } from "lucide-react"
import { Link, useLocation } from "react-router"

import { ModeToggle } from "@/components/mode-toggle"
import Section from "@/components/ui/section"

const Nav = () => {
  const location = useLocation();
  
  const links = [
    {
      id: 1,
      icon: <House size={28} />,
      to: "/",
    },
    {
      id: 2,
      icon: <CircleUserRound size={28}/>,
      to: "/about",
    }
  ]

  const linkStyle = "flex justify-center items-center rounded-full w-full"

  return (
    <Section>
        <nav>
          <ul className="flex gap-x-10 justify-around">
            {links.map(link => 
              <Link
                key={link.id}
                to={link.to}
                className={`${linkStyle} ${location.pathname === link.to ? "dark:bg-[#2C2C2C] bg-[#F7F7F7]" : ""} dark:hover:bg-[#2C2C2C] hover:bg-[#F7F7F7] hover:scale-105 transition-transform duration-300`}
              >
                {link.icon}
              </Link>
            )}
            <div className={linkStyle}>
              <ModeToggle />
            </div>
          </ul>
        </nav>
    </Section>
  )
}

export default Nav