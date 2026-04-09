export function getIndianHolidays(year) {
  return {
    // Fixed holidays
    0: { 
        1: "New Year",
        26: "Republic Day"
    },
    3: { 14: "Tamil New Year" }, // April
    4: { 1: "Labour Day" }, // May
    7: { 15: "Independence Day" }, // Aug
    9: { 2: "Gandhi Jayanti",
        24: "Diwali"
     }, // Oct
    11: { 25: "Christmas" }, // Dec

    // Dynamic (approx for demo)
    2: { 8: "Holi" },     // March (varies)// varies
  };
}