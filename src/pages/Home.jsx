import MovieCard from "../compoents/MovieCard";
import { useState, useEffect } from "react";
import { searchMovies, getPopularMovies } from "../services/api";
import "../css/Home.css";

function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    // Load popular movies on initial render
    useEffect(() => {
        const loadPopularMovies = async () => {
            setLoading(true);
            try {
                const popularMovies = await getPopularMovies();
                console.log("Popular movies:", popularMovies); // Log the movies array
                setMovies(popularMovies); // Set the movies array
            } catch (err) {
                console.error("API error:", err);
                setError("Failed to load popular movies.");
            } finally {
                setLoading(false);
            }
        };
        loadPopularMovies();
    }, []);

    const handleSearch = async (e) => {
        e.preventDefault();
        if (!searchQuery.trim()) return;
        if (loading) return;
    
        setLoading(true);
    
        try {
            const searchResults = await searchMovies(searchQuery);
            setMovies(searchResults);
            setError(null);
        } catch (err) {
            console.log(err);
            setError("Failed to search movies....");
        } finally {
            setLoading(false); // Corrected typo here
        }
    
        setSearchQuery("");
    };
    

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input
                    type="text"
                    placeholder="Search for movies..."
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-button">
                    Search
                </button>
            </form>

            {error && <div className="error-message">(error)</div>}

            {loading ? <div className="loading">Loading...</div>: 
            
                <div className="movies-grid">
                {Array.isArray(movies) && movies.length > 0 ? (
                    movies.map((movie) => (
                        <MovieCard movie={movie} key={movie.id} />
                    ))
                ) : (
                    !loading && <p>No movies found.</p>
                )}
                </div>}
          

            
        </div>
    );
}

export default Home;

