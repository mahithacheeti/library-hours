import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import LibraryCard from "./LibraryCard";
import { fetchLibraryHours } from "../models/hoursModel";
import { formatLibraryData } from "../controllers/hoursController";

const Home = () => {
  const [libraries, setLibraries] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const raw = await fetchLibraryHours();
      const formatted = formatLibraryData(raw);
      setLibraries(formatted);
    };

    loadData();
  }, []);

  return (
    <>
      <Header />
      <main className="container py-5">
        <h2 className="mb-4">Library Hours</h2>
        <div className="row">
          {libraries.map((library) => (
            <LibraryCard
              key={library.lid}
              name={library.name}
              isOpen={
                library.times?.[0]?.[getTodayName()]?.times?.currently_open
              }
              url={library.url}
              contact={library.contact}
            />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

function getTodayName() {
  return new Date().toLocaleDateString("en-US", {
    weekday: "long",
    timeZone: "America/New_York",
  });
}

export default Home;
