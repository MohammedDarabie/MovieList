import { useEffect, useState } from "react";
import { useTitle } from "../hooks/useTitle";
import { useParams } from "react-router-dom";
import backImg from "../assets/backup.jpg";

export const MovieDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const image = data.poster_path
    ? `https://image.tmdb.org/t/p/w500/${data.poster_path}`
    : backImg;
  useEffect(() => {
    window.scrollTo(0, 0);
    async function fetchMoviesDetails() {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_APIKEY}`
      );
      const json = await response.json();
      setData(json);
      console.log(json);
    }
    fetchMoviesDetails();
  }, [id]);

  useTitle(data.title)
  return (
    <main>
      <section className="lg:h-[100vh]">
        <div className=" w-[70%] mx-auto pt-10 grid text-center lg:text-left grid-cols-1 lg:grid-cols-2 pb-10">
          {/* Left Div */}
          <div>
            <img className="rounded w-[300px] lg:w-[500px] mx-auto" src={image} alt="movie-img"></img>
          </div>
          {/* Right Div */}
          {/* TODO Dark Mode */}
          <div className=" dark:text-white pt-5 space-y-5">
            <h1 className="text-4xl">{data.title}</h1>
            <p className="text-xl">{data.overview}</p>
            {data.genres ? (<div>
              {data.genres.map((genre) => (
                <span className="border-[1px] mx-2 p-2 rounded-md">
                  {genre.name}
                </span>
              ))}
            </div>) : ""}
            {/* More Information */}
            <div className="pt-5 space-y-2">
              <span>
                ⭐ {data.vote_average} - {data.vote_count} reviews
              </span>
              <p>
                <span className="font-bold text-lg">Runtime :</span>{" "}
                {data.runtime} min.
              </p>
              <p>
                <span className="font-bold text-lg">Budget : </span>
                {data.budget}
              </p>
              <p >
                <span className="font-bold text-lg">Revenue : </span>
                {data.revenue}
              </p>
              <p>
                <span className="font-bold text-lg">Release Date : </span>
                {data.release_date}
              </p>
              <p>
                <span className="font-bold text-lg">IMDB Code : </span>
                {data.imdb_id}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
