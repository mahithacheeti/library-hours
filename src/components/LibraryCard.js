import React from "react";
import { FaExternalLinkAlt, FaEnvelope } from "react-icons/fa";
import "../styles/custom.css";

const LibraryCard = ({ name, isOpen, url, contact }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card shadow-sm h-100">
        <div className="card-body">
          <h5 className="card-title d-flex align-items-center gap-2">
            <span>{name}</span>
            {url && url !== "No URL Found" && (
              <a href={url} target="_blank" rel="noopener noreferrer">
                <FaExternalLinkAlt className="icon-link" />
              </a>
            )}
            {contact && contact.startsWith("mailto:") && (
              <a href={contact}>
                <FaEnvelope className="icon-link" />
              </a>
            )}
          </h5>
          <div className="mt-2">
            <span
              className={`status-badge ${
                isOpen ? "status-open" : "status-closed"
              }`}
            >
              {isOpen ? "Open" : "Closed"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LibraryCard;
