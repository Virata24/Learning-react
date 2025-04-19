const API_KEY = "4335d1faa31364f7c57a2a788481dd02";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
    try {
        const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
        if (!response.ok) {
            throw new Error('Failed to fetch popular movies');
        }
        const data = await response.json();
        console.log("API Response:", data);
        return data.results || [];
    } catch (error) {
        console.error("Error fetching popular movies:", error);
        return []; // Return empty array in case of error
    }
};



export const searchMovies = async (query) => {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data =  await response.json()
    return data.results || [];
};
