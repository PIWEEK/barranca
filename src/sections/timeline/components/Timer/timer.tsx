import { useEffect, useRef, useMemo, useState, useCallback } from 'react';

import type DateProps from './timer.model';
import styles from './timer.module.css';

const easing = 'cubic-bezier(0.175, 0.885, 0.32, 1.275)';

export default function TimerComponent({ date, warning = false }: DateProps) {
  const dateRef = useRef<HTMLSpanElement>(null);
  const timeRef = useRef<HTMLSpanElement>(null);
  const prevDateRef = useRef<string | null>(null);
  const isFirstRender = useRef(true);

  const parsedDate = useMemo(() => {
    return typeof date === 'string' ? new Date(date) : date;
  }, [date]);

  // Store displayed values separately to control when they update
  const [displayedDate, setDisplayedDate] = useState(() =>
    parsedDate.toLocaleDateString('ca-ES', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })
  );

  const [displayedTime, setDisplayedTime] = useState(() =>
    parsedDate.toLocaleTimeString('ca-ES', {
      hour: '2-digit',
      minute: '2-digit',
    })
  );

  const eventDate = new Date('2024-10-29T00:00:00');

  const isEventDay = eventDate.toDateString() === parsedDate.toDateString();

  const remainingTimeinDaysToEvent = Math.floor(
    (eventDate.getTime() - parsedDate.getTime()) / (1000 * 60 * 60 * 24) + 1
  );

  // Render text as individual character spans
  const renderCharacters = useCallback((text: string) => {
    return text.split('').map((char, index) => (
      <span key={index} className={styles.char} style={{ display: 'inline-block' }}>
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  }, []);

  useEffect(() => {
    const currentDateStr = parsedDate.toISOString();

    // Skip animation on first render
    if (isFirstRender.current) {
      isFirstRender.current = false;
      prevDateRef.current = currentDateStr;
      return;
    }

    if (prevDateRef.current !== null && prevDateRef.current !== currentDateStr) {
      const rollOutKeyframes: Keyframe[] = [
        { transform: 'translateY(0)', opacity: 1 },
        { transform: 'translateY(-100%)', opacity: 0 },
      ];

      const rollInKeyframes: Keyframe[] = [
        { transform: 'translateY(100%)', opacity: 0 },
        { transform: 'translateY(0)', opacity: 1 },
      ];

      const getAnimationOptions = (index: number): KeyframeAnimationOptions => ({
        duration: 130,
        easing: easing,
        fill: 'forwards' as FillMode,
        delay: index * 20,
      });

      const animateCharacters = async (
        container: HTMLSpanElement | null,
        newValue: string,
        setValue: (val: string) => void
      ) => {
        if (!container) return;

        const chars = container.querySelectorAll<HTMLSpanElement>(`.${styles.char}`);

        await Promise.all(
          Array.from(chars).map(
            (char, index) => char.animate(rollOutKeyframes, getAnimationOptions(index)).finished
          )
        );

        setValue(newValue);
        await new Promise(requestAnimationFrame);

        const newChars = container.querySelectorAll<HTMLSpanElement>(`.${styles.char}`);
        newChars.forEach((char, index) =>
          char.animate(rollInKeyframes, getAnimationOptions(index))
        );
      };

      // New formatted values
      const newFormattedDate = parsedDate.toLocaleDateString('ca-ES', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      });

      const newFormattedTime = parsedDate.toLocaleTimeString('ca-ES', {
        hour: '2-digit',
        minute: '2-digit',
      });

      // Only animate date if the day changed
      if (newFormattedDate !== displayedDate) {
        animateCharacters(dateRef.current, newFormattedDate, setDisplayedDate);
      }

      // Always animate time
      animateCharacters(timeRef.current, newFormattedTime, setDisplayedTime);
    }

    prevDateRef.current = currentDateStr;
  }, [parsedDate, displayedDate, displayedTime]);

  return (
    <aside className={styles.timer}>
      <span ref={dateRef} className={styles.date}>
        {renderCharacters(displayedDate)}
      </span>
      <span ref={timeRef} className={`${styles.time} ${warning ? styles.warning : ''}`}>
        {renderCharacters(displayedTime)}
      </span>
      {!isEventDay && (
        <span className={styles.remaining}>
          {renderCharacters(
            `${
              remainingTimeinDaysToEvent === 1 ? 'Falta' : 'Falten'
            } ${remainingTimeinDaysToEvent} ${remainingTimeinDaysToEvent === 1 ? 'dia' : 'dies'}`
          )}
        </span>
      )}
    </aside>
  );
}
