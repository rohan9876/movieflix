import React, { useEffect, useState } from "react";
import "./tvshows.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import { BiPlay } from "react-icons/bi"
import { AiOutlinePlus } from "react-icons/ai"

const apiKey = "7e5122f42b3d47b2f9c1deaf4e1d2214";
const url = "https://api.themoviedb.org/3/discover/tv";
const trandingUrl = "https://api.themoviedb.org/3/trending/tv/week"
const imgUrl = "https://image.tmdb.org/t/p/original";
const popular = "popular";
const urlp = "https://api.themoviedb.org/3";

const Card = ({ img }) => <img className="card" src={img} alt="cover" />;

const Row = ({ title, arr = [] }) => (
    <div className="row"> 
        <h2>{title}</h2>

        <div>
            {arr.map((item, index) => (
                <Card key={index} img={`${imgUrl}/${item.poster_path}`} />
            ))}
        </div>
    </div>
);

const Home = () => {
    const [series, setSeries] = useState([]);
    const [PopularShows, setPopularShows] = useState([]);
    const [popularMovies, setPopularMovies] = useState([]);

    useEffect(() => { 
        const fetchSeries = async () => {
            const {
                data: { results },
            } = await axios.get(`${url}?api_key=${apiKey}`);
            setSeries(results);
        };
        
        const fetchPopularShows = async () => {
            const {
                data: { results },
            } = await axios.get(`${trandingUrl}?api_key=${apiKey}`);
            setPopularShows(results);
        };
        const fetchPopular = async () => {
            const {
                data: { results },
            } = await axios.get(`${urlp}/movie/${popular}?api_key=${apiKey}`);
            setPopularMovies(results);
        };

        fetchSeries();
        fetchPopularShows();
        fetchPopular();
    }, []);

    return (
        <section className="home">
            <div
                className="banner"
                style={{
                    backgroundImage: popularMovies[1]
                        ? `url(${`${imgUrl}/${popularMovies[1].poster_path}`})`
                        : "rgb(16, 16, 16)",
                }}
            >
                {popularMovies[1] && <h1>{popularMovies[1].original_title}</h1>}
                {popularMovies[1] && <p>{popularMovies[1].overview}</p>}

                <div>
                    <button><BiPlay /> Play  </button>
                    <button>My List <AiOutlinePlus /> </button>
                </div>
            </div>

            <Row title={"TV Shows"} arr={series} />
            <Row title={"Popular Shows"} arr={PopularShows} />
        </section>
    );
};

export default Home;
