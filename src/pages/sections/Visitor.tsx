import Section from "../../components/ui/section"

type Props = {
  visitors: number
}

export default function Visitor({ visitors }: Props) {
  return (
    <Section>
      <div className="text-center"> 
        🚀 Unique Visitor: <strong>{visitors}</strong>
      </div>
    </Section>
  )
}