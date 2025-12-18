import { useState, useCallback } from 'react';

import type TimelineEventModel from './models/timeline.model';
import type ActorModel from './models/actors.model';

import TimerComponent from './components/Timer/timer';
import EventComponent from './components/Event/event';

import styles from './Timeline.module.css';
import HeroComponent from './components/Hero/Hero';
import { useTimeline } from '../../hooks/useTimeline';

// Cast the JSON data to the correct type

export default function TimelineComponent() {
  const { events, actors } = useTimeline();

  const firstDate = new Date(events[0].time);
  const [currentDate, setCurrentDate] = useState(firstDate);

  const updateEventsDate = useCallback((dateString: string) => {
    const dateObj = new Date(dateString);
    setCurrentDate(dateObj);
  }, []);

  return (
    <div className={styles.timeline}>
      <HeroComponent />
      <div className={styles['events-wrapper']}>
        <TimerComponent date={currentDate} />

        <div>
          {events.map((event: TimelineEventModel) => (
            <EventComponent
              event={event}
              actors={actors as ActorModel[]}
              onVisible={updateEventsDate}
              key={event.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
