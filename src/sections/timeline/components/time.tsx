interface TimeComponentProps {
  time: Date | string;
}

export const TimeComponent = ({ time }: TimeComponentProps) => {
  const formatTime = (inputTime: Date | string): string => {
    const dateObj = typeof inputTime === 'string' ? new Date(inputTime) : inputTime;

    return dateObj.toLocaleTimeString('ca-ES', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="text-2xl font-bold md:flex md:justify-end">
      <span>{formatTime(time)}</span>
    </div>
  );
};
