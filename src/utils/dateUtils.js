export const formatDisplayDate = (dateStr) => {
  if (!dateStr) return "";
  const date = new Date(dateStr + "T00:00:00");
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
};

export const extractAllDays = (weeks) => {
  if (!Array.isArray(weeks)) return [];
  const merged = [];

  weeks.forEach((week) => {
    Object.entries(week).forEach(([day, data]) => {
      if (data?.date) {
        merged.push({
          date: data.date,
          day,
          status: data?.times?.status || "closed",
          rendered: data?.rendered || "—",
        });
      }
    });
  });

  merged.sort((a, b) => new Date(a.date) - new Date(b.date));
  return merged;
};

export const reorderFromToday = (days) => {
  const todayStr = new Date().toLocaleDateString("en-CA", {
    timeZone: "America/New_York",
  });
  const todayIndex = days.findIndex((d) => d.date === todayStr);
  if (todayIndex === -1) return days;
  return [...days.slice(todayIndex), ...days.slice(0, todayIndex)];
};
