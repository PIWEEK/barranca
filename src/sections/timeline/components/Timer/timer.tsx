interface DateProps {
  date: Date | string;
}

export default function TimerComponent({ date }: DateProps) {
  const formatDate = (): string => {
    const dateObj = typeof date === 'string' ? new Date(date) : date;

    return dateObj.toLocaleDateString('ca-ES', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  const formatTime = (): string => {
    const dateObj = typeof date === 'string' ? new Date(date) : date;

    return dateObj.toLocaleTimeString('ca-ES', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <aside className="w-max sticky top-10 end-10 ms-auto text-end pt-4 text-xl flex flex-col md:justify-end">
      <span>{formatDate()}</span>
      <span>{formatTime()}</span>
    </aside>
  );
}
