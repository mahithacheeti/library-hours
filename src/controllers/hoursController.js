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
      times: lib.weeks || [],
    };
  });
}
