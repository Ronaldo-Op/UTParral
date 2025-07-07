import { ReactPhotoSphereViewer } from "react-photo-sphere-viewer";

const My360Viewer = ({ liga }: { liga: string }) => {
  return (
    <div className="flex flex-col justify-center items-center border bg-card my-5 shadow-md rounded-xl">
      <h1 className="text-4xl font-bold my-5">Vista 360°</h1>
      <div className="w-full aspect-square xs:aspect-video overflow-hidden rounded-b-lg">
        {liga && (
          <ReactPhotoSphereViewer
            key={liga}
            src={`assets/${liga}`}
            height="100%"
            width="100%"
            navbar={false}
            mousewheel={false}
          />
        )}
      </div>
    </div>
  );
};

export default My360Viewer;
