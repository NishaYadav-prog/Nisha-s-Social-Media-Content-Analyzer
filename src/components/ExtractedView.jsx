import React from "react";
// import "./ExtractedView.css";

export default function ExtractedView({ items = [] }) {
  if (!items.length) return null;

  return (
    <div className="extracted-view">
      <h2 className="output-title">Output (editable):</h2>

      {items.map((item, idx) => (
        <div key={idx} className="output-block">
          <textarea
            className="output-text"
            defaultValue={item.text || "No text found"}
          />
        </div>
      ))}

      <p className="tip">
        Tip: You can edit and copy the text above after extraction.
      </p>
    </div>
  );
}
