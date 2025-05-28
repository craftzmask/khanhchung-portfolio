import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Heart } from "lucide-react"

const About = () => {
  return (
      <Card className="bg-card text-foreground border-0 p-0 shadow-none">
        <CardHeader>
          <h2 className="text-xl font-bold tracking-tight">👋 About Me</h2>
        </CardHeader>
        <CardContent className="space-y-4 text-sm leading-relaxed">
          <p className="text-base">
            I'm a Master's student in Software Engineering at <strong>San José State University</strong>, 
            specializing in <strong>Enterprise Platforms</strong> with a focus on <strong>Distributed Systems</strong> and <strong>Cloud Computing</strong>.
          </p>
          <p className="text-base">
            I've completed the Full Stack Open program from <strong>University of Helsinki</strong>, with hands-on experience in <strong>React.js</strong>, <strong>Express.js</strong>, <strong>TypeScript</strong>, and <strong>PostgreSQL</strong>.
          </p>
          <p className="text-base">
            One of my proudest achievements is {" "}
            <strong>
              <a
                className="underline"
                target="_blank"
                rel="noopener noreferrer"
                href="https://fedbridge.app/">
                  FedBridge
              </a>
            </strong>, 
            an AI-powered job-matching platform built in a team of four to help federal workers — recognized by faculty and led to an IBM referral.
          </p>

          <p className="flex items-center gap-x-2 italic text-muted-foreground text-base">
            I <Heart className="text-red-400" /> building products that have impact in the real world.
          </p>
        </CardContent>
      </Card>
  )
}

export default About