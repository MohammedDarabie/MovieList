import Sad from "../assets/sad.gif";
import { useTitle } from "../hooks/useTitle";
export const PageNotFound = () => {
  useTitle("Page not Found");
  return (
    <main>
      <section>
        <section className="flex-col justify-center items-center px-2 py-5 h-[100vh]">
          <div className="flex flex-col items-center my-4">
            <img
              className=" w-[200px] md:w-[400px] lg:w-[600px] hover:animate-spin"
              src={Sad}
              alt="Page not Found"
            />
            <p className="text-3xl lg:text-8xl text-gray-400 dark:text-white">
              404
            </p>
            <p className=" text-xl lg:text-5xl pt-5 text-gray-400 dark:text-white">
              Page Not Found
            </p>
          </div>
        </section>
      </section>
    </main>
  );
};
