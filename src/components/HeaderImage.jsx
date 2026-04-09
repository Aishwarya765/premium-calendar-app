import calendarImg from "../assets/calendar.jpg";

export default function HeaderImage() {
  return (
    <div className="md:w-1/3">
      <img
        src={calendarImg}
        alt="calendar"
        className="rounded-xl w-full h-full object-cover shadow-md"
      />
    </div>
  );
}