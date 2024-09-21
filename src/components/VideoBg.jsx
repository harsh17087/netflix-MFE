import {useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBg = ({ id }) => {
  // fetch trailer video background
  const trailerVideo = useSelector((store) => store.movies?.movieTrailer);
  useMovieTrailer(id)

  return (
    <div className="">
      <iframe
      className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/"+trailerVideo?.key+"/?autoplay=1&mute=1"}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        
      ></iframe>
    </div>
  );
};

export default VideoBg;
