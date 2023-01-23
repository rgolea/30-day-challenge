type ClockDigitalProps = {
  date: Date;
};

const formatter = Intl.NumberFormat(navigator.language, {
  minimumIntegerDigits: 2,
});

export function ClockDigital({ date }: ClockDigitalProps) {
  return (
    <div className="time">
      <span>
        {[date.getHours(), date.getMinutes(), date.getSeconds()]
          .map(formatter.format)
          .join(':')}
      </span>
    </div>
  );
}
