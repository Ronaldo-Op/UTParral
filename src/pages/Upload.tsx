import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { isAuthenticated } from "@/lib/utils";

const CLOUD_NAME = "dme61qerc";
const UPLOAD_PRESET = "UTP_news";

function Upload() {
  const [preview, setPreview] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [form, setForm] = useState({
    title: "",
    synopsis: "",
    content: "",
    author: "",
    date: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      const loggedIn = await isAuthenticated();
      if (!loggedIn) {
        navigate("/");
      }
    };
    checkAuth();
  }, []);

  const newId = async (): Promise<string | null> => {
    const { data, error } = await supabase
      .from("news")
      .insert({})
      .select("id") // Asegúrate de seleccionar el campo 'id'
      .single(); // Solo necesitamos un resultado

    if (error) {
      console.error("Error al crear la fila vacía:", error.message);
      return null;
    }

    return data?.id ?? null;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
    }
  };

  const handleUpload = async (id: string) => {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", UPLOAD_PRESET);
    formData.append("public_id", id);

    try {
      const res = await axios.post(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
        formData
      );
      return res.data.secure_url;
    } catch (err) {
      console.error("Error al subir la imagen", err);
      return null;
    }
  };

  const deleteError = async (id: string) => {
    const { error } = await supabase.from("news").delete().eq("id", id);
    if (error) console.error("Error al eliminar fila temporal:", error.message);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setUploading(true);

    const id = await newId();

    if (!id) {
      alert("Error en supabase");
      return;
    }

    const imageUrl = await handleUpload(id);

    if (!imageUrl) {
      alert("Error al subir la imagen");
      await deleteError(id);
      return;
    }

    // Convertir la fecha local (YYYY-MM-DD) a ISO
    const fechaISO = new Date(form.date + "T00:00:00").toISOString();

    const { error } = await supabase
      .from("news")
      .update({
        title: form.title,
        synopsis: form.synopsis,
        content: form.content,
        author: form.author,
        date: fechaISO,
        img: imageUrl,
      })
      .eq("id", id);

    if (error) {
      console.error("Error al subir la noticia:", error.message);
      await deleteError(id);
    } else {
      alert("Noticia subida correctamente 🎉");
      setForm({
        title: "",
        synopsis: "",
        content: "",
        author: "",
        date: "",
      });
      setFile(null);
      setPreview(null);
      setUploading(false);
    }
  };

  return (
    <>
      <h1>Nueva noticia</h1>
      <hr />
      <form
        onSubmit={handleSubmit}
        className="space-y-4 max-w-lg mx-auto p-5 border m-5"
      >
        <input
          type="text"
          name="title"
          placeholder="Título"
          value={form.title}
          onChange={handleChange}
          className="w-full p-2 border"
        />
        <div className="space-y-4 p-4 border bg-white">
          <label
            htmlFor="image-upload"
            className="block w-full text-center cursor-pointer px-4 py-2 bg-primary text-accent rounded-md hover:bg-primary/90 transition"
          >
            Seleccionar imagen
          </label>
          <input
            id="image-upload"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
          {preview && (
            <div className="w-48 mx-auto">
              <img
                src={preview}
                alt="preview"
                className="shadow-md object-cover"
              />
            </div>
          )}
        </div>
        <textarea
          name="synopsis"
          placeholder="Sinopsis"
          value={form.synopsis}
          onChange={handleChange}
          className="w-full p-2 border h-24"
        />
        <textarea
          name="content"
          placeholder="Contenido"
          value={form.content}
          onChange={handleChange}
          className="w-full p-2 border h-32"
        />
        <input
          type="text"
          name="author"
          placeholder="Autor"
          value={form.author}
          onChange={handleChange}
          className="w-full p-2 border"
        />
        <label className="block">
          Fecha:
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            className="w-full p-2 border mt-1"
          />
        </label>
        <div className="flex gap-5">
          <Button type="submit">Publicar</Button>
          <Link to={"/admin"} className="no-underline-anim">
            <Button type="button">Cancelar</Button>
          </Link>
        </div>
      </form>
    </>
  );
}

export default Upload;
