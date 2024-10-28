import { useState, useEffect } from "react";

const useFetchCharacters = (page) => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchCharacters = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(
          `https://rickandmortyapi.com/api/character?page=${page}`
        );
        const data = await res.json();
        setCharacters((prev) => [...prev, ...data.results]);
      } catch (error) {
        console.error("Error fetching characters:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCharacters();
  }, [page]);

  return { characters, isLoading };
};

export default useFetchCharacters;
