interface DateProps {
  date: Date | string;
}

export default function DateComponent({ date }: DateProps) {
  const formatDate = (inputDate: Date | string): string => {
    const dateObj = typeof inputDate === 'string' ? new Date(inputDate) : inputDate;

    return dateObj.toLocaleDateString('ca-ES', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  return (
    <div className="text-xl md:flex md:justify-end">
      {formatDate(date)}
    </div>
  );
}
