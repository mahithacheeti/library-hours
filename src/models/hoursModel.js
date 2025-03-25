export async function fetchLibraryHours() {
  const res = await fetch(
    "https://libcal.utk.edu/widget/hours/grid?format=json&weeks=4&systemTime=0"
  );
  const json = await res.json();
  return json.locations || [];
}
