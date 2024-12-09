import React, { useEffect, useState } from "react";
import "../../styles/HeroSection.css"; 
import axios from "axios";
import { useParams,useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const { category = "general" } = useParams();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);

  const API_KEY = import.meta.env.VITE_API_KEY; 
const API_URL = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}&page=${page}&pageSize=10`;


useEffect(() => {
  const isLoggedIn = localStorage.getItem("auth");
  if (!isLoggedIn) {
    navigate("/login"); 
  }
}, [navigate]);

  useEffect(() => {
    setPage(1);
    fetchArticles();
  }, [category]);

  useEffect(() => {
    fetchArticles();
  }, [page]); 

  const fetchArticles = async () => {
    try {
      setLoading(true);
      const response = await axios.get(API_URL);
      setArticles(response.data.articles);
      setError(""); // Clear previous errors
    } catch (error) {
      setError(error.response?.data?.message || "Failed to fetch news articles.");
    } finally {
      setLoading(false);
    }
  };

  const handleNextPage = () => setPage((prevPage) => prevPage + 1);
  const handlePrevPage = () => setPage((prevPage) => Math.max(prevPage - 1, 1));

  return (
    <div className="container">
      <h1 className="heading">{category.charAt(0).toUpperCase() + category.slice(1)} News</h1>
      {loading && <p className="message">Loading...</p>}
      {error && <p className="error">{error}</p>}
      {!loading && !error && articles.length === 0 && (
        <p className="message">No news articles found.</p>
      )}
      <div className="articles">
        {articles.map((article, index) => (
          <div key={index} className="article">
            {article.urlToImage && (
              <img
                src={article.urlToImage}
                alt="Article"
                className="image"
              />
            )}
            <div className="content">
              <h2 className="title">
                <a href={article.url} target="_blank">
                  {article.title}
                </a>
              </h2>
              <p className="description">{article.description}</p>
              <p className="source">Source: {article.source.name}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button
          onClick={handlePrevPage}
          className="button"
          disabled={page === 1}
        >
          Previous
        </button>
        <span className="pageIndicator">Page {page}</span>
        <button onClick={handleNextPage} className="button">
          Next
        </button>
      </div>
    </div>
  );
};

export default Home;
