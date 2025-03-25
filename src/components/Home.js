import React, { useEffect, useState } from "react";
import { fetchLibraryHours } from "../models/hoursModel";
import { formatLibraryData } from "../controllers/hoursController";
import LibraryCard from "./library-card/LibraryCard";
import Header from "./Header";
import Footer from "./Footer";
import LibraryMap from "./LibraryMap";

const Home = () => {
  const [libraries, setLibraries] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [showFullWeek, setShowFullWeek] = useState(false);
  const [minDate, setMinDate] = useState("");
  const [maxDate, setMaxDate] = useState("");

  useEffect(() => {
    const loadData = async () => {
      const raw = await fetchLibraryHours();
      const formatted = formatLibraryData(raw);
      setLibraries(formatted);

      const allDates = formatted
        .flatMap((lib) =>
          lib.times?.flatMap((week) =>
            Object.values(week).map((day) => day?.date)
          )
        )
        .filter(Boolean);

      const sortedDates = [...new Set(allDates)].sort(
        (a, b) => new Date(a) - new Date(b)
      );
      setMinDate(sortedDates[0]);
      setMaxDate(sortedDates[sortedDates.length - 1]);
    };

    loadData();
  }, []);

  return (
    <>
      <Header />
      <div className="container">
        <div className="d-flex justify-content-between flex-wrap align-items-center mb-4">
          <h2 className="mb-2 mb-md-0">Library Hours</h2>

          <div className="d-flex align-items-center gap-2">
            <input
              type="date"
              className="form-control form-control-sm"
              value={selectedDate || ""}
              onChange={(e) => setSelectedDate(e.target.value)}
              min={minDate}
              max={maxDate}
              title="Pick a date to view specific hours"
            />
            <button
              className="btn btn-outline-primary btn-sm text-nowrap"
              onClick={() => setShowFullWeek((prev) => !prev)}
            >
              {showFullWeek ? "View Daily Hours" : "View Weekly Hours"}
            </button>
          </div>
        </div>

        <div className="row">
          {libraries.map((library) => {
            const today = new Date().toLocaleDateString("en-US", {
              timeZone: "America/New_York",
              weekday: "long",
            });
            const todayData = library?.times?.[0]?.[today];
            const isOpen = todayData?.times?.currently_open === true;

            return (
              <LibraryCard
                key={library.lid}
                name={library.name}
                isOpen={isOpen}
                weekTimes={library.times}
                url={library.url}
                contact={library.contact}
                showFullWeek={showFullWeek}
                selectedDate={selectedDate}
              />
            );
          })}
        </div>

        <h3 className="mb-3 mt-4">📍 Library Locations on Campus</h3>
        <div className="row mt-4">
          <div className="col">
            <LibraryMap libraries={libraries} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
