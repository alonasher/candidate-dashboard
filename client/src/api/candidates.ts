export const fetchCandidates = async () => {
  const response = await fetch("http://localhost:5000/api/candidates");
  if (!response.ok) {
    throw new Error("Failed to fetch candidates");
  }
  const data = await response.json();
  return data;
};