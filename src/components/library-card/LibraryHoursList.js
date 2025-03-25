import React from "react";
import LibraryHoursItem from "./LibraryHoursItem";
import { extractAllDays, reorderFromToday } from "../../utils/dateUtils";

const LibraryHoursList = ({ weekTimes, showFullWeek, selectedDate }) => {
  const allDays = extractAllDays(weekTimes);

  const todayStr = new Date().toLocaleDateString("en-CA", {
    timeZone: "America/New_York",
  });

  const tomorrowStr = new Date(Date.now() + 86400000).toLocaleDateString(
    "en-CA",
    { timeZone: "America/New_York" }
  );

  let visibleDays = [];

  if (selectedDate) {
    const selectedIndex = allDays.findIndex((d) => d.date === selectedDate);
    if (selectedIndex !== -1) {
      if (showFullWeek) {
        const start = Math.max(0, selectedIndex - 3);
        const end = selectedIndex + 4;
        visibleDays = allDays.slice(start, end);
      } else {
        visibleDays = [allDays[selectedIndex]];
      }
    }
  } else {
    if (showFullWeek) {
      const ordered = reorderFromToday(allDays);
      visibleDays = ordered.slice(0, 7);
    } else {
      visibleDays = allDays.filter(
        (d) => d.date === todayStr || d.date === tomorrowStr
      );
    }
  }

  return (
    <div>
      <h6 className="text-muted mb-2">
        {selectedDate
          ? "Hours for Selected Date:"
          : showFullWeek
          ? "Weekly Hours:"
          : "Open Hours:"}
      </h6>

      <ul className="list-unstyled open-hours-list">
        {visibleDays.map((entry) => (
          <LibraryHoursItem
            key={entry.date}
            entry={entry}
            todayStr={todayStr}
            tomorrowStr={tomorrowStr}
            selectedDate={selectedDate}
          />
        ))}
      </ul>
    </div>
  );
};

export default LibraryHoursList;
