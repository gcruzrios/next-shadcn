"use client"
import * as React from "react"
 
import { CalendarShad } from "@/components/ui/calendar"

export default function Calendar() {
    const [date, setDate] = React.useState<Date | undefined>(new Date())
  return (
    <div>
     <CalendarShad
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border shadow"
    />
    </div>
  );
}