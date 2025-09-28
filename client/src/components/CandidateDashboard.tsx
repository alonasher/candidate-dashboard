import React, { useEffect, useState, useMemo } from "react";
import { fetchCandidates } from "../api/candidates";
import { Candidate } from "../types/Candidate";
import { Typography, CircularProgress, Container, Box } from "@mui/material";
import CandidateTable from "./CandidateTable";
import CandidateFilters from "./CandidateFilters";
import { filterCandidates } from "../utils/filterCandidates";
import { Filter } from "../types/Filter";

const CandidateDashboard = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<Filter>({
    name: "",
    position: "",
    status: "",
    experienceYears: "",
  });
  const [resetCounter, setResetCounter] = useState(0);

  useEffect(() => {
    const getCandidates = async () => {
      try {
        const data = await fetchCandidates();
        setCandidates(data);
      } catch {
        setError("Failed to fetch candidates");
      } finally {
        setLoading(false);
      }
    };
    getCandidates();
  }, []);

  const positions = useMemo(
    () => Array.from(new Set(candidates.map((c) => c.position))),
    [candidates]
  );

  const statusOptions = useMemo(
    () => Array.from(new Set(candidates.map((c) => c.status))),
    [candidates]
  );

  const filteredCandidates = useMemo(() => filterCandidates(candidates,filter), [candidates, filter]);

  const handleResetFilters = () => {
    setFilter({
      name: "",
      position: "",
      status: "",
      experienceYears: "",
    });
    setResetCounter((prev) => prev + 1);
  };

  if (loading) return <CircularProgress />;
  if (error) return <Typography color="error">{error}</Typography>;

  return (
    <Container maxWidth="md">
      <Box my={4}>
        <Typography variant="h4" gutterBottom align="center">
          Candidate Dashboard
        </Typography>

        <CandidateFilters
          key={resetCounter}
          name={filter.name}
          setName={(name) =>
            setFilter((f) => ({
              ...f,
              name,
              position: name === "" ? "" : f.position,
            }))
          }
          position={filter.position}
          setPosition={(position) =>
            setFilter((f) => ({
              ...f,
              position,
              status: position === "" ? "" : f.status,
            }))
          }
          status={filter.status}
          setStatus={(status) => setFilter((f) => ({ ...f, status }))}
          experienceYears={filter.experienceYears}
          setExperienceYears={(experienceYears) =>
            setFilter((f) => ({ ...f, experienceYears }))
          }
          positions={positions}
          statusOptions={statusOptions}
          onClickReset={handleResetFilters}
        />
        <CandidateTable candidates={filteredCandidates} />
      </Box>
    </Container>
  );
};

export default CandidateDashboard;
