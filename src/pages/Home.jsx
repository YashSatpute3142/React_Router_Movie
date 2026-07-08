import { useEffect } from "react";
import "./Home.css";

export const Home = () => {

  useEffect(() => {
    const hero = document.querySelector(".hero");
    const glow = document.querySelector(".cursor-glow");

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
    <section className="hero">

      <div className="cursor-glow"></div>

      <div className="blob blob1"></div>
      <div className="blob blob2"></div>
      <div className="blob blob3"></div>

      <div className="hero-content">

        <span className="hero-badge">
          🎬 Welcome to YashFlix
        </span>

        <h1>
          Find Movies You'll
          <span> Never Forget</span>
        </h1>

        <p>
          Discover ratings, plots, actors, directors and
          explore thousands of movies from every genre.
        </p>

        <div className="hero-buttons">
          <button className="explore-btn">
            Explore Movies
          </button>

          <button className="learn-btn">
            Learn More
          </button>
        </div>

      </div>

      <div className="hero-gallery">

        <img
          src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400"
          alt=""
        />

        <img
          src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400"
          alt=""
        />

        <img
          src="https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=400"
          alt=""
        />

        <img
          src="https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400"
          alt=""
        />

        <img
          src="https://images.unsplash.com/photo-1513106580091-1d82408b8cd6?w=400"
          alt=""
        />

        <img
          src="https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?w=400"
          alt=""
        />

      </div>

    </section>
  );
};