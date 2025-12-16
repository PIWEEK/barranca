import { useState } from 'react';

import type { TimelineEventModel } from './models/timeline.model';
import timelineData from './data/timeline.json' assert { type: 'json' };

import TimerComponent from './components/Timer/timer';
import EventComponent from './components/Event/event';

import styles from './Timeline.module.css';
import HeroComponent from './components/Hero/Hero';

export default function TimelineComponent() {
  const firstDate = new Date(timelineData[0].time);
  const [currentDate, setCurrentDate] = useState(firstDate);
  return (
    <div className={styles.timeline}>
      <HeroComponent />
      <div className={styles['events-wrapper']}>
        <TimerComponent date={currentDate} />
        <div>
          {timelineData.map((event: TimelineEventModel) => (
            <EventComponent event={event} key={event.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
