import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "@/lib/supabase";

type Noticia = {
  id: string;
  title: string;
  synopsis: string;
  content: string;
  date: string;
  author: string;
  img: string;
};

function NewsItem() {
  const { id } = useParams();
  const [noticia, setNoticia] = useState<Noticia | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNoticia = async () => {
      const { data, error } = await supabase
        .from("news")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        console.error("Error al cargar la noticia:", error.message);
      } else {
        setNoticia(data);
      }
      setLoading(false);
    };

    if (id) fetchNoticia();
  }, [id]);

  if (loading) return <p>Cargando...</p>;
  if (!noticia) return <p>No se encontró la noticia.</p>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{noticia.title}</h1>
      <p className="text-gray-500 text-sm mb-2">
        {new Date(noticia.date).toLocaleDateString()} | {noticia.author}
      </p>
      <img src={noticia.img} alt={noticia.title} className="mb-4 rounded" />
      <hr className="my-4" />
      <div className="whitespace-pre-line">{noticia.content}</div>
    </div>
  );
}
export default NewsItem;
