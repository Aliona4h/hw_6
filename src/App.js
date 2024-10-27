import React, { useEffect, useState } from "react";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  useEffect(() => {
    fetchCharacters(currentPage);
  }, [currentPage]);

  const fetchCharacters = async (page) => {
    setIsLoading(true);
    try {
      const res = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      if (!res.ok) throw new Error("Request Failed");
      const data = await res.json();
      setCharacters((prevCharacters) => [...prevCharacters, ...data.results]);
    } catch (error) {
      console.error("Error fetching characters:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const openModal = (character) => {
    setSelectedCharacter(character);
  };

  const closeModal = () => {
    setSelectedCharacter(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight &&
        !isLoading
      ) {
        setCurrentPage((prevPage) => prevPage + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoading]);

  return (
    <div>
      <div id="characters">
        {characters.map((character) => (
          <div key={character.id} onClick={() => openModal(character)}>
            <img src={character.image} alt={character.name} />
            <p>{character.name}</p>
            <p>{character.status}</p>
          </div>
        ))}
      </div>
      {isLoading && <p>Loading...</p>}

      {selectedCharacter && (
        <div id="characterModal" onClick={closeModal} className="modal">
          <div
            id="modalDetails"
            onClick={(e) => e.stopPropagation()}
            className="modal-content"
          >
            <img
              src={selectedCharacter.image}
              alt={selectedCharacter.name}
              className="modal-image"
            />
            <h2>{selectedCharacter.name}</h2>
            <p>Status: {selectedCharacter.status}</p>
            <button onClick={closeModal} className="close">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
