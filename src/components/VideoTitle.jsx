const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video absolute text-white px-20 pt-[15%] bg-gradient-to-r from-black">
      <div>
        <h1 className="font-bold text-3xl">{title}</h1>
        <p className="py-6 text-lg w-1/4">
          {overview.length > 40 ? `${overview.slice(0, 150)}...` : overview}
        </p>
      </div>
      <div className="space-x-4">
        <button className="px-8 py-2 bg-gray-400 text-black text-lg rounded-md">
          ▶ Play
        </button>
        <button className="px-8 py-2 bg-gray-400 text-black text-lg rounded-md">
          ℹ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
