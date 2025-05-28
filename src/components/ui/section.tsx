import { Card, CardContent } from "./card"
import type { ReactElement } from "react"

const Section = (props: { children: ReactElement }) => {
  return (
    <Card>
      <CardContent>
        {props.children}
      </CardContent>
    </Card>
  )
}

export default Section