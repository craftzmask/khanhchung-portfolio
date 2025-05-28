import Section from "../../components/ui/section"

const Footer = () => {
  return (
    <Section>
      <footer className="text-center"> 
        © {new Date().getFullYear()} Khanh Chung. All rights reserved.
      </footer>
    </Section>
  )
}

export default Footer