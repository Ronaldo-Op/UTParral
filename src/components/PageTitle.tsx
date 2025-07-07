function PageTitle({ img, name }: { img: string; name: string }) {
  return (
    <div className="relative w-full aspect-16/6 shadow-md">
      <img src={img} alt="" className="w-full h-full object-cover" />
      <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/40 text-white w-full text-center text-6xl">
        {name}
      </h1>
    </div>
  );
}

export default PageTitle;
