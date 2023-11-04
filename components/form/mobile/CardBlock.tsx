import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface CardDataProps {
  data: {
    name : string,
    id : string,
    leader: string,
    judge: string,
    score: number
  }
}

export default function CardBlock({data}: CardDataProps) {
  return (
    <Card className="w-11/12">
      <CardHeader>
        <CardTitle>{data.name}</CardTitle>
        <CardDescription>ID: {data.id}</CardDescription>
        <CardDescription>Leader: {data.leader}</CardDescription>
        <CardDescription>Judge: {data.judge}</CardDescription>
        <CardDescription>Score: {data.score} Points</CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-between">
        <Button>Evaluate</Button>
        <Button>Edit Evaluation</Button>
      </CardFooter>
    </Card>
  )
}
