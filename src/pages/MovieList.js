import { useFetch } from "../hooks/useFetch";
import { useTitle } from "../hooks/useTitle";
import { Card } from "../components/Card";
export const MovieList = ({ apiPath, title }) => {
  const { data: movies } = useFetch(apiPath);

  useTitle(title);

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7 ">
        {/* ---------------------------------- Card ---------------------------------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  ">
          {movies.map((movie) => {
            return <Card key={movie.id} movie={movie} />;
          })}
        </div>
      </section>
    </main>
  );
};
