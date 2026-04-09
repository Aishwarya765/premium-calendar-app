import { useState, useEffect } from "react";

export default function NotesSection({
  selectedDate,
  startDate,
  endDate,
  month,
  year,
}) {
  const [note, setNote] = useState("");

  let key = "general-note";

  // ✅ Correct key logic
  if (startDate && endDate) {
    key = `${year}-${month}-${startDate}-${endDate}`;
  } else if (selectedDate) {
    key = `${year}-${month}-${selectedDate}`;
  }

  useEffect(() => {
    const saved = localStorage.getItem(key);
    setNote(saved || "");
  }, [key]);

  const saveNote = () => {
    localStorage.setItem(key, note);
  };

  const clearNote = () => {
    localStorage.removeItem(key);
    setNote("");
  };

  return (
    <div className="mt-6 p-4 rounded-xl bg-white/60 backdrop-blur shadow">

      {/* TITLE */}
      <h3 className="font-semibold mb-3 text-gray-800">
        Notes{" "}
        {startDate && endDate
          ? `(Days ${startDate} - ${endDate})`
          : selectedDate
          ? `(Day ${selectedDate})`
          : ""}
      </h3>

      {/* TEXTAREA */}
      <textarea
        className="w-full border border-gray-300 p-3 rounded-lg 
        focus:outline-none focus:ring-2 focus:ring-indigo-400"
        rows="3"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Write note..."
      />

      {/* BUTTONS */}
      <div className="flex gap-2 mt-3">
        <button
          onClick={saveNote}
          className="px-4 py-2 rounded-lg bg-gradient-to-r 
          from-indigo-500 to-purple-500 text-white shadow 
          hover:scale-105 transition"
        >
          Save
        </button>

        <button
          onClick={clearNote}
          className="px-4 py-2 rounded-lg bg-red-500 text-white shadow 
          hover:scale-105 transition"
        >
          Clear
        </button>
      </div>
    </div>
  );
}