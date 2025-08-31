import React, { useRef, useState } from "react";
// import "./DropZone.css";

export default function DropZone({ onFiles }) {
  const inputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFiles = (files) => {
    if (files.length > 0) {
      setSelectedFile(files[0]);
      onFiles(files);
    }
  };

  const clearFiles = () => {
    setSelectedFile(null);
    if (inputRef.current) inputRef.current.value = "";
    onFiles([]);
  };

  return (
    <div className="dropzone-container">
      <h2 className="title">OCR + PDF Text Extractor</h2>

      <div className="upload-box">
        <input
          ref={inputRef}
          type="file"
          accept="application/pdf,image/*"
          onChange={(e) => handleFiles(Array.from(e.target.files || []))}
        />
        {selectedFile && <span className="filename">{selectedFile.name}</span>}
        <button className="btn extract">Extract Text</button>
        <button className="btn clear" onClick={clearFiles}>
          Clear
        </button>
      </div>

      <p className="hint">
        Supported: PDF, PNG, JPG, JPEG, TIFF. For scanned PDFs, OCR will run
        automatically.
      </p>
    </div>
  );
}
