import { Candidate } from "../types/Candidate";
import { Filter } from "../types/Filter";

export const  filterCandidates = (
  candidates: Candidate[],
  filter: Filter ): Candidate[] => {
  return candidates.filter((c) => {
    const matchesName =
      !filter.name ||
      c.name.toLowerCase().includes(filter.name.toLowerCase());
    const matchesPosition =
      !filter.position || c.position === filter.position;
    const matchesStatus = !filter.status || c.status === filter.status;
    const matchesExperience =
      !filter.experienceYears ||
      c.experienceYears >= Number(filter.experienceYears);
    return matchesName && matchesPosition && matchesStatus && matchesExperience;
  });
}
