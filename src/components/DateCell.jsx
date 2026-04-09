import { getIndianHolidays } from "../utils/getIndianHolidays";

export default function DateCell({
  day,
  startDate,
  endDate,
  onClick,
  month,
  year,
}) {
  const todayObj = new Date();

  const isToday =
    day === todayObj.getDate() &&
    month === todayObj.getMonth() &&
    year === todayObj.getFullYear();

  const isStart = day === startDate;
  const isEnd = day === endDate;

  const isInRange =
    startDate && endDate && day > startDate && day < endDate;

  // ✅ FIXED HOLIDAY LOGIC
  const holidays = getIndianHolidays(year);
  const holidayName = holidays[month]?.[day];

  return (
    <div className="relative group">

      <div
        onClick={() => onClick(day)}
        className={`p-3 text-center rounded-xl cursor-pointer 
        transition-all duration-200 font-medium

        ${isStart ? "bg-indigo-500 text-white scale-105 shadow-md" : ""}
        ${isEnd ? "bg-indigo-500 text-white scale-105 shadow-md" : ""}
        ${isInRange ? "bg-indigo-200" : ""}

        ${isToday ? "ring-2 ring-indigo-500 ring-offset-2 font-bold" : ""}

        ${holidayName ? "text-red-600 font-bold" : ""}

        hover:bg-indigo-100 hover:scale-105 hover:shadow-lg hover:-translate-y-1`}
      >
        {day}
      </div>

      {/* ✨ BEAUTIFUL TOOLTIP */}
      {holidayName && (
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 
        opacity-0 group-hover:opacity-100 transition-all duration-300 
        bg-gradient-to-r from-red-500 to-pink-500 text-white 
        text-xs px-3 py-1 rounded-lg shadow-xl whitespace-nowrap z-10">
          🎉 {holidayName}
        </div>
      )}
    </div>
  );
}