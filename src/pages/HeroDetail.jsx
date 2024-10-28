import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography, CircularProgress } from "@mui/material";

const HeroDetail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const res = await fetch(
          `https://rickandmortyapi.com/api/character/${id}`
        );
        const data = await res.json();
        setCharacter(data);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCharacter();
  }, [id]);

  if (isLoading) return <CircularProgress />;

  return (
    <Box>
      <img src={character.image} alt={character.name} />
      <Typography variant="h4">{character.name}</Typography>
      <Typography>Status: {character.status}</Typography>
    </Box>
  );
};

export default HeroDetail;
