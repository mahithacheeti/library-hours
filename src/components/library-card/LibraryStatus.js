import React from "react";

const LibraryStatus = ({ isOpen, weekTimes }) => {
  const now = new Date();
  const today = now.toLocaleDateString("en-US", {
    weekday: "long",
    timeZone: "America/New_York",
  });

  const todayEntry = weekTimes?.[0]?.[today];
  const hours = todayEntry?.times?.hours?.[0];

  const normalize = (str) => str?.toLowerCase().replace(/[\s:]/g, "");

  const is24Hours =
    todayEntry?.rendered?.toLowerCase().includes("24") ||
    (normalize(hours?.from) === "12am" && normalize(hours?.to) === "1159pm");

  const getUpcomingOpenTime = () => {
    const nowEastern = new Date(
      new Date().toLocaleString("en-US", { timeZone: "America/New_York" })
    );

    for (let i = 0; i < 7; i++) {
      const date = new Date(nowEastern);
      date.setDate(nowEastern.getDate() + i);
      const weekday = date.toLocaleDateString("en-US", {
        weekday: "long",
        timeZone: "America/New_York",
      });

      const entry = weekTimes?.[0]?.[weekday];
      const timeRange = entry?.times?.hours?.[0];

      if (entry?.times?.status === "open" && timeRange?.from) {
        return {
          day: i === 0 ? "Today" : i === 1 ? "Tomorrow" : weekday,
          time: timeRange.from,
        };
      }
    }

    return null;
  };

  const nextOpen = !isOpen ? getUpcomingOpenTime() : null;

  return (
    <div className="mb-3 d-flex align-items-center gap-2">
      <span
        className={`status-badge ${isOpen ? "status-open" : "status-closed"}`}
      >
        {isOpen ? "OPEN" : "CLOSED"}
      </span>

      {isOpen ? (
        is24Hours ? (
          <span className="small text-muted status-24hr">Open 24 Hours</span>
        ) : (
          hours?.to && (
            <span className="small text-muted">Closes at {hours.to}</span>
          )
        )
      ) : (
        <span className="small text-muted">
          {nextOpen
            ? `Opens ${nextOpen.day} at ${nextOpen.time}`
            : "No upcoming hours"}
        </span>
      )}
    </div>
  );
};

export default LibraryStatus;
