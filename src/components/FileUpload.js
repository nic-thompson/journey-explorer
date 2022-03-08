import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import css from "./css/FileUpload.module.css";

const FileUpload = () => {
    const [file, setFile] = useState(null);
    const handleChange = (file) => {
      setFile(file);
    };

  const handleSubmission = (event) => {
    const formData = new FormData();
    formData.append("file", file);
    fetch("/api/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  const fileTypes = ["CSV"];

  return (
    <div className={css['file-upload']}>
      <FileUploader
        multiple={true}
        handleChange={handleChange}
        name="file"
        types={fileTypes}
      />
      <p>{file && file[0].name ? `File name: ${file[0].name}` : "no files uploaded yet"}</p>
    </div>
  );
};

export default FileUpload;
