import { useState } from "react";
import axios from "axios";
import { Button } from "./ui/button";

const CLOUD_NAME = "dme61qerc";
const UPLOAD_PRESET = "UTP_news";

const ImageUploader = ({ onUpload }: { onUpload: (url: string) => void }) => {
  const [preview, setPreview] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", UPLOAD_PRESET);

    try {
      const res = await axios.post(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
        formData
      );
      const imageUrl = res.data.secure_url;
      onUpload(imageUrl); // lo pasas al padre o lo guardas donde quieras
    } catch (err) {
      console.error("Error al subir la imagen", err);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="space-y-4 border">
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {preview && (
        <div className="w-48">
          <img src={preview} alt="preview" className="rounded shadow" />
        </div>
      )}
      {file && (
        <Button onClick={handleUpload} disabled={uploading}>
          {uploading ? "Subiendo..." : "Subir Imagen"}
        </Button>
      )}
    </div>
  );
};

export default ImageUploader;
