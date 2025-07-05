import { ReactPhotoSphereViewer } from "react-photo-sphere-viewer";

const My360Viewer = ({ liga }: { liga: string }) => {
  return (
    <div className="relative w-10/12 h-100 rounded-md overflow-hidden mx-auto">
      <ReactPhotoSphereViewer
        src={`assets/${liga}`}
        height={"100%"}
        width={"100%"}
        navbar={false}
        touchmoveTwoFingers={true}
        mousewheel={false}
      />
    </div>
  );
};

export default My360Viewer;
