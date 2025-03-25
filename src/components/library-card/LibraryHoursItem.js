import React from "react";
import { formatDisplayDate } from "../../utils/dateUtils";

const LibraryHoursItem = ({ entry, todayStr, tomorrowStr }) => {
  return (
    <li
      className={`py-2 px-2 rounded d-flex justify-content-between align-items-center "highlight-today"`}
    >
      <div className="d-flex flex-column">
        <span className="fw-semibold">
          {entry.day}
          {(entry.date === todayStr || entry.date === tomorrowStr) && (
            <span className="text-muted small ms-1">
              ({entry.date === todayStr ? "Today" : "Tomorrow"})
            </span>
          )}
        </span>
        <span className="text-muted small">
          {formatDisplayDate(entry.date)}
        </span>
      </div>
      <span className="open-hours-time text-muted fw-medium">
        {entry.status === "closed" ? "Closed" : entry.rendered}
      </span>
    </li>
  );
};

export default LibraryHoursItem;
