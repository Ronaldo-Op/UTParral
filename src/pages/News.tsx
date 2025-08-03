import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";

type Noticia = {
  id: string;
  title: string;
  synopsis: string;
  content: string;
  date: string;
  author: string;
  img: string;
};

const ITEMS_PER_PAGE = 5;

function News() {
  const [news, setNews] = useState<Noticia[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const page = parseInt(searchParams.get("page") || "1", 10);

  useEffect(() => {
    const fetchNotas = async () => {
      setLoading(true);
      const from = (page - 1) * ITEMS_PER_PAGE;
      const to = from + ITEMS_PER_PAGE - 1;

      const { data, error, count } = await supabase
        .from("news")
        .select("*", { count: "exact" })
        .order("date", { ascending: false })
        .range(from, to);

      if (error) console.error(error);
      else {
        setNews(data || []);
        setTotalPages(Math.ceil((count || 0) / ITEMS_PER_PAGE));
        window.scrollTo({ top: 0, behavior: "instant" }); // 👈 esta línea
      }

      setLoading(false);
    };

    fetchNotas();
  }, [page]);

  const goToPage = (newPage: number) => {
    navigate(`?page=${newPage}`);
  };
  return (
    <div>
      <h1>Noticias</h1>
      <hr />
      <div className="p-5 w-full flex flex-col gap-5">
        {news.map((n, i) => (
          <div key={i}>
            <Link
              to={`/noticias/${n.id}`}
              className="no-underline-anim text-inherit"
            >
              <div
                className="flex flex-col xs:flex-row group hover:cursor-pointer p-5 gap-5"
                onClick={() => console.log("Abrir noticia")}
              >
                <div className="w-2/12 hidden sm:block">{n.date}</div>
                <div className="w-full xs:w-1/2 sm:w-3/6">
                  <h2 className="group-hover:underline">{n.title}</h2>
                  <p className="">{n.synopsis}</p>
                  <span>{n.author}</span>
                </div>
                <div className="w-full xs:w-1/2 sm:w-4/12">
                  <img src={n.img} alt="" />
                </div>
              </div>
            </Link>
            <hr className="border border-neutral-400" />
          </div>
        ))}
      </div>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={(e) => {
                e.preventDefault();
                if (page > 1) goToPage(page - 1);
              }}
              className={`no-underline-anim ${
                page === 1 ? "pointer-events-none opacity-50" : ""
              }`}
            />
          </PaginationItem>

          {Array.from({ length: totalPages }).map((_, i) => (
            <PaginationItem key={i}>
              <PaginationLink
                isActive={page === i + 1}
                onClick={() => goToPage(i + 1)}
                className="no-underline-anim"
              >
                {i + 1}
              </PaginationLink>
            </PaginationItem>
          ))}

          {totalPages > 5 && <PaginationEllipsis />}

          <PaginationItem>
            <PaginationNext
              onClick={(e) => {
                e.preventDefault();
                if (page < totalPages) goToPage(page + 1);
              }}
              className={`no-underline-anim ${
                page === totalPages ? "pointer-events-none opacity-50" : ""
              }`}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}

export default News;
