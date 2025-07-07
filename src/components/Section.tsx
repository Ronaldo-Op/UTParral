import type { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  title: string;
  img: string;
};
function Section({ children, title, img }: Props) {
  return (
    <div className="py-10 my-10 px-6 bg-card mb-5">
      <h2 className="mb-3">{title}</h2>
      <hr className="w-full" />
      <div className="flex flex-col xs:flex-row bg-card gap-3 mt-4">
        <div className="w-full xs:w-1/2 py-5 xs:py-0">
          <img src={img} alt="" className="h-auto max-h-96 rounded-lg" />
        </div>
        <div className="xs:w-1/2 flex flex-col gap-3">{children}</div>
      </div>
    </div>
  );
}

export default Section;
