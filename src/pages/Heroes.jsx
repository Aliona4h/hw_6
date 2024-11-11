import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useNavigate, useParams } from "react-router-dom";
import { Box, CircularProgress } from "@mui/material";
import HeroesLayout from "../layouts/HeroesLayout.jsx";
import HeroDetail from "./HeroDetail.jsx";

const Heroes = () => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const navigate = useNavigate();
  const { id } = useParams();

  const fetchCharacters = async (page) => {
    setIsLoading(true);
    try {
      const res = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      const data = await res.json();
      setCharacters(data.results);
      setTotalPages(data.info.pages);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCharacters(currentPage);
  }, [currentPage]);
  const handleRowClick = (params) => {
    navigate(`/heroes/${params.id}`);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage + 1);
  };

  return (
    <HeroesLayout
      mainContent={
        <Box
          sx={{
            height: 600,
            width: "100%",
            "& .MuiDataGrid-row": { cursor: "pointer" },
          }}
        >
          {isLoading ? (
            <CircularProgress />
          ) : (
            <DataGrid
              rows={characters}
              columns={[
                { field: "id", headerName: "ID", width: 90 },
                { field: "name", headerName: "Name", width: 250 },
                { field: "status", headerName: "Status", width: 130 },
              ]}
              pageSize={10}
              rowCount={totalPages * 10}
              pagination
              paginationMode="server"
              onPageChange={handlePageChange}
              loading={isLoading}
              onRowClick={handleRowClick}
            />
          )}
        </Box>
      }
      sidebarContent={id ? <HeroDetail id={id} /> : null}
    />
  );
};

export default Heroes;
