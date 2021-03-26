import React from "react";

import Navigation from "./elements/Navigation";
import MovieInfo from "./elements/MovieInfo";
import MovieInfoBar from "./elements/MovieInfoBar";
import Actor from "./elements/Actor";
import Grid from "./elements/Grid";
import Spinner from "./elements/Spinner";
import { useMovieFetch } from "./hooks/useMovieFetch";
import Footer from "./elements/Footer";

const Movie = ({ movieId }) => {
  const [movie, loading, error] = useMovieFetch(movieId);
  console.log(movie);

  if (error) return <div>Something went wrong...</div>;
  if (loading) return <Spinner />;

  return (
    <>
      <Navigation movie={movie.original_title} />
      <MovieInfo movie={movie} />
      <MovieInfoBar
        time={movie.runtime}
        budget={movie.budget}
        revenue={movie.revenue}
      />

      <Grid header="Main Cast">
        {movie.actors.slice(0, 15).map((actor) => (
          <Actor key={actor.credit_id} actor={actor} />
        ))}
      </Grid>
      <Footer />
    </>
  );
};

export default Movie;
