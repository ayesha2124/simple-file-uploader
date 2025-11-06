import React, { useState } from "react";
import axios from "axios";

function App() {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [fileUrl, setFileUrl] = useState("");

  const handleFileChange = (e) => setFile(e.target.files[0]);

  const handleUpload = async () => {
    if (!file) return alert("Select a file first.");
    setUploading(true);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post("http://localhost:5000/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setFileUrl(response.data.fileUrl);
      alert("File uploaded successfully!");
    } catch (err) {
      console.error("Upload Error:", err);
      alert("Upload failed");
    }

    setUploading(false);
  };

  return (
    <div style={{ padding: 50 }}>
      <h1>File Uploader</h1>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={uploading} style={{ marginLeft: 10 }}>
        {uploading ? "Uploading..." : "Upload"}
      </button>

      {fileUrl && (
        <div style={{ marginTop: 20 }}>
          <strong>Uploaded File URL:</strong>
          <p>
            <a href={fileUrl} target="_blank" rel="noopener noreferrer">
              {fileUrl}
            </a>
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
