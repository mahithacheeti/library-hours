import React from "react";
import LibraryHeader from "./LibraryHeader";
import LibraryStatus from "./LibraryStatus";
import LibraryHoursList from "./LibraryHoursList";

const LibraryCard = ({
  name,
  url,
  contact,
  isOpen,
  weekTimes,
  showFullWeek,
}) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm">
        <div className="card-body d-flex flex-column justify-content-between">
          <LibraryHeader name={name} url={url} contact={contact} />
          <LibraryStatus isOpen={isOpen} weekTimes={weekTimes} />
          <LibraryHoursList weekTimes={weekTimes} showFullWeek={showFullWeek} />
        </div>
      </div>
    </div>
  );
};

export default LibraryCard;
