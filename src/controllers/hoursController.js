function normalizeTimeString(timeStr) {
  if (!timeStr) return null;

  const normalized = timeStr
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "")
    .replace(/(am|pm)/, " $1");

  const date = new Date(`1970-01-01T${normalized.toUpperCase()}`);
  if (isNaN(date.getTime())) return timeStr;

  return date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });
}

function formatWeeks(weeks) {
  if (!Array.isArray(weeks)) return [];

  return weeks.map((week) => {
    const formattedWeek = {};
    for (const [day, entry] of Object.entries(week)) {
      const formattedHours =
        entry?.times?.hours?.map((h) => ({
          from: normalizeTimeString(h.from),
          to: normalizeTimeString(h.to),
        })) || [];

      formattedWeek[day] = {
        ...entry,
        times: {
          ...entry.times,
          hours: formattedHours,
        },
      };
    }
    return formattedWeek;
  });
}

export function formatLibraryData(rawLibraries) {
  return rawLibraries.map((lib) => {
    let contactLink = "";

    if (lib.contact && lib.contact.includes("mailto:")) {
      const match = lib.contact.match(/href=["'](mailto:[^"']+)["']/);
      contactLink = match ? match[1] : "";
    }

    return {
      lid: lib.id,
      name: lib.name,
      contact: contactLink || "No Contact Found",
      url: lib.url || "No URL Found",
      location: {
        lat: parseFloat(lib.lat) || null,
        lng: parseFloat(lib.long) || null,
      },
      times: formatWeeks(lib.weeks || []),
    };
  });
}
