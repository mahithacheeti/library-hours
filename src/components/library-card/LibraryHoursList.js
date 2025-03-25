import React from "react";
import LibraryHoursItem from "./LibraryHoursItem";
import { extractAllDays, reorderFromToday } from "../../utils/dateUtils";

const LibraryHoursList = ({ weekTimes, showFullWeek }) => {
  const allDays = extractAllDays(weekTimes);

  const todayStr = new Date().toLocaleDateString("en-CA", {
    timeZone: "America/New_York",
  });

  const tomorrowStr = new Date(Date.now() + 86400000).toLocaleDateString(
    "en-CA",
    { timeZone: "America/New_York" }
  );

  let visibleDays = [];

  if (showFullWeek) {
    const ordered = reorderFromToday(allDays);
    visibleDays = ordered.slice(0, 7);
  } else {
    visibleDays = allDays.filter(
      (d) => d.date === todayStr || d.date === tomorrowStr
    );
  }

  return (
    <div>
      <h6 className="text-muted mb-2">
        {showFullWeek ? "Weekly Hours:" : "Open Hours:"}
      </h6>

      <ul className="list-unstyled open-hours-list">
        {visibleDays.map((entry) => (
          <LibraryHoursItem
            key={entry.date}
            entry={entry}
            todayStr={todayStr}
            tomorrowStr={tomorrowStr}
          />
        ))}
      </ul>
    </div>
  );
};

export default LibraryHoursList;
