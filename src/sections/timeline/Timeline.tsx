import { useState } from 'react';

import type { TimelineEventModel } from './models/timeline.model';
import timelineData from './data/timeline.json' assert { type: 'json' };

import TimerComponent from './components/timer/timer';
import EventComponent from './components/event/event';

import styles from './Timeline.module.css';

export default function TimelineComponent() {
  const firstDate = new Date(timelineData[0].time);
  const [currentDate, setCurrentDate] = useState(firstDate);
  return (
    <div className="min-h-screen relative bg-slate-900 ">
      <TimerComponent date={currentDate} />
      <div className={styles.timeline}>
        {timelineData.map((event: TimelineEventModel) => (
          <EventComponent event={event} key={event.id} />
        ))}
      </div>
    </div>
  );
}
