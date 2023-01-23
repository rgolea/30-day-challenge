export type ClockContainerProps = {
  children: React.ReactNode[];
};
export function ClockContainer({ children }: ClockContainerProps){
  return (
    <div className="clock">
      <div className="outer-clock-face">
        <div className="marking marking-one"></div>
        <div className="marking marking-two"></div>
        <div className="marking marking-three"></div>
        <div className="marking marking-four"></div>
        <div className="inner-clock-face">
          {children}
        </div>
      </div>
    </div>
  );
}
