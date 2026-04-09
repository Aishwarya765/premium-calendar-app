import { useState } from "react";
import { getDaysInMonth } from "../utils/dateUtils";
import DateCell from "./DateCell";
import NotesSection from "./NotesSection";

export default function CalendarGrid() {
  const today = new Date();

  const [month, setMonth] = useState(today.getMonth());
  const [year, setYear] = useState(today.getFullYear());

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);

  const days = getDaysInMonth(year, month);

  // ✅ Selection logic
  const handleClick = (day) => {
    setSelectedDate(day);

    if (!startDate || (startDate && endDate)) {
      setStartDate(day);
      setEndDate(null);
    } else {
      if (day === startDate) {
        setEndDate(null);
      } else if (day < startDate) {
        setStartDate(day);
      } else {
        setEndDate(day);
      }
    }
  };

  // Navigation
  const handlePrev = () => {
    if (month === 0) {
      setMonth(11);
      setYear((prev) => prev - 1);
    } else {
      setMonth((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (month === 11) {
      setMonth(0);
      setYear((prev) => prev + 1);
    } else {
      setMonth((prev) => prev + 1);
    }
  };

  const goToToday = () => {
    const now = new Date();
    setMonth(now.getMonth());
    setYear(now.getFullYear());
    setStartDate(null);
    setEndDate(null);
    setSelectedDate(null);
  };

  return (
    <div className="md:w-2/3">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-4">

        <button
          onClick={handlePrev}
          className="px-4 py-1 rounded-full bg-white/60 backdrop-blur 
          hover:bg-white shadow transition"
        >
          ⬅
        </button>

        <h2 className="font-bold text-xl text-gray-800 tracking-wide">
          {new Date(year, month).toLocaleString("default", {
            month: "long",
            year: "numeric",
          })}
        </h2>

        <div className="flex gap-2">
          <button
            onClick={goToToday}
            className="px-4 py-1 rounded-full bg-gradient-to-r 
            from-indigo-500 to-purple-500 text-white shadow-md 
            hover:scale-105 transition"
          >
            Today
          </button>

          <button
            onClick={handleNext}
            className="px-4 py-1 rounded-full bg-white/60 backdrop-blur 
            hover:bg-white shadow transition"
          >
            ➡
          </button>
        </div>
      </div>

      {/* DAYS */}
      <div className="grid grid-cols-7 mb-2 text-center font-semibold text-gray-600">
        <div>Sun</div>
        <div>Mon</div>
        <div>Tue</div>
        <div>Wed</div>
        <div>Thu</div>
        <div>Fri</div>
        <div>Sat</div>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-7 gap-2">
        {[...Array(days)].map((_, i) => {
          const day = i + 1;

          return (
            <DateCell
              key={day}
              day={day}
              startDate={startDate}
              endDate={endDate}
              onClick={handleClick}
              month={month}
              year={year}
            />
          );
        })}
      </div>

      {/* NOTES */}
      <NotesSection
        selectedDate={selectedDate}
        startDate={startDate}
        endDate={endDate}
        month={month}
        year={year}
      />
    </div>
  );
}