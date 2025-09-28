import { filterCandidates} from "./filterCandidates";
import { Candidate } from "../types/Candidate";
import { Filter } from "../types/Filter";
import { describe, it, expect } from "vitest";

const candidates: Candidate[] = [
  { name: "Alice", position: "Developer", status: "Active", experienceYears: 3, email:"test@test.com" },
  { name: "Bob", position: "Designer", status: "Inactive", experienceYears: 5 , email:"test@test.com"},
  { name: "Charlie", position: "Developer", status: "Active", experienceYears: 7, email:"test@test.com" },
];

describe("filterCandidates", () => {
  it("filter by name", () => {
    const filter: Filter = { name: "ali", position: "", status: "", experienceYears: "" };
    const result = filterCandidates(candidates, filter);
    expect(result).toHaveLength(1);
    expect(result[0].name).toBe("Alice");
  });

  it("filter by position", () => {
    const filter: Filter = { name: "", position: "Developer", status: "", experienceYears: "" };
    const result = filterCandidates(candidates, filter);
    expect(result).toHaveLength(2);
  });

  it("filter by status", () => {
    const filter: Filter = { name: "", position: "", status: "Inactive", experienceYears: "" };
    const result = filterCandidates(candidates, filter);
    expect(result).toHaveLength(1);
    expect(result[0].name).toBe("Bob");
  });

  it("filter by experienceYears", () => {
    const filter: Filter = { name: "", position: "", status: "", experienceYears: "6" };
    const result = filterCandidates(candidates, filter);
    expect(result).toHaveLength(1);
    expect(result[0].name).toBe("Charlie");
  });

  it("filter by multiple fields", () => {
    const filter: Filter = { name: "char", position: "Developer", status: "Active", experienceYears: "6" };
    const result = filterCandidates(candidates, filter);
    expect(result).toHaveLength(1);
    expect(result[0].name).toBe("Charlie");
  });

  it("returns all candidates when no filter are applied", () => {
    const filter: Filter = { name: "", position: "", status: "", experienceYears: "" };
    const result = filterCandidates(candidates, filter);
    expect(result).toHaveLength(3);
  });
  
});