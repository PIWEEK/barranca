import { useState } from "react";

import DateComponent from "./components/date";
import { TimeComponent } from "./components/time";

import type { TimelineEventModel } from "./models/timeline.model";
import timelineData from "./data/timeline.json" assert { type: "json" };

export default function TimelineComponent() {
  const firstDate = new Date(timelineData[0].time);
  const [currentDate, setCurrentDate] = useState(firstDate);
  return (
    <div className="min-h-screen relative bg-slate-900">
      <aside className="w-max sticky top-10 end-10 ms-auto text-end pt-4">
        <DateComponent date={currentDate} />
        <TimeComponent time={currentDate.toISOString()} />
      </aside>
      {timelineData.map((event: TimelineEventModel) => (
        <div key={event.id}>
          <p>{event.time} </p>
          <h2>{event.title}</h2>
          <p>{event.content}</p>
        </div>
      ))} 
    </div>
  );
}