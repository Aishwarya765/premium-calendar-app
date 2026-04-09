import HeaderImage from "./HeaderImage";
import CalendarGrid from "./CalendarGrid";

export default function Calendar() {
  return (
    <div
      className="relative backdrop-blur-lg bg-white/70 
      rounded-3xl shadow-2xl p-6 max-w-5xl w-full border border-white/40"
    >

      {/* Hanging rings (wall calendar effect) */}
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 flex gap-4">
        <div className="w-4 h-4 bg-gray-700 rounded-full"></div>
        <div className="w-4 h-4 bg-gray-700 rounded-full"></div>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <HeaderImage />
        <CalendarGrid />
      </div>

    </div>
  );
}