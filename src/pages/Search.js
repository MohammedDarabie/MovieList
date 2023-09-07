import { Card } from "../components/Card";
import { useFetch } from "../hooks/useFetch";
import {useSearchParams} from 'react-router-dom'
import { useTitle } from "../hooks/useTitle";

export const Search = ({ apiPath }) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q")
  const { data: movies } = useFetch(apiPath , queryTerm);

  useTitle(`Search result for ${queryTerm}`)
  return (
    <main>
      <section className="py-7">
        <p className="text-3xl text-center text-gray-700 dark:text-white">
          {movies.length > 0 ? `Results for ${queryTerm}` : `No Result found for ${queryTerm}`}
        </p>
      </section>
      <section className="max-w-7xl mx-auto py-7">
        {/* ---------------------------------- Card ---------------------------------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-start flex-wrap ">
          {movies.map((movie) => {
            return <Card key={movie.id} movie={movie} />;
          })}
        </div>
      </section>
    </main>
  );
};
