import { useLoaderData, useParams } from "react-router-dom"
import "./movieDetails.css"
import { useEffect } from "react";
export const MovieDetails = () => {

   // const params = useParams();
    const movieData = useLoaderData();
    console.log(movieData);
    
    
    const {
    Poster,
    Title,
    Year,
    Runtime,
    Genre,
    Director,
    Actors,
    Language,
    Country,
    Plot,
    imdbRating,
  } = useLoaderData();

  useEffect(() => {
      const hero = document.querySelector(".movie-details-page");
      const glow = document.querySelector(".movie-backdrop");
  
      const moveGlow = (e) => {
        const rect = hero.getBoundingClientRect();
  
        glow.style.left = `${e.clientX - rect.left}px`;
        glow.style.top = `${e.clientY - rect.top}px`;
      };
  
      hero.addEventListener("mousemove", moveGlow);
  
      return () => {
        hero.removeEventListener("mousemove", moveGlow);
      };
    }, []);

  return (
    <section className="movie-details-page">
      <div className="movie-backdrop"></div>

      <div className="movie-details-container">
        <div className="poster-section">
          <img src={Poster} alt={Title} />
        </div>

        <div className="content-section">
          <h1>{Title}</h1>

          <div className="info-badges">
            <span>⭐ {imdbRating}</span>
            <span>{Year}</span>
            <span>{Runtime}</span>
          </div>

          <p className="genre">{Genre}</p>

          <div className="info-grid">
            <div>
              <h4>Director</h4>
              <p>{Director}</p>
            </div>

            <div>
              <h4>Actors</h4>
              <p>{Actors}</p>
            </div>

            <div>
              <h4>Language</h4>
              <p>{Language}</p>
            </div>

            <div>
              <h4>Country</h4>
              <p>{Country}</p>
            </div>
          </div>

          <div className="plot">
            <h2>Story</h2>
            <p>{Plot}</p>
          </div>
        </div>
      </div>
    </section>
  )
}