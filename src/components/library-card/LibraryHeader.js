import React from "react";
import { FaExternalLinkAlt, FaEnvelope } from "react-icons/fa";

const LibraryHeader = ({ name, url, contact }) => (
  <h5 className="card-title mb-0 d-flex align-items-center gap-2">
    <span>{name}</span>
    {url && url !== "No URL Found" && (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        title="Visit Website"
      >
        <FaExternalLinkAlt className="icon-link" />
      </a>
    )}
    {contact && contact.startsWith("mailto:") && (
      <a href={contact} title="Email Contact">
        <FaEnvelope className="icon-link" />
      </a>
    )}
  </h5>
);

export default LibraryHeader;
